# UI Kit · Site Institucional

Recriação interativa e clicável do site institucional da ZPE Maranhão. Compõe os componentes do design system (`Button`, `Card`, `StatCard`, `Badge`, `Eyebrow`, `Logo`, `BrandArrow`, `Input`) montados a partir de `window.ZPEMaranhODesignSystem_408e04`.

## Telas
- **Home** (`Home.jsx`) — hero escuro (Deep Horizon + grão + malha de conexões + seta decorativa + world dotted), seção de infraestrutura (cards), banda de dados (frost + stat cards), CTA (Blue→Green).
- **Infraestrutura** (`Infraestrutura.jsx`) — hero Ocean Floor, grade de 6 pilares, faixa de stats.
- **Oportunidades** (`Oportunidades.jsx`) — incentivos fiscais + formulário de investidor (Input + Button) com estado de envio.

## Arquitetura
- `index.html` — carrega React, Babel, o bundle do DS e os arquivos JSX na ordem de dependência.
- `App.jsx` — shell com navegação por estado (`home` / `infra` / `oportunidades`); Header e Footer fixos.
- `Header.jsx`, `Footer.jsx` — navegação e rodapé.
- `ConnectionMesh.jsx` — canvas da malha de conexões (pausa fora da viewport).

Cada arquivo JSX exporta seus componentes para `window` (escopos Babel são isolados). A ordem de `<script>` no `index.html` importa.

## Padrões aplicados
- Ritmo de superfícies: claro → âncora escura → dados → CTA.
- Número grande sempre branco sobre azul; verde só no detalhe.
- Grão em toda superfície escura; hover de card acende borda verde.
- É uma **recriação** do padrão da marca (ref. `composicoes.html`), não um novo design.
