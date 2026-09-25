---
name: Diffusion & Pixels
description: A scholarly night-time manuscript explaining how image-generating AIs work.
colors:
  burnished-ochre: "#c9a24a"
  ochre-highlight: "#f2d78a"
  lapis-violet: "#7b6bff"
  lapis-mist: "#b3a8ff"
  verdigris: "#4ec9c1"
  madder-rose: "#e26d8b"
  midnight-indigo: "#0e0b1a"
  ink-well: "#16122a"
  ink-well-raised: "#1e1938"
  ink-well-high: "#251f45"
  folio-rule: "#2f2856"
  moonlit-vellum: "#ece9f5"
  faded-ink: "#a29fbf"
  ghost-ink: "#817e9b"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.5vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "General Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "General Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "General Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(0.875rem, 0.8rem + 0.35vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, SF Mono, monospace"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"
components:
  card:
    backgroundColor: "{colors.ink-well}"
    textColor: "{colors.moonlit-vellum}"
    rounded: "{rounded.lg}"
    padding: "24px"
  callout:
    backgroundColor: "{colors.ink-well}"
    textColor: "{colors.moonlit-vellum}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
  button-secondary:
    backgroundColor: "{colors.ink-well-raised}"
    textColor: "{colors.moonlit-vellum}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-solid:
    backgroundColor: "{colors.lapis-violet}"
    textColor: "{colors.midnight-indigo}"
    rounded: "12px"
    padding: "14px 24px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.faded-ink}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  chip-active:
    backgroundColor: "{colors.lapis-violet}"
    textColor: "{colors.midnight-indigo}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.ink-well}"
    textColor: "{colors.moonlit-vellum}"
    rounded: "12px"
    padding: "14px 18px"
  nav-link:
    textColor: "{colors.faded-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  code-inline:
    backgroundColor: "{colors.ink-well-raised}"
    textColor: "{colors.ochre-highlight}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.15em 0.4em"
---

# Design System: Diffusion & Pixels

## Overview

**Creative North Star: "The Illuminated Manuscript"**

This is a scholarly book read at night, lit from within. A deep indigo page, close to black, carries text in pale vellum. Knowledge is marked out with burnished ochre, as a scribe would gild a chapter number or a marginal note. Lapis violet, the pigment of illuminated manuscripts, is the second ink: it glows behind the hero, colors the interactive instruments, and blends into the ochre wherever the reader is invited to act. Fraunces serif headlines give each chapter the gravity of a printed volume. A quiet sans carries the long reading, and a monospace hand annotates numbers, formulas and chapter marks.

The mood is **scholarly, nocturnal and warm**. The page is dense with content but paced generously: a narrow reading column of about 72 characters, large vertical breaks between chapters, and lines that fade out at their ends to separate sections. Figures, diagrams and demos are presented like plates in a volume. They sit on raised ink-well panels with a hairline border and lift off the page. Atmosphere comes from light, not decoration: three soft radial glows (violet, ochre, verdigris) are fixed behind the page, with a faint grain of noise over everything, a quiet nod to diffusion itself.

**Key Characteristics:**
- Dark-only indigo page. Ochre marks structure, violet marks interaction and light.
- Serif display with italic ochre emphasis (`<em>`) inside every section title.
- Monospace labels for chapter numbers, years, callout labels and formulas.
- Lifted, bordered plates for figures, cards, callouts and demos.
- Reveal-on-scroll pacing with one long, soft easing curve.

## Colors

A nocturnal palette: layered indigo neutrals under two precious-pigment accents, burnished ochre and lapis violet, with verdigris and madder rose reserved for diagrams.

### Primary
- **Burnished Ochre** (`burnished-ochre`): the structural gilding. Used for chapter numbers, list markers, timeline years and nodes, callout labels, the callout's left rule, the card hover border and the slider accent. It's the most frequent diagram stroke (88 uses in the section SVGs).
- **Ochre Highlight** (`ochre-highlight`): the readable gold. Used for links, italic emphasis in titles and body text, h4 headings, inline code, `<pre>` text, table headers and figure-caption lead-ins.

### Secondary
- **Lapis Violet** (`lapis-violet`): light and interaction. Used for the page glow, the hero image's halo shadow, text selection, focus rings, solid buttons, active chips and the numbered steps in the token explorer. It pairs with ochre in a 135° gradient (violet to ochre) on card icons and the primary simulator button.
- **Lapis Mist** (`lapis-mist`): a soft violet tint, used sparingly in diagrams.

