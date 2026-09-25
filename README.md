# Diffusion & Pixels

Comment fonctionnent les IA génératrices d'images : une présentation didactique sur une seule page.

## Structure

`index.html` is a **generated** file. It's self-contained, with all CSS, JS and images inlined. Don't edit it directly. Edit the files in `src/` instead, then rebuild:

```sh
python build.py          # regenerate index.html
python build.py --check  # verify index.html matches src/
```

```
src/
  index.html        page skeleton: <head> plus the list of sections, in order
  partials/         nav, hero, footer
  sections/         one file per chapter (04-diffusion includes 04b-simulateur)
  styles/           main.css, token-explorer.css
  scripts/          reveal.js, denoise-sim.js, menu.js, token-explorer.js
  assets/           images, inlined as base64 at build time
```

Build directives (paths are relative to `src/`):

| In `src/`                                              | Becomes in `index.html`                  |
| ------------------------------------------------------ | ---------------------------------------- |
| `<!-- @include sections/foo.html -->`                  | the file's content                       |
| `<link rel="stylesheet" href="styles/x.css" data-inline />` | `<style>…</style>`                  |
| `<script src="scripts/x.js" data-inline></script>`     | `<script>…</script>`                     |
| `{{inline:assets/img.jpg}}`                            | `data:image/jpeg;base64,…`               |

To add a chapter, create a file in `sections/`, add an `@include` line to `src/index.html`, and add a link to the table of contents in `partials/nav.html`.
