# ZPE Maranhao - Design System Reference

> **Summary:** This design system powers the ZPE Maranhao institutional landing page, a Vite + React 18 + TypeScript project. Styling is driven by **Tailwind CSS 3.4.17** with CSS custom properties (HSL-based) defined in `src/index.css`, extended via `tailwind.config.ts`. The component library is built on **shadcn/ui** (Radix UI primitives) with **Class Variance Authority (CVA)** for variant management. Class merging uses `clsx` + `tailwind-merge` via a `cn()` utility (`src/lib/utils.ts`). Dark mode uses a **class-based** strategy (`.dark`). Animations combine Tailwind keyframes, CSS `@keyframes`, and **Framer Motion**. The architecture follows Tailwind's `@layer base / components / utilities` convention with semantic color tokens aliased from brand primitives.

---

## 1. Color Palette

### 1.1 Brand Primitives

| Token | HSL Value | Hex Approx. | Defined In |
|---|---|---|---|
| `--zpe-blue` | `220 55% 32%` | `#244582` | [index.css:15](src/index.css#L15) |
| `--zpe-green-primary` | `120 40% 49%` | `#4CAC4B` | [index.css:17](src/index.css#L17) |
| `--zpe-green-secondary` | `120 39% 51%` | `#53B053` | [index.css:19](src/index.css#L19) |
| `--zpe-green-light` | `120 36% 54%` | `#5FB55E` | [index.css:21](src/index.css#L21) |
| `--zpe-gray` | `194 20% 74%` | `#B0C4C9` | [index.css:23](src/index.css#L23) |

### 1.2 Semantic Tokens (Light Mode - `:root`)

| Token | HSL Value | Resolves To | Usage | Defined In |
|---|---|---|---|---|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background | [index.css:27](src/index.css#L27) |
| `--foreground` | `220 55% 32%` | `--zpe-blue` | Default text color | [index.css:28](src/index.css#L28) |
| `--card` | `0 0% 100%` | `#FFFFFF` | Card background | [index.css:30](src/index.css#L30) |
| `--card-foreground` | `220 55% 32%` | `--zpe-blue` | Card text | [index.css:31](src/index.css#L31) |
| `--popover` | `0 0% 100%` | `#FFFFFF` | Popover background | [index.css:33](src/index.css#L33) |
| `--popover-foreground` | `220 55% 32%` | `--zpe-blue` | Popover text | [index.css:34](src/index.css#L34) |
| `--primary` | `220 55% 32%` | `--zpe-blue` | Institutional blue, headings, primary buttons | [index.css:36](src/index.css#L36) |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary bg | [index.css:38](src/index.css#L38) |
| `--secondary` | `120 40% 49%` | `--zpe-green-primary` | CTAs, accents, green highlights | [index.css:40](src/index.css#L40) |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on secondary bg | [index.css:42](src/index.css#L42) |
| `--muted` | `194 20% 94%` | Light gray | Muted backgrounds | [index.css:44](src/index.css#L44) |
| `--muted-foreground` | `220 30% 45%` | Medium blue-gray | Subtle text, descriptions | [index.css:45](src/index.css#L45) |
| `--accent` | `120 39% 51%` | `--zpe-green-secondary` | Accent highlights | [index.css:47](src/index.css#L47) |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent bg | [index.css:48](src/index.css#L48) |
| `--destructive` | `0 84% 60%` | Red | Error states, destructive actions | [index.css:50](src/index.css#L50) |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | Text on destructive bg | [index.css:51](src/index.css#L51) |
| `--border` | `194 20% 85%` | Light gray-blue | Default borders | [index.css:53](src/index.css#L53) |
| `--input` | `194 20% 85%` | Same as border | Input borders | [index.css:54](src/index.css#L54) |
| `--ring` | `120 40% 49%` | `--zpe-green-primary` | Focus rings | [index.css:55](src/index.css#L55) |

### 1.3 Sidebar Tokens (Light Mode)

| Token | HSL Value | Usage | Defined In |
|---|---|---|---|
| `--sidebar-background` | `220 55% 32%` | Sidebar bg (blue) | [index.css:60](src/index.css#L60) |
| `--sidebar-foreground` | `0 0% 100%` | Sidebar text (white) | [index.css:61](src/index.css#L61) |
| `--sidebar-primary` | `120 40% 49%` | Sidebar primary actions | [index.css:62](src/index.css#L62) |
| `--sidebar-primary-foreground` | `0 0% 100%` | Text on sidebar primary | [index.css:63](src/index.css#L63) |
| `--sidebar-accent` | `120 39% 51%` | Sidebar accent | [index.css:64](src/index.css#L64) |
| `--sidebar-accent-foreground` | `0 0% 100%` | Text on sidebar accent | [index.css:65](src/index.css#L65) |
| `--sidebar-border` | `220 40% 40%` | Sidebar borders | [index.css:66](src/index.css#L66) |
| `--sidebar-ring` | `120 40% 49%` | Sidebar focus rings | [index.css:67](src/index.css#L67) |

### 1.4 Dark Mode Overrides (`.dark` class)

| Token | Light Value | Dark Value | Defined In |
|---|---|---|---|
| `--background` | `0 0% 100%` | `220 55% 8%` | [index.css:80](src/index.css#L80) |
| `--foreground` | `220 55% 32%` | `0 0% 95%` | [index.css:81](src/index.css#L81) |
| `--card` | `0 0% 100%` | `220 55% 12%` | [index.css:83](src/index.css#L83) |
| `--card-foreground` | `220 55% 32%` | `0 0% 95%` | [index.css:84](src/index.css#L84) |
| `--popover` | `0 0% 100%` | `220 55% 12%` | [index.css:86](src/index.css#L86) |
| `--popover-foreground` | `220 55% 32%` | `0 0% 95%` | [index.css:87](src/index.css#L87) |
| `--primary` | `220 55% 32%` | `120 40% 49%` | [index.css:89](src/index.css#L89) |
| `--primary-foreground` | `0 0% 100%` | `220 55% 8%` | [index.css:90](src/index.css#L90) |
| `--secondary` | `120 40% 49%` | `220 55% 32%` | [index.css:92](src/index.css#L92) |
| `--secondary-foreground` | `0 0% 100%` | `0 0% 100%` | [index.css:93](src/index.css#L93) |
| `--muted` | `194 20% 94%` | `220 40% 20%` | [index.css:95](src/index.css#L95) |
| `--muted-foreground` | `220 30% 45%` | `194 20% 74%` | [index.css:96](src/index.css#L96) |
| `--accent` | `120 39% 51%` | `120 39% 51%` | [index.css:98](src/index.css#L98) |
| `--accent-foreground` | `0 0% 100%` | `220 55% 8%` | [index.css:99](src/index.css#L99) |
| `--border` | `194 20% 85%` | `220 40% 25%` | [index.css:101](src/index.css#L101) |
| `--input` | `194 20% 85%` | `220 40% 25%` | [index.css:102](src/index.css#L102) |
| `--ring` | `120 40% 49%` | `120 40% 49%` | [index.css:103](src/index.css#L103) |

> **Note:** In dark mode, `--primary` and `--secondary` swap roles: primary becomes green and secondary becomes blue.

### 1.5 Tailwind Color Aliases

All semantic tokens are mapped to Tailwind utilities in [tailwind.config.ts:16-70](tailwind.config.ts#L16-L70) via `hsl(var(--token))` pattern. Brand colors are nested under `zpe.*`:

```
zpe.blue        -> hsl(var(--zpe-blue))
zpe.green.primary   -> hsl(var(--zpe-green-primary))
zpe.green.secondary -> hsl(var(--zpe-green-secondary))
zpe.green.light     -> hsl(var(--zpe-green-light))
zpe.gray        -> hsl(var(--zpe-gray))
```

### 1.6 Gradient Tokens

| Token / Name | Value | Defined In |
|---|---|---|
| `--hero-gradient` | `linear-gradient(135deg, hsl(220 55% 32%) 0%, hsl(220 55% 25%) 100%)` | [index.css:70](src/index.css#L70) |
| `bg-hero-pattern` | `linear-gradient(135deg, hsl(220 55% 32%) 0%, hsl(220 55% 22%) 100%)` | [tailwind.config.ts:139](tailwind.config.ts#L139) |
| `bg-card-gradient` | `linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(194 20% 98%) 100%)` | [tailwind.config.ts:140](tailwind.config.ts#L140) |
| `bg-gradient-radial` | `radial-gradient(var(--tw-gradient-stops))` | [tailwind.config.ts:138](tailwind.config.ts#L138) |
| `.text-gradient-primary` | `bg-gradient-to-r from-primary to-primary/80` (clip text) | [index.css:252](src/index.css#L252) |
| `.text-gradient-accent` | `bg-gradient-to-r from-secondary to-accent` (clip text) | [index.css:256](src/index.css#L256) |

> **Warning:** `--hero-gradient` ends at `hsl(220 55% 25%)` while `bg-hero-pattern` ends at `hsl(220 55% 22%)` - these are slightly different dark endpoints.

---

## 2. Typography

### 2.1 Font Families

| Token | Stack | Loaded From | Defined In |
|---|---|---|---|
| `font-sans` (default) | `'Inter', system-ui, sans-serif` | Google Fonts (400, 500, 600, 700, 800) | [tailwind.config.ts:73](tailwind.config.ts#L73), [index.css:1](src/index.css#L1) |
| `font-barlow` | `'Barlow', sans-serif` | Google Fonts (300, 400, 500, 600, 700) | [tailwind.config.ts:74](tailwind.config.ts#L74), [index.html:9](index.html#L9) |

### 2.2 Font Weights

| Weight | Numeric | Available In |
|---|---|---|
| Light | 300 | Barlow only |
| Regular | 400 | Inter, Barlow |
| Medium | 500 | Inter, Barlow |
| Semi-bold | 600 | Inter, Barlow |
| Bold | 700 | Inter, Barlow |
| Extra-bold | 800 | Inter only |

### 2.3 Custom Type Scale

| Token | Size | Line Height | Letter Spacing | Defined In |
|---|---|---|---|---|
| `text-display` | `4.5rem` (72px) | `1.1` | `-0.02em` | [tailwind.config.ts:77](tailwind.config.ts#L77) |
| `text-hero` | `3.5rem` (56px) | `1.15` | `-0.02em` | [tailwind.config.ts:78](tailwind.config.ts#L78) |
| `text-section` | `2.5rem` (40px) | `1.2` | `-0.01em` | [tailwind.config.ts:79](tailwind.config.ts#L79) |

> Standard Tailwind type scale (`text-xs` through `text-9xl`) is also available via the default Tailwind config.

### 2.4 Heading Defaults

All headings (`h1`-`h6`) apply `font-bold tracking-tight text-primary` globally via [index.css:122-128](src/index.css#L122-L128).

### 2.5 Body Defaults

Body applies `bg-background text-foreground font-sans antialiased` with `font-family: 'Inter', system-ui, sans-serif` via [index.css:117-119](src/index.css#L117-L119).

---

## 3. Spacing & Layout

### 3.1 Custom Spacing Tokens

| Token | Value | Equivalent | Usage | Defined In |
|---|---|---|---|---|
| `spacing-header` | `5rem` | 80px | Header height spacing | [tailwind.config.ts:95](tailwind.config.ts#L95) |
| `spacing-section` | `5rem` | 80px | Section vertical padding | [tailwind.config.ts:96](tailwind.config.ts#L96) |
| `--section-padding` | `5rem` | 80px | CSS var for section padding | [index.css:74](src/index.css#L74) |
| `--header-height` | `5rem` | 80px | CSS var for header height | [index.css:76](src/index.css#L76) |
| `--bento-gap` | `1rem` | 16px | Bento grid gap | [index.css:73](src/index.css#L73) |

> Standard Tailwind spacing scale (0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96) is fully available.

### 3.2 Container

| Property | Value | Defined In |
|---|---|---|
| Max width | `1400px` (at `2xl` breakpoint) | [tailwind.config.ts:12](tailwind.config.ts#L12) |
| Padding | `2rem` (32px) | [tailwind.config.ts:10](tailwind.config.ts#L10) |
| Centering | `margin: 0 auto` | [tailwind.config.ts:9](tailwind.config.ts#L9) |
| `--container-max` | `1400px` | [index.css:75](src/index.css#L75) |

### 3.3 Breakpoints

Tailwind 3 defaults (mobile-first):

| Name | Min Width | Defined In |
|---|---|---|
| `sm` | `640px` | Tailwind default |
| `md` | `768px` | Tailwind default |
| `lg` | `1024px` | Tailwind default |
| `xl` | `1280px` | Tailwind default |
| `2xl` | `1536px` | Tailwind default |

### 3.4 Z-Index Scale

No custom z-index tokens defined. Standard Tailwind z-index utilities (`z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`) are used.

---

## 4. Border & Shape

### 4.1 Border Radius Tokens

| Token | Value | Equivalent | Defined In |
|---|---|---|---|
| `--radius` | `1rem` | 16px | [index.css:57](src/index.css#L57) |
| `rounded-lg` | `var(--radius)` | 16px | [tailwind.config.ts:82](tailwind.config.ts#L82) |
| `rounded-md` | `calc(var(--radius) - 2px)` | 14px | [tailwind.config.ts:83](tailwind.config.ts#L83) |
| `rounded-sm` | `calc(var(--radius) - 4px)` | 12px | [tailwind.config.ts:84](tailwind.config.ts#L84) |
| `rounded-2xl` | `1rem` | 16px | [tailwind.config.ts:85](tailwind.config.ts#L85) |
| `rounded-3xl` | `1.5rem` | 24px | [tailwind.config.ts:86](tailwind.config.ts#L86) |
| `rounded-4xl` | `2rem` | 32px | [tailwind.config.ts:87](tailwind.config.ts#L87) |

> **Note:** `rounded-lg` and `rounded-2xl` both resolve to `1rem` (16px).

### 4.2 Border Width Tokens

No custom border width tokens. Standard Tailwind defaults used (`border` = 1px, `border-2` = 2px, etc.).

### 4.3 Border Color Tokens

| Token | Resolves To | Usage |
|---|---|---|
| `border-border` | `hsl(var(--border))` | Default border color (applied globally via `* { @apply border-border }`) |
| `border-input` | `hsl(var(--input))` | Input borders |
| `border-primary` | `hsl(var(--primary))` | Outline button borders |
| `border-secondary/30` | `hsl(var(--secondary)) / 30%` | Card hover borders |
| `border-white/20` | `#FFFFFF / 20%` | Glass effect borders |
| `border-white/10` | `#FFFFFF / 10%` | Dark glass borders |

---

## 5. Shadows & Effects

### 5.1 Shadow Tokens

| Token | Value | Usage | Defined In |
|---|---|---|---|
| `shadow-bento` / `--card-shadow` | `0 4px 24px -4px hsl(220 55% 32% / 0.12)` | Card resting state | [tailwind.config.ts:90](tailwind.config.ts#L90), [index.css:71](src/index.css#L71) |
| `shadow-bento-hover` / `--card-shadow-hover` | `0 12px 32px -8px hsl(220 55% 32% / 0.2)` | Card hover state | [tailwind.config.ts:91](tailwind.config.ts#L91), [index.css:72](src/index.css#L72) |
| `shadow-glass` | `0 8px 32px 0 rgba(31, 38, 135, 0.15)` | Glass morphism | [tailwind.config.ts:92](tailwind.config.ts#L92) |

> Standard Tailwind shadows (`shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`) are also available.

### 5.2 Glass / Backdrop Effects

| Class | Properties | Defined In |
|---|---|---|
| `.glass` | `bg-white/80 backdrop-blur-lg border border-white/20` | [index.css:193](src/index.css#L193) |
| `.glass-dark` | `bg-primary/90 backdrop-blur-lg border border-white/10` | [index.css:197](src/index.css#L197) |
| `.data-card` | `bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white` | [index.css:188](src/index.css#L188) |

### 5.3 Opacity

No custom opacity tokens. Standard Tailwind opacity utilities and `/` alpha modifier syntax used throughout (e.g., `bg-primary/85`, `border-border/50`).

---

## 6. Motion & Animation

### 6.1 Tailwind Keyframe Animations

| Name | Duration | Easing | Behavior | Defined In |
|---|---|---|---|---|
| `accordion-down` | `0.2s` | `ease-out` | Height 0 -> auto | [tailwind.config.ts:99-101](tailwind.config.ts#L99-L101) |
| `accordion-up` | `0.2s` | `ease-out` | Height auto -> 0 | [tailwind.config.ts:103-105](tailwind.config.ts#L103-L105) |
| `fade-in-up` | `0.6s` | `ease-out` | Opacity 0 + Y+20px -> visible | [tailwind.config.ts:107-109](tailwind.config.ts#L107-L109) |
| `fade-in` | `0.5s` | `ease-out` | Opacity 0 -> 1 | [tailwind.config.ts:111-113](tailwind.config.ts#L111-L113) |
| `slide-in-right` | `0.5s` | `ease-out` | Opacity 0 + X-20px -> visible | [tailwind.config.ts:115-117](tailwind.config.ts#L115-L117) |
| `scale-in` | `0.4s` | `ease-out` | Opacity 0 + scale(0.95) -> visible | [tailwind.config.ts:119-121](tailwind.config.ts#L119-L121) |
| `float` | `6s` | `ease-in-out` | Y 0 -> -10px -> 0, infinite | [tailwind.config.ts:123-125](tailwind.config.ts#L123-L125) |

All entrance animations use `forwards` fill mode.

### 6.2 CSS Keyframe Animations (outside Tailwind)

| Name | Duration | Easing | Usage | Defined In |
|---|---|---|---|---|
| `fadeInUp` | `0.6s` | `ease-out` | Scroll reveal entrance | [index.css:266-276](src/index.css#L266-L276) |
| `fadeIn` | `0.5s` | `ease-out` | General fade in | [index.css:278-285](src/index.css#L278-L285) |
| `slideInRight` | `0.5s` | `ease-out` | Slide from left | [index.css:288-298](src/index.css#L288-L298) |
| `scaleIn` | `0.4s` | `ease-out` | Scale entrance | [index.css:300-310](src/index.css#L300-L310) |
| `electric-flow` | `2.4s` | `linear`, infinite | Infrastructure path animation | [index.css:340-348](src/index.css#L340-L348) |
| `dot-pulse-anim` | `3s` | `ease-in-out`, infinite | Map dot pulse | [index.css:355-365](src/index.css#L355-L365) |
| `hub-breathe-anim` | `4s` | `ease-in-out`, infinite | Hub scale + glow pulse | [index.css:372-384](src/index.css#L372-L384) |
| `infra-animation-path` | `3s` | `cubic-bezier(0,0,0.2,1)`, infinite | Infrastructure light paths | [index.css:412-430](src/index.css#L412-L430) |
| `livePhoto` | `10s` | `ease-in-out`, infinite alternate | Subtle image motion | [index.css:515-527](src/index.css#L515-L527) |
| `logo-spin` | `20s` | `linear`, infinite | Logo rotation (App.css, unused) | [App.css:22-28](src/App.css#L22-L28) |

### 6.3 Animation Utility Classes

| Class | Animation | Defined In |
|---|---|---|
| `.animate-fade-in-up` | `fadeInUp 0.6s ease-out forwards` | [index.css:204-206](src/index.css#L204-L206) |
| `.animate-fade-in` | `fadeIn 0.5s ease-out forwards` | [index.css:208-210](src/index.css#L208-L210) |
| `.animate-slide-in-right` | `slideInRight 0.5s ease-out forwards` | [index.css:212-214](src/index.css#L212-L214) |
| `.animate-scale-in` | `scaleIn 0.4s ease-out forwards` | [index.css:216-218](src/index.css#L216-L218) |
| `.animate-live-photo` | `livePhoto 10s ease-in-out infinite alternate` | [index.css:529-532](src/index.css#L529-L532) |

### 6.4 Stagger Delay Utilities

| Class | Delay | Defined In |
|---|---|---|
| `.delay-100` | `100ms` | [index.css:221-223](src/index.css#L221-L223) |
| `.delay-200` | `200ms` | [index.css:225-227](src/index.css#L225-L227) |
| `.delay-300` | `300ms` | [index.css:229-231](src/index.css#L229-L231) |
| `.delay-400` | `400ms` | [index.css:233-235](src/index.css#L233-L235) |
| `.delay-500` | `500ms` | [index.css:237-239](src/index.css#L237-L239) |

### 6.5 Hover Effects

| Class | Effect | Defined In |
|---|---|---|
| `.hover-lift` | `transition-transform duration-300 hover:-translate-y-1` | [index.css:242-244](src/index.css#L242-L244) |
| `.hover-scale` | `transition-transform duration-300 hover:scale-105` | [index.css:246-248](src/index.css#L246-L248) |

### 6.6 Scroll Animation

| Class | Resting State | Active State | Defined In |
|---|---|---|---|
| `.scroll-animate` | `opacity: 0; translateY(20px)` | - | [index.css:313-317](src/index.css#L313-L317) |
| `.scroll-animate.in-view` | - | `opacity: 1; translateY(0)` | [index.css:319-322](src/index.css#L319-L322) |

Transition: `opacity 0.6s ease-out, transform 0.6s ease-out`

### 6.7 Transition Defaults

All buttons use `transition-all duration-300 ease-out` ([button.tsx:8](src/components/ui/button.tsx#L8)).  
Cards use `transition-all duration-300` ([card.tsx:6](src/components/ui/card.tsx#L6)).  
Bento cards use `transition-all duration-300 ease-out` ([index.css:139](src/index.css#L139)).

### 6.8 External Motion Library

**Framer Motion** (`framer-motion` 12.33.2 / `motion` 12.29.0) is available for programmatic animations in components. Used alongside CSS animations.

---

## 7. Component Tokens

### 7.1 Button Variants (CVA)

Defined in [button.tsx:7-35](src/components/ui/button.tsx#L7-L35).

**Base:** `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out active:scale-[0.98]`

| Variant | Key Styles |
|---|---|
| `default` | `bg-primary text-primary-foreground shadow-md` hover: lift + scale |
| `destructive` | `bg-destructive text-destructive-foreground` |
| `outline` | `border-2 border-primary bg-transparent text-primary` hover: fill primary |
| `secondary` | `bg-secondary text-secondary-foreground shadow-md` hover: lift + scale |
| `ghost` | transparent, `hover:bg-muted hover:text-primary` |
| `link` | `text-primary underline-offset-4 hover:underline` |
| `hero` | `bg-secondary shadow-lg` hover: `bg-[#3db83d]`, lift + scale |
| `heroOutline` | `border-2 border-white bg-white/10 backdrop-blur-sm text-white` hover: fill white |
| `cta` | Same as `hero` + `font-bold` |

**Sizes:**

| Size | Height | Padding | Radius | Font |
|---|---|---|---|---|
| `default` | `h-11` (44px) | `px-6 py-2` | `rounded-xl` (base) | `text-sm` (base) |
| `sm` | `h-9` (36px) | `px-4` | `rounded-lg` | `text-sm` (base) |
| `lg` | `h-14` (56px) | `px-8` | `rounded-xl` | `text-base` |
| `xl` | `h-16` (64px) | `px-10` | `rounded-2xl` | `text-lg` |
| `icon` | `h-10 w-10` (40px) | - | `rounded-xl` (base) | - |

### 7.2 Card Variants (CVA)

Defined in [card.tsx:5-23](src/components/ui/card.tsx#L5-L23).

**Base:** `rounded-2xl transition-all duration-300`

| Variant | Key Styles |
|---|---|
| `default` | `bg-card border border-border/50 shadow-bento` hover: `shadow-bento-hover` |
| `elevated` | `bg-card shadow-bento` hover: lift -1 |
| `glass` | `bg-white/80 backdrop-blur-lg border border-white/20` |
| `glassDark` | `bg-primary/90 backdrop-blur-lg border border-white/10 text-white` |
| `bento` | `bg-card border border-border/30 shadow-bento` hover: green border + lift |
| `stat` | `bg-white/10 backdrop-blur-sm text-white border border-white/20` |
| `highlight` | `bg-gradient-to-br from-secondary/10 to-accent/5 border border-secondary/20` |

**Card sub-components:**
- `CardHeader`: `p-6`, flex column, `space-y-1.5`
- `CardTitle`: `text-xl font-bold leading-tight tracking-tight text-primary`
- `CardDescription`: `text-sm text-muted-foreground`
- `CardContent`: `p-6 pt-0`
- `CardFooter`: `p-6 pt-0`, flex row

### 7.3 Badge Variants (CVA)

Defined in [badge.tsx:6-24](src/components/ui/badge.tsx#L6-L24).

**Base:** `rounded-full px-3 py-1 text-xs font-semibold`

| Variant | Key Styles |
|---|---|
| `default` | `bg-primary text-primary-foreground` |
| `secondary` | `bg-secondary text-secondary-foreground` |
| `destructive` | `bg-destructive text-destructive-foreground` |
| `outline` | `border-2 border-primary text-primary bg-transparent` |
| `muted` | `bg-muted text-muted-foreground` |
| `success` | `bg-secondary/10 text-secondary border border-secondary/20` |
| `info` | `bg-primary/10 text-primary border border-primary/20` |

### 7.4 Alert Variants (CVA)

Defined in [alert.tsx:6-18](src/components/ui/alert.tsx#L6-L18).

| Variant | Key Styles |
|---|---|
| `default` | `bg-background text-foreground` |
| `destructive` | `border-destructive/50 text-destructive` |

### 7.5 Toggle Variants (CVA)

Defined in [toggle.tsx:7-26](src/components/ui/toggle.tsx#L7-L26).

| Variant | Styles |
|---|---|
| `default` | `bg-transparent` |
| `outline` | `border border-input bg-transparent` |

| Size | Dimensions |
|---|---|
| `default` | `h-10 px-3` |
| `sm` | `h-9 px-2.5` |
| `lg` | `h-11 px-5` |

### 7.6 Input Component

Defined in [input.tsx:5-18](src/components/ui/input.tsx#L5-L18).

```
h-10 (40px), w-full, rounded-md, border border-input, bg-background,
px-3 py-2, text-base (md:text-sm), ring-offset-background,
focus: ring-2 ring-ring ring-offset-2, disabled: opacity-50
```

### 7.7 CSS Component Classes

Defined in [index.css:131-199](src/index.css#L131-L199).

| Class | Key Styles |
|---|---|
| `.bento-grid` | `grid gap-4 md:gap-6` |
| `.bento-card` | `bg-card rounded-2xl p-6 transition-all duration-300` + `--card-shadow` |
| `.hero-bento-container` | `mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden`, min-height: `calc(100vh - var(--header-height) - 2rem)`, bg: `--hero-gradient` |
| `.section-container` | `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`, padding: `--section-padding` |
| `.institutional-card` | `bg-card border border-border/50 rounded-2xl p-6 md:p-8` + `--card-shadow` |
| `.badge-primary` | `px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground` |
| `.badge-secondary` | Same shape, `bg-secondary text-secondary-foreground` |
| `.badge-outline` | Same shape, `border border-primary text-primary` |
| `.data-card` | `bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white` |
| `.glass` | `bg-white/80 backdrop-blur-lg border border-white/20` |
| `.glass-dark` | `bg-primary/90 backdrop-blur-lg border border-white/10` |

---

## 8. Icons & Assets

### 8.1 Icon Libraries

| Library | Version | Usage |
|---|---|---|
| **Lucide React** | `0.462.0` | Primary icon set, SVG-based, tree-shakeable |
| **Tabler Icons React** | `3.36.1` | Secondary/alternative icon set |

No custom icon size scale is defined; icons inherit from parent or use Tailwind sizing utilities. Button base sets `[&_svg]:size-4` (16px).

### 8.2 Assets

| Type | Location | Formats |
|---|---|---|
| Logos & branding | `public/` | `.png`, `.svg` |
| Director photos | `public/` | `.jpg`, `.png` |
| Background images | `public/` | `.jpg`, `.png` |
| Background videos | `public/`, `src/assets/videos/` | `.mp4` |
| News images | `src/assets/news/` | `.jpg`, `.png` |
| State map SVG | `public/` | `.svg` |
| Favicon | `public/favicon.ico` | `.ico` |

### 8.3 3D / Data Viz Libraries

| Library | Version | Usage |
|---|---|---|
| `cobe` | `0.6.5` | 3D globe visualization |
| `dotted-map` | `2.2.3` | World map dot visualization |
| `recharts` | `2.15.4` | Charts and data visualization |
| `embla-carousel-react` | `8.6.0` | Image carousels |

---

## 9. Patterns & Conventions

### 9.1 CSS Architecture

- **Methodology:** Utility-first (Tailwind) with component-layer custom classes
- **Layers:** `@layer base` (resets, variables, heading defaults) -> `@layer components` (reusable patterns) -> `@layer utilities` (animation helpers)
- **Component Variants:** CVA (Class Variance Authority) for multi-variant components
- **Class Merging:** `cn()` utility combining `clsx` + `tailwind-merge` ([utils.ts](src/lib/utils.ts))
- **Component Library:** shadcn/ui with Radix UI primitives, `components.json` base color: `slate`, CSS variables enabled

### 9.2 Dark Mode Strategy

- **Method:** Class-based (`.dark` class on root element)
- **Implementation:** `darkMode: ["class"]` in [tailwind.config.ts:4](tailwind.config.ts#L4)
- **Theme Provider:** `next-themes` library (0.3.0)
- **Behavior:** Primary/secondary colors swap roles in dark mode

### 9.3 Responsive Strategy

- **Approach:** Mobile-first (`min-width` breakpoints)
- **Breakpoints:** Standard Tailwind (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px)
- **Container:** Max `1400px` at `2xl`, centered with `2rem` padding
- **Common patterns:** `px-4 md:px-6 lg:px-8`, `gap-4 md:gap-6`, `p-6 md:p-8`

### 9.4 CSS Reset

- Global `* { @apply border-border }` sets default border color ([index.css:109](src/index.css#L109))
- `html { scroll-behavior: smooth }` ([index.css:113](src/index.css#L113))
- Body antialiased rendering ([index.css:117](src/index.css#L117))
- No explicit normalize/reset file; Tailwind's built-in Preflight (based on modern-normalize) handles this

### 9.5 Accessibility Patterns

| Pattern | Implementation |
|---|---|
| Focus rings | `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` on interactive elements |
| `.focus-ring` utility | `focus:ring-2 focus:ring-secondary focus:ring-offset-2` ([index.css:260-262](src/index.css#L260-L262)) |
| Disabled states | `disabled:pointer-events-none disabled:opacity-50` |
| Reduced motion | `@media (prefers-reduced-motion)` used in App.css for logo animation |

### 9.6 Key Infrastructure Animations

Special-purpose CSS animations for the infrastructure diagram visualization:

| Class | Animation | Duration | Defined In |
|---|---|---|---|
| `.electric-path` | `electric-flow` (dash offset) | `2.4s linear infinite` | [index.css:325-331](src/index.css#L325-L331) |
| `.electric-path-glow` | Static glow (blur filter) | - | [index.css:333-338](src/index.css#L333-L338) |
| `.dot-pulse` | `dot-pulse-anim` (opacity pulse) | `3s ease-in-out infinite` | [index.css:351-353](src/index.css#L351-L353) |
| `.hub-breathe` | `hub-breathe-anim` (scale + glow) | `4s ease-in-out infinite` | [index.css:368-370](src/index.css#L368-L370) |
| `.infra-light` / `.infra-light-1` to `.infra-light-4` | `infra-animation-path` (offset-path) | `3s cubic-bezier(0,0,0.2,1) infinite` | [index.css:387-410](src/index.css#L387-L410) |

### 9.7 Organogram Connector Lines

CSS-only connector lines for organizational chart, active at `lg` breakpoint (1024px+):

| Class | Effect | Defined In |
|---|---|---|
| `.organogram-top-row::after` | Vertical line down from center | [index.css:439-450](src/index.css#L439-L450) |
| `.organogram-middle-row::before` | Vertical line from top | [index.css:458-469](src/index.css#L458-L469) |
| `.organogram-middle-row::after` | Horizontal line across cards | [index.css:472-481](src/index.css#L472-L481) |
| `.organogram-diretorias-row::before` | Vertical line from connector | [index.css:491-502](src/index.css#L491-L502) |
| `.organogram-diretorias-row::after` | Horizontal line across directorates | [index.css:505-512](src/index.css#L505-L512) |

---

## Appendix: File Index

| File | Role |
|---|---|
| [tailwind.config.ts](tailwind.config.ts) | Tailwind theme extensions, colors, fonts, animations, shadows, radii |
| [src/index.css](src/index.css) | CSS variables, base styles, component classes, utility classes, keyframes |
| [src/App.css](src/App.css) | Vite boilerplate styles (mostly unused) |
| [src/lib/utils.ts](src/lib/utils.ts) | `cn()` class merge utility |
| [components.json](components.json) | shadcn/ui configuration |
| [postcss.config.js](postcss.config.js) | PostCSS with Tailwind + Autoprefixer |
| [index.html](index.html) | Font loading (Inter via CSS import, Barlow via link tag) |
| [src/components/ui/button.tsx](src/components/ui/button.tsx) | Button CVA variants |
| [src/components/ui/card.tsx](src/components/ui/card.tsx) | Card CVA variants |
| [src/components/ui/badge.tsx](src/components/ui/badge.tsx) | Badge CVA variants |
| [src/components/ui/alert.tsx](src/components/ui/alert.tsx) | Alert CVA variants |
| [src/components/ui/toggle.tsx](src/components/ui/toggle.tsx) | Toggle CVA variants |
| [src/components/ui/input.tsx](src/components/ui/input.tsx) | Input base styles |
| [package.json](package.json) | Dependency versions |
