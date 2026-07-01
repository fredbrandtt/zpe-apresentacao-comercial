---
name: zpe-maranhao-design
description: Use this skill to generate well-branded interfaces and assets for ZPE Maranhão (Zona de Processamento de Exportação do Maranhão), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# ZPE Maranhão · Design System

Read `readme.md` for the full design guide (philosophy, content tone, visual foundations, iconography, manifest). Explore the other files as needed.

## Essentials
- **Cor:** azul institucional `#244582` domina (~70%, estrutura); verde `#4CAC4B` é acento de ação (~10%, cirúrgico); canvas claro é a base (~20%). A proporção não se inverte. Número grande sobre azul = branco; verde só no detalhe.
- **Tipo:** Barlow (display, 300 elegância / 500–600 impacto), Inter (corpo), JetBrains Mono (eyebrows/labels uppercase). Todas no Google Fonts.
- **Acabamento:** gradients de profundidade (Abyss, Ocean Floor, Deep Horizon, Canopy) SEMPRE com textura de grão; sombras com tint azulado; raios 10/16/24px; pílulas para badges.
- **Marca:** wordmark oficial via componente `Logo` (`logo_fundo_azul.svg` em fundo claro, `logo_fundo_branco.svg` em fundo escuro; `logo_governo.svg` para co-branding). A seta/chevron (`assets/brand/seta_solid.svg`, `seta_outline.svg`) é o elemento gráfico primário. Sem emoji.

## Onde está o quê
- `styles.css` → entrada global (só `@import`s). `tokens/` → CSS custom properties.
- `components/` → React primitives (Button, Badge, Eyebrow, Card, StatCard, Input, Logo, BrandArrow), montados via `window.ZPEMaranhODesignSystem_408e04`. Cada um tem `.prompt.md`.
- `guidelines/` → specimen cards das foundations.
- `ui_kits/site-institucional/` → recriação clicável do site.
- `slides/` → modelos de deck 16:9.

## Como usar
Se criar artefatos visuais (slides, mocks, protótipos descartáveis), **copie os assets** para fora e gere arquivos HTML estáticos para o usuário ver — linke `styles.css` para herdar os tokens. Se trabalhar em código de produção, copie os assets e leia as regras aqui para virar especialista na marca.

Se o usuário invocar esta skill sem orientação, pergunte o que ele quer construir, faça algumas perguntas e atue como designer especialista que entrega artefatos HTML _ou_ código de produção, conforme a necessidade.
