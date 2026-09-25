# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily students and teachers in French-speaking education. Students read it to understand how image-generating AIs actually work. Teachers use it as reference reading or support material. Readers need no deep-learning background; some familiarity with programming helps but isn't required. The page is written for a long, focused read (about 40 minutes) that readers may take in several sittings.

## Product Purpose

*Diffusion & Pixels* is a free, public explainer covering how image-generating AIs work: from the mathematics of diffusion to the concrete architecture of Stable Diffusion, CLIP, U-Net/DiT, VAE and the latent space, then control techniques (ControlNet, LoRA, IP-Adapter), image editing, video, 3D, open source, the current frontier, limits and ethical issues. Success means a reader finishes it and genuinely understands the mechanism: an image model learns to remove noise, it is not a search engine, a collage or magic.

## Positioning

It is a single, progressive long read in French. Concepts are introduced one at a time with analogies, original SVG diagrams, and interactive demonstrations the reader can manipulate: a denoising simulator and a 3D token explorer. Equations are present but optional. It aims to be a real explanation, not an overview or a news roundup.

## Operating Context

- Read on the web at https://viclio.github.io/IAexplained/ (GitHub Pages, repo `Viclio/IAexplained`).
- Structured as 22 numbered chapters with a sticky table of contents. The reveal-on-scroll pacing supports reading in order.
- Source lives in `src/` (sections, partials, styles, scripts, assets). `python build.py` assembles it into the self-contained `index.html` that is deployed.

## Capabilities and Constraints

- Language: French.
- Interactive demos: the denoising simulator (`src/sections/04b-simulateur.html`, `src/scripts/denoise-sim.js`) and the token explorer (`src/sections/09-explorateur-tokens.html`, `src/scripts/token-explorer.js`). These are teaching reconstructions, not real models, and the copy says so.
- **Content must stay current.** Time-sensitive chapters ("Frontière 2026", the model comparison, video, 3D, open source) are expected to be updated as the field moves. Dated claims should stay easy to find and revise.
- The build currently inlines everything into one file. The user did not make that a binding requirement, and neither is French-only.

## Brand Commitments

- Name: **Diffusion & Pixels**. Author: Lionel Vicidomini.
- Voice: didactic, precise, and warm. It debunks misconceptions, uses concrete analogies, and signals clearly when something is simplified.
- Illustrations are AI-generated and diagrams are original SVGs, as the footer states.

## Evidence on Hand

- Full chapter content in `src/sections/`, plus AI-generated illustrations in `src/assets/`.
- Cited references, such as Rombach et al. 2022, in the "Pour aller plus loin" section of the conclusion.
- No testimonials, readership numbers or institutional endorsements exist. Don't invent any.

## Product Principles

1. Understanding over coverage: every addition must help a learner build the mental model, not just list facts.
2. Progressive disclosure: build intuition first, with analogies and visuals, and keep the formal detail (equations) optional.
3. Honest simplification: always say when a demo or diagram is a simplification of the real system.
4. Stay current and dated: frontier claims carry their date and get revised as the field changes.
5. Usable in teaching: chapters should hold up when a teacher points students at one of them on its own.