### Tertiary
- **Verdigris** (`verdigris`): the third diagram ink (46 uses in the SVGs) and the faint bottom glow of the page. It marks a third category in schematics: typically text/conditioning, next to ochre for images and violet for the model.
- **Madder Rose** (`madder-rose`): the caution pigment. It is the rule and label of the `callout-warn` variant, the X axis in the token explorer, and a contrast accent in diagrams.

### Neutral
- **Midnight Indigo** (`midnight-indigo`): the page. Also the text color on the gradient primary button.
- **Ink Well** (`ink-well`): the base plate for cards, tables, formulas, the simulator and the explorer's input.
- **Ink Well Raised** (`ink-well-raised`): table headers, `<pre>`, inline code, secondary buttons. It is also the bottom stop of the plate gradient.
- **Ink Well High** (`ink-well-high`): the highest surface, mostly for diagram fills.
- **Folio Rule** (`folio-rule`): every hairline, including borders, dividers, the timeline spine and table rules.
- **Moonlit Vellum** (`moonlit-vellum`): body text. `<strong>` and first table cells go up to pure white.
- **Faded Ink** (`faded-ink`): ledes, captions, card text, nav links. Contrast is 7.6:1 on the page.
- **Ghost Ink** (`ghost-ink`): footer, hero meta, hint labels. Contrast is 5:1 on the page and 4.7:1 on ink-well panels, so it passes AA while staying a clear step below Faded Ink.

### Named Rules
**The Ink-on-Pigment Rule.** Text set on a violet, ochre or violet-to-ochre fill is always Midnight Indigo, never white. Indigo reaches 5:1 on violet and 8:1 on ochre; white fails on both.

**The Axis Ink Rule.** In the token explorer, each axis keeps one ink whatever axis set is chosen: X is Madder Rose, Y is Verdigris, Z is Burnished Ochre. Words in a phrase take the manuscript inks in turn (lapis, ochre highlight, verdigris, madder rose, lapis mist), and every point also carries its word as a label, so color is never the only code.

**The Two Pigments Rule.** Ochre means *structure and knowledge*: numbering, emphasis, reading aids. Violet means *light and action*: glow, focus, interactive controls. When both appear together, they appear as the violet-to-ochre gradient, and only on a single focal element.

**The Ghost Ink Rule.** Ghost Ink is the quietest *readable* ink. Use it for metadata a reader can safely skip, never for status or instructions; those use Faded Ink or brighter.

## Typography

**Display Font:** Fraunces (with Georgia, serif)
**Body Font:** General Sans (with Helvetica Neue, sans-serif)
**Label/Mono Font:** JetBrains Mono (with SF Mono, monospace)

All three load from Fontshare. **Character:** a soft, old-style serif with real italics pairs with a clean, contemporary grotesk, like a scholarly edition typeset today. The monospace is the scribe's annotation hand.

### Hierarchy
- **Display** (Fraunces 500, fluid 2.5–5rem, line-height 1.1): the hero question only. Its key word is set in italic 400 ochre highlight.
- **Headline** (Fraunces 500, fluid 2–3.5rem): section titles. Each carries one phrase in italic ochre highlight (`<em>`).
- **Title** (Fraunces 500, fluid 1.5–2.25rem): h3 subsections, with 48px of space above.
- **Subtitle** (Fraunces 600, fluid 1.125–1.5rem, ochre highlight): h4 headings. Inside cards and timeline items, h4 switches to vellum.
- **Lede** (General Sans 400, fluid 1.125–1.5rem, faded ink, max 62ch): section introductions and the hero lede (52ch).
- **Body** (General Sans 400, fluid 1–1.125rem, line-height 1.65, max 72ch): all running text. `text-wrap: pretty` on paragraphs and `balance` on headings.
- **Caption** (General Sans, fluid 0.875–1rem, line-height 1.55, faded ink, centered): figcaptions, tables, card text.
- **Label** (JetBrains Mono, fluid 0.75–0.875rem, 0.2em tracking, ochre): chapter numbers such as `05 — ARCHITECTURE`. Callout labels use the same face at 0.15em tracking in uppercase.

### Named Rules
**The Gilded Word Rule.** Every section title holds exactly one italic ochre phrase: the word the chapter is really about. Don't gild more than one phrase per title.

