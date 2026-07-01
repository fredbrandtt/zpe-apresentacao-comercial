# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML presentation** (pitch deck) for **ZPE Maranhão** — a Brazilian Special Export Processing Zone. It is a single-file web application (`index.html`, ~3.5k lines) with all CSS and JS inlined. No build tools, no framework, no package manager. Deployed via GitHub Pages to `pitch.zpema.com.br` (see `CNAME`).

## How to Run

Open `index.html` directly in a browser. No server or build step required.

## Front-end Standards (MANDATORY)

Any front-end work in this repo — new slides, restyling, animations, effects — MUST follow the four rules below. These override generic defaults.

1. **Design system is the single source of truth: `design_system/`.**
   The `design_system/` directory is the canonical ZPE Maranhão brand + visual system. Before writing or changing any UI, read `design_system/readme.md` (full guide: philosophy, color proportion, type, gradients, motion, brand rules) and `design_system/SKILL.md`. Pull tokens from `design_system/tokens/*.css` (`colors.css`, `fonts.css`, `typography.css`, `spacing.css`, `effects.css`) and mirror them into the inline CSS of `index.html` — do not invent off-brand colors, fonts, or effects.
   - The `.jsx` files under `design_system/components/` and `design_system/ui_kits/` are **reference implementations** (React/Tailwind). This project is vanilla HTML/CSS/JS — translate their intent into vanilla, do not import them.
   - There is only ONE design system: `design_system/`. The old `design_system.md` was removed to avoid a conflicting second source. Do not recreate it.

2. **Animations: use the GSAP skills.**
   For any animation, transition, scroll effect, or micro-interaction, use GSAP and consult the installed skills — `gsap-core` (tweens/easing/stagger/`matchMedia`), `gsap-timeline` (sequencing), `gsap-scrolltrigger` (scroll/pin/scrub), `gsap-plugins`, `gsap-performance`, and `gsap-utils`. Honor the design system's motion rules (easing `cubic-bezier(.2,0,0,1)`, 0.18–0.4s, no bounce, respect `prefers-reduced-motion` via `gsap.matchMedia()`). Existing slide reveals use CSS `@keyframes` + JS class toggling; new/complex motion should prefer GSAP.

3. **Quality bar: use the front-end design skill.**
   For every deliverable, invoke the front-end design skill (`frontend-design`) to hold the highest visual standard; the installed `impeccable` and `design-taste-frontend` skills are also available for design, redesign, polish, and audits. Goal: nothing looks templated or "AI-default" — it looks like the premium ZPE brand.

4. **Slides: use the frontend-slides skill.**
   When building or converting slides, use the `frontend-slides` skill for structure, layout, and animation-rich HTML presentation patterns. Match the existing slide system in `index.html` (see Architecture) and the deck templates in `design_system/slides/`.

## Configuration Flags

- **Marca do Governo (election period toggle)**: a `CONFIG` block at the top of `index.html` (`const MOSTRAR_MARCA_GOVERNO`) shows/hides the "Governo do Maranhão" logo (cover + final slide). Set to `false` to hide, or override per-view via the URL param `?governo=off` / `?governo=on` (URL wins over the constant). Hidden elements are tagged `class="gov-brand"`, driven by `html.hide-gov .gov-brand { display:none }`. "Investe Maranhão" is intentionally **not** affected.

## Architecture

- **Single file**: `index.html` contains all HTML slides, CSS styles, and JavaScript (navigation, animations, fullscreen, keyboard/touch controls, asset preloader, lightbox).
- **Slide system**: Slides are `div.slide` elements inside a `div.slides-wrapper`. Navigation is arrow keys, click, or touch swipe. A progress bar and slide counter update via `updateNav()`.
- **Slide 0 (cover)** uses `data-chapter="-1"` and hides the counter; slides 1-10 map to chapters 0-4.
- **Theme variants**: `.slide-dark` (dark background), `.slide-light` (white background with subtle gradients), `.slide-hero` / `.slide-end` (background image with overlay), `.slide-capa` (cover).
- **Animations**: CSS `@keyframes` + JS class toggling (`.anim` elements get `.anim-in` when their slide becomes active). New motion should use GSAP (see Front-end Standards).
- **Preloader**: a JS `assets` array (in the `<script>` at the bottom of `index.html`) preloads all media before the deck shows. Keep it in sync with `assets/` when adding/removing media.

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Complete presentation (HTML + CSS + JS) |
| `content.md` | Canonical text content for all 10 slides — **do not alter numbers or text without asking** |
| `design_system/` | Canonical brand & visual design system (tokens, components, guidelines, slide templates, `SKILL.md`). **Single source of truth for all UI.** |
| `fix.py` | Historical one-shot Python script that batch-edited `index.html` during an earlier migration. Its edits are already baked in — **do not re-run**; kept for reference only. |
| `CNAME` | GitHub Pages custom domain (`pitch.zpema.com.br`) |

## Assets

All media lives under `assets/` (organized; do not scatter files back into the repo root). If you move or rename an asset, update every reference in `index.html` (`<img>`/`<video>` `src`, the preloader `assets` array, and the `galleryImages` list) and the annotations in `content.md`.

```
assets/
├── images/   01.webp–05.webp (gallery), bg_hero_blue_compressed.jpg (cover/end bg),
│             maranhao_stylized.jpg (slide 2 map), zpe_3d.jpg, world_dotted.svg (dotted world map)
├── logos/    logo-zpe.png, zpe_white.png, governo-ma-logo.png, investe-ma-logo.png
└── videos/   animacao.mp4, modais.mp4, transicao_cabo_zpe.mp4, transicao_gps_zpe.mp4,
              transicao_modal_cabo.mp4, video_ships.mp4
```

`design_system/assets/` holds the brand's own vector assets (official logos, brand arrow, world map) — the source of truth for brand marks. `animacao.mp4` and the `transicao_*`/`modais` videos drive slide transitions.

## Content Rules

- All slide text, numbers, and data come from `content.md`. Read it before modifying any slide content.
- `content.md` header says: "Nao altere, resuma ou reinterprete nenhum dado, numero ou texto aqui contido." Follow this strictly — only touch structural/asset-path annotations, never the data or copy.
- Slide 8 has placeholder values `[X]` that are filled before presentation.

## Design Tokens (CSS Custom Properties)

Canonical values live in `design_system/tokens/`. In `index.html`, colors use HSL without the `hsl()` wrapper in variables (e.g., `--zpe-blue: 220 55% 32%`), then applied as `hsl(var(--zpe-blue))`.

- **Primary blue**: `--zpe-blue` / `hsl(220 55% 32%)` / `#244582` — institutional structure (~70% of the palette).
- **Primary green**: `--zpe-green-primary` / `hsl(120 40% 49%)` / `#4CAC4B` — action accent only (~10%, surgical). Never a large number/title in green directly over dark blue (use white; green stays in the detail).
- **Impact numbers**: `.display-number` class, green color, Barlow 800 weight.
- **Category labels**: `.label-cat` class, uppercase, 11px, Barlow 600.

## Fonts

Loaded in `index.html`: **Barlow** (300, 400, 500, 600, 700, 800, italic 300) for headings, display numbers, labels; **Inter** (400, 500, 600, italic 400) for body text. Both via Google Fonts.

The full `design_system/` type spec additionally calls for **JetBrains Mono** (uppercase eyebrows/labels/metadata) — add it from Google Fonts if a slide needs mono labels.

## Language

All user-facing text is in **Brazilian Portuguese**. Code comments and class names are in English.
