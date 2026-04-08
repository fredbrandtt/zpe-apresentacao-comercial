# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML presentation** (pitch deck) for **ZPE Maranhao** — a Brazilian Special Export Processing Zone. It is a single-file web application (`index.html`, ~2800 lines) with all CSS and JS inlined. No build tools, no framework, no package manager.

## How to Run

Open `index.html` directly in a browser. No server or build step required.

## Architecture

- **Single file**: `index.html` contains all HTML slides, CSS styles, and JavaScript (navigation, animations, fullscreen, keyboard/touch controls)
- **Slide system**: Slides are `div.slide` elements inside a `div.slides-wrapper`. Navigation is arrow keys, click, or touch swipe. A progress bar and slide counter update via `updateNav()`
- **Slide 0 (cover)** uses `data-chapter="-1"` and hides the counter; slides 1-10 map to chapters 0-4
- **Theme variants**: `.slide-dark` (dark background), `.slide-light` (white background with subtle gradients), `.slide-hero` / `.slide-end` (background image with overlay), `.slide-capa` (cover)
- **Animations**: CSS `@keyframes` + JS class toggling (`.anim` elements get `.anim-in` when their slide becomes active)

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Complete presentation (HTML + CSS + JS) |
| `content.md` | Canonical text content for all 10 slides — **do not alter numbers or text without asking** |
| `design_system.md` | Color palette, typography, and design token reference (originally from a React/Tailwind version) |
| `fix.py` | Python script that applies batch edits to `index.html` (cover slide, theme classes, SVG replacements, CSS injection) |

## Content Rules

- All slide text, numbers, and data come from `content.md`. Read it before modifying any slide content.
- `content.md` header says: "Nao altere, resuma ou reinterprete nenhum dado, numero ou texto aqui contido." Follow this strictly.
- Slide 8 has placeholder values `[X]` that are filled before presentation.

## Design Tokens (CSS Custom Properties)

Colors use HSL without `hsl()` wrapper in variables (e.g., `--zpe-blue: 220 55% 32%`), then applied as `hsl(var(--zpe-blue))`.

- **Primary blue**: `--zpe-blue` / `hsl(220 55% 32%)`
- **Primary green**: `--zpe-green-primary` / `hsl(120 40% 49%)`
- **Impact numbers**: `.display-number` class, green color, Barlow 800 weight
- **Category labels**: `.label-cat` class, uppercase, 11px, Barlow 600

## Fonts

- **Barlow** (600, 700, 800, italic 300): headings, display numbers, labels
- **Inter** (400, 500, 600, italic 400): body text

## Assets

- `bg_hero_blue_compressed.jpg` — background for cover and final slides
- `logo-zpe.png`, `zpe_white.png` — ZPE logos (color and white)
- `governo-ma-logo.png`, `investe-ma-logo.png` — institutional logos
- `maranhao_stylized.jpg` — stylized map used in slide 2
- `world_dotted.svg` — dotted world map for slide 4
- `01-05.webp` — section photography
- `animacao.mp4` — video asset

## Language

All user-facing text is in **Brazilian Portuguese**. Code comments and class names are in English.