**The Scribe's Hand Rule.** Monospace is for numbers, years, labels, formulas and code only. Never use it for sentences of prose.

## Layout

The page is a single, centered reading column. Body sections sit in a 960px container (`--content-default`) with 24px side gutters. Wider elements (the hero, the nav, dividers, `figure.wide`) extend to 1200px, and `--content-narrow` (680px) is available for tighter passages. Text measure is capped separately: 72ch for body and lists, 62ch for ledes.

Vertical rhythm comes from a 4px-based spacing scale (4 → 128px). Sections are padded fluidly from 64px to 96px (`clamp(4rem, 8vw, 6rem)`), with 64px to 128px for the hero. Chapters are separated by a 1px Folio Rule divider that fades out at both ends. Figures take 40px of vertical margin, and callouts and grids take 32px.

**Responsive behavior.** At 900px and below, the hero's two columns (1.05fr / 1fr) stack and the inline table of contents collapses behind a 36px menu toggle into a vertical list. At 720px and below, `grid-2`, `grid-3` and the simulator's canvas-plus-controls grid become one column. Tables scroll horizontally inside their wrapper. Anchor jumps are offset by 90px for the sticky nav.

## Elevation & Depth

Depth here is **lifted and structural**. Content plates (the hero image, figures and diagram frames) float above the indigo page on a real shadow, and cards rise physically when hovered. Behind everything sits a fixed atmosphere: three large radial glows and a noise overlay (3% opacity, overlay blend). The sticky nav is frosted glass: indigo at 85% opacity with a 16px backdrop blur.

### Shadow Vocabulary
- **Hairline** (`box-shadow: 0 1px 2px rgba(0,0,0,0.3)`): defined but currently unused.
- **Plate** (`box-shadow: 0 6px 20px rgba(0,0,0,0.35)`): figures and SVG frames at rest, and cards on hover.
- **Levitation** (`box-shadow: 0 20px 60px rgba(0,0,0,0.5)`): the hero image only, combined with the Lapis Halo.
- **Lapis Halo** (`box-shadow: 0 0 60px rgba(123,107,255,0.15)`): a violet glow reserved for the hero plate.
- **Ochre Ember** (`0 0 12px` in ochre): the glowing dots on the hero eyebrow and the timeline nodes.

### Named Rules
**The Lifted Plate Rule.** Anything the reader is meant to *study* (an illustration, a diagram, a demo) sits on a bordered ink-well plate that is raised off the page. Running text never gets a shadow.

**The Single Halo Rule.** The Lapis Halo and Levitation shadow belong to the hero alone. Elsewhere, the Plate shadow is the ceiling.

## Shapes

Corners are gently rounded and consistent. Plates, cards, callouts, tables, `<pre>` blocks, formulas and the simulator all use 16px (`rounded.lg`). Buttons and the simulator canvas use 10px. Inline code, nav links and the menu toggle use 6px. Pills (eyebrow, chips, the simulator badge, axis buttons) are fully round. The token explorer's embedded app departs from this with 12px (input and buttons) and 20px (its frame); treat those as drift, not new steps.

Borders are always 1px Folio Rule hairlines. The one ornamental shape is the callout's left rule: a 3px vertical bar with rounded ends, graded from ochre to violet and inset from the top and bottom, like a marginal marking.

## Components

### Buttons
Buttons should feel **lifted and tactile**: they respond physically to the pointer.
- **Shape:** gently rounded (10px). The token explorer's buttons use 12px.
- **Primary (gradient):** a 135° gradient from lapis violet to burnished ochre, with midnight-indigo text in weight 600 and no border. Used for the single main action of a demo ("▶ Lancer le débruitage").
- **Solid:** lapis violet with Midnight Indigo text, 14px × 24px padding. Used in the token explorer. Hover brightens the violet by 14% toward white and, on devices with hover, lifts it by 1px. Active pushes it back down.
- **Secondary:** Ink Well Raised with a Folio Rule border and vellum text, 8px × 16px padding. Hover turns the border ochre and lifts it by 1px.
- **Focus:** the browser's default focus ring. The token explorer's scene and input use a violet ring; buttons have no custom `:focus-visible` style yet.

