"""Assemble src/ into the single self-contained index.html.

Usage:  python build.py            (writes index.html)
        python build.py --check    (fails if index.html is out of date)

Directives understood in src/ files:
  <!-- @include path/to/file.html -->                 whole line -> file content (recursive)
  <link rel="stylesheet" href="x.css" data-inline />  whole line -> <style>...</style>
  <script src="x.js" data-inline></script>            whole line -> <script>...</script>
  {{inline:assets/img.jpg}}                           -> data:image/jpeg;base64,...
All paths are relative to src/.
"""
import base64
import mimetypes
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
OUT = ROOT / "index.html"

INCLUDE = re.compile(rb"^\s*<!-- @include (\S+) -->\r?\n?$")
STYLE = re.compile(rb'^(\s*)<link rel="stylesheet" href="([^"]+)" data-inline />(\r?\n?)$')
SCRIPT = re.compile(rb'^(\s*)<script((?: [a-z]+="[^"]*")*?) src="([^"]+)" data-inline></script>(\r?\n?)$')
ASSET = re.compile(rb"\{\{inline:([^}]+)\}\}")


def data_uri(match):
    path = SRC / match.group(1).decode()
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return b"data:" + mime.encode() + b";base64," + base64.b64encode(path.read_bytes())


def inline_file(rel):
    return ASSET.sub(data_uri, (SRC / rel.decode()).read_bytes())


def render(path, stack=()):
    if path in stack:
        raise SystemExit(f"include cycle: {' -> '.join(map(str, stack + (path,)))}")
    out = []
    for line in path.read_bytes().splitlines(keepends=True):
        if m := INCLUDE.match(line):
            out.append(render(SRC / m.group(1).decode(), stack + (path,)))
        elif m := STYLE.match(line):
            indent, href, nl = m.groups()
            out += [indent, b"<style>", nl, inline_file(href), indent, b"</style>", nl]
        elif m := SCRIPT.match(line):
            indent, attrs, src, nl = m.groups()
            out += [indent, b"<script", attrs, b">", nl, inline_file(src), indent, b"</script>", nl]
        else:
            out.append(ASSET.sub(data_uri, line))
    return b"".join(out)


def main():
    html = render(SRC / "index.html")
    if "--check" in sys.argv:
        if not OUT.exists() or OUT.read_bytes() != html:
            raise SystemExit("index.html is out of date - run: python build.py")
        print("index.html is up to date")
        return
    OUT.write_bytes(html)
    print(f"wrote {OUT.name} ({len(html):,} bytes)")


if __name__ == "__main__":
    main()