### Chips
- **Style:** a transparent pill with a Folio Rule border and faded-ink text in the caption or label size. Hover turns the border violet and the text vellum.
- **State:** the active axis button fills with lapis violet and Midnight Indigo text, and exposes `aria-pressed`. Chips drive the token explorer's suggestion phrases and axis selection.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Ink Well. Callouts and diagram frames use a vertical gradient from Ink Well to Ink Well Raised.
- **Shadow Strategy:** flat at rest. On hover, a card gets an ochre border, a 2px lift and the Plate shadow.
- **Border:** a 1px Folio Rule hairline.
- **Internal Padding:** 24px for cards, 24px × 32px for callouts.
- **Card icon:** a 40px tile with a 10px radius, filled with the violet-to-ochre gradient, holding a white monospace glyph or number.

### Inputs / Fields
- **Style:** Ink Well background, Folio Rule border, 12px radius, 14px × 18px padding, General Sans at body size.
- **Focus:** the border turns lapis violet and a 3px violet ring appears at 15% opacity (the outline is removed and replaced by the ring).
- **Range slider:** a native slider tinted with `accent-color` burnished ochre.

### Navigation
- **Style:** a sticky frosted bar with a Folio Rule bottom border. On the left is the brand mark (a gradient ring with a core) plus "Diffusion & Pixels" in Fraunces. On the right is an inline table of contents with 21 short anchors.
- **Links:** caption size, faded ink, 0.02em tracking, 6px radius. Hover turns the text ochre highlight and adds a 4% white wash.
- **Mobile (≤900px):** a 36px bordered hamburger toggle (the border turns violet on hover) opens the table of contents as a full-width vertical list below a hairline.

### Callout (signature)
A marginal note: an ink-well plate with the ochre-to-violet left rule, headed by a monospace uppercase ochre label (for example "À retenir"). The `callout-warn` variant marks cautions: its rule and label turn Madder Rose and the plate takes a faint rose tint. The label always names the caution in words.

### Timeline (signature)
A vertical Folio Rule spine that fades at both ends. Each entry has a 17px ring node: indigo fill, 2px ochre border and an ochre ember glow. Below it come a monospace ochre year, a vellum h4 and faded-ink text.

### Figure plate (signature)
Illustrations and inline SVG diagrams sit on 16px-radius bordered plates with the Plate shadow. SVGs sit on the Ink Well gradient with 24px of padding. Diagram text follows fixed roles: vellum 13px body, faded 11px `label-muted`, ochre-highlight monospace 11px `label-mono`, and Fraunces 14px `label-title`. The figcaption is centered, in caption size, with an ochre-highlight lead-in in `<strong>`.

### Chapter header (signature)
A monospace ochre chapter number (for example `05 — ARCHITECTURE`), then the Fraunces headline with its gilded italic phrase, then a lede in faded ink.

## Do's and Don'ts

### Do:
- **Do** open every chapter with the chapter header pattern: a monospace ochre number, a headline with exactly one italic ochre phrase, then a faded-ink lede.
- **Do** put every illustration, diagram and demo on a lifted plate: Ink Well, a 1px Folio Rule border, 16px radius and the Plate shadow.
- **Do** color diagrams with the three inks (ochre, violet, verdigris) and label them with the four diagram text roles.
- **Do** use the CSS custom properties (`var(--color-*)`, `var(--space-*)`, `var(--radius-*)`) in new styles, never raw hex values or font names.
- **Do** use the single easing curve `cubic-bezier(0.16, 1, 0.3, 1)`: 220ms for UI state and 700ms for reveal-on-scroll. Honor `prefers-reduced-motion`.
- **Do** keep running text at 72ch or less, and ledes at 62ch or less.

### Don't:
- **Don't** put white text on violet, ochre or the violet-to-ochre gradient, and don't use Ghost Ink for status or instructions (see the Ink-on-Pigment and Ghost Ink rules).
- **Don't** introduce a light theme or light surfaces. The system is nocturnal only.
- **Don't** use the violet-to-ochre gradient on more than one focal element per component (the card icon, the primary demo button, the callout rule).
- **Don't** add radii outside the 6 / 10 / 16 / 24 / pill scale, as the token explorer's 12px and 20px do.
- **Don't** reference `--space-5`. It isn't defined in the scale, so the simulator's `gap` values that use it are currently ignored.
- **Don't** remove the browser focus ring without replacing it. Where a custom one exists, it is the violet ring used on the explorer's input and scene.
