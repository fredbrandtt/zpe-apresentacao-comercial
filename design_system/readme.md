# ZPE Maranhão · Design System v1.0

Sistema de design da **ZPE Maranhão** — a Zona de Processamento de Exportação do Maranhão. Empresa de Estado (federal, economia mista) que é, ao mesmo tempo, **autoridade institucional** e **destino de investimento**. O sistema visual equilibra essas duas forças: solidez institucional + apelo de investimento.

> **Filosofia em uma linha:** azul institucional domina como estrutura; verde é exclusivamente acento de ação; canvas claro é a base; âncoras azuis escuras pontuais dão profundidade. Acabamento premium via gradients de profundidade, textura de grão e tipografia Barlow.

## Contexto do produto

A ZPE Maranhão não é um app de software — é uma **marca institucional e de investimento**. As superfícies reais são:
- **Site institucional** — home, infraestrutura, oportunidades de investimento, contato.
- **Apresentações (decks 16:9)** — institucionais, para investidores e órgãos públicos.
- **Posts e carrosséis (3:4)** — comunicação em redes sociais.

O que a marca **não** é: cara de startup, cara de IA, fundo escuro dominante, glassmorphism genérico.

Referências estruturais citadas pela marca: Wise e MongoDB (canvas branco, pílula verde, azul profundo). Referências de sofisticação: ATMOS (gradients de profundidade azul), AERAMAX (apresentações industriais com dados).

## Fontes recebidas

Este sistema foi derivado de materiais fornecidos pelo cliente:
- **`zpe design system/` (pasta local montada)** — continha a especificação canônica da marca:
  - `DESIGN.md` — spec completa (filosofia, cores, gradients, tipografia, regras). **Fonte da verdade.**
  - `fundamentos.html` — implementação de referência dos tokens e componentes.
  - `composicoes.html` — composições de exemplo (hero, slides, posts).
  - `index.html`, `zpe-design-system-hub.html` — hub de navegação.
- **`uploads/` — assets de marca:**
  - `seta_outline.svg` ✅ vetor real da seta da marca (verde #00AF42, contorno).
  - `world_dotted.svg` ✅ mapa-múndi pontilhado (2560×1440).
  - `seta_zpe.svg`, `zpe_verde_azul.svg`, `zpe_verde_branco.svg` ⚠️ versões iniciais sem dados de imagem (substituídas, ver abaixo).
- **Logos oficiais (reenviados):**
  - `logo_fundo_azul.svg` ✅ wordmark com texto **azul** — para fundos claros.
  - `logo_fundo_branco.svg` ✅ wordmark com texto **branco** — para fundos escuros/azuis.
  - `logo_governo.svg` ✅ lockup do **Governo do Maranhão** (co-branding institucional).

---

## CONTENT FUNDAMENTALS — como a copy é escrita

**Idioma:** Português do Brasil. Tom **institucional, confiante e concreto** — fala de uma empresa pública séria que atrai capital, não de uma startup.

- **Pessoa:** terceira pessoa institucional ("A ZPE Maranhão oferece…"). Sem "nós" casual, sem "você" publicitário agressivo. Convida sem implorar.
- **Casing:** Sentence case em títulos e corpo. **UPPERCASE apenas** em eyebrows/labels mono (JetBrains), com tracking largo. Nunca title case em frases inteiras.
- **Densidade:** frases curtas e afirmativas. Uma ideia por bloco. Números fazem o trabalho pesado — "300 hectares", "Porto a 800m", "calado de 23 metros", "R$ 4,2 bi".
- **Vocabulário-chave:** infraestrutura, multimodal, incentivos fiscais, exportação, conectividade, classe mundial, polo industrial estratégico, Porto do Itaqui, Ferrovia.
- **Eyebrows:** curtos, mono, uppercase — "ZONA DE PROCESSAMENTO DE EXPORTAÇÃO", "DADOS ESTRATÉGICOS", "01 · PALETA".
- **CTAs:** verbos diretos + seta — "Investir agora →", "Conheça a ZPE →", "Ver oportunidades →".
- **Emoji:** **nunca.** Não fazem parte da marca. Ícones têm intenção; emoji lê como informal/IA.
- **Vibe:** um documento de prospecto de investimento que respira — premium, mas sóbrio. Autoridade pública com acabamento de marca privada.

**Exemplos reais:**
- Headline: "Infraestrutura de **classe mundial**" (negrito no termo de valor).
- Sub: "300 hectares de área industrial com acesso direto à ferrovia, rodovia e o Porto do Itaqui, um dos mais profundos do Brasil."
- Citação: "A ZPE é o maior projeto de infraestrutura industrial do Maranhão na última década." — Rakel Murad, Diretora-Presidente.

---

## VISUAL FOUNDATIONS

### Cor & proporção
Azul institucional (`#244582`) é **~70%** da presença cromática: estrutura, títulos, fundos de impacto. Verde (`#4CAC4B`) é **~10%, cirúrgico**: botões, números-chave, hover, ícones de ação, linhas. Canvas claro é **~20%**: respiro. **A proporção não se inverte** — é a identidade.

**Regra de contraste crítica:** número/título grande **nunca** usa verde diretamente sobre azul escuro (vibra, perde legibilidade). Sobre fundos azuis → número em **branco**, verde só no detalhe (unidade, linha fina, eyebrow). O verde brilha quando tem superfície clara ao redor.

### Tipografia
- **Barlow** (display): opera em dois modos — **light (300)** para elegância institucional (títulos de seção, subheadlines) e **medium/semibold (500–600)** para impacto (hero, números, CTAs). Essa dualidade é a assinatura tipográfica.
- **Inter** (corpo/UI): 400, line-height 1.6. Nunca em título.
- **JetBrains Mono** (metadados): 500, uppercase, tracking 0.06em+. Eyebrows, labels, timestamps, números técnicos.
- Nunca: Barlow 700 em corpo; serif ou grotesca pesada em título; Inter em título.

### Fundos & gradients
Os **gradients de profundidade** são o principal veículo de sofisticação — substituem fundos flat. Azuis: Abyss, Ocean Floor, Deep Horizon, Night Glow. Verdes (sustentabilidade/ação): Canopy, Blue→Green, Forest Floor. Claros (sutis, ~2–3% de saturação): Mist, Frost. **Sempre com textura de grão**; nunca diagonal forte de 45° (lê como preenchimento genérico) — preferir vertical (180°) ou diagonal sutil (160°). Glow radial no máximo uma vez por composição.

### Camada premium (elevação visual)
Quatro técnicas elevam o material de "institucional sólido" para "institucional premium e original", sem sair da paleta (azul domina, verde acento):

1. **Aurora / mesh gradients** (`--grad-aurora-blue` · `-deep` · `-green` · `-mist`) — uma fonte de luz azul *mais clara* (não mais saturada) brilha sobre o navy profundo, como luz ambiente. Referência ATMOS/Sinesubs. Capas, heros e seções de processo. **Sempre com grão.** O brilho é mais claro, nunca um azul fora da marca.
2. **RippleField — linhas concêntricas** (componente) — anéis finos irradiando de um canto, metáfora de alcance e conexão. Referência Cinaro/Sinesubs. Decorativo, baixa opacidade, um por composição. Verde/branco em fundo escuro; azul em claro. É o novo motivo gráfico da marca, ao lado da seta e do world dotted.
3. **ArrowImage — foto recortada na seta** (componente) — preenche a seta da marca com fotografia industrial tratada (grading azul automático). Referência Rabia. Como a seta é o elemento proprietário, recortá-la com imagem cria um lockup forte e único. Hero e capas.
4. **GlassPanel — painéis translúcidos** (componente) — cards com borda fina, blur e transparência sobre os gradients escuros; cards de processo numerados (ponto + linha + número grande). Referência AERAMAX. Só sobre profundidade azul.

**Regra:** no máximo *uma* técnica de destaque dominante por composição (uma aurora OU um ripple forte; não ambos gritando). O grão permanece obrigatório em toda superfície escura.

### Textura
**Grão** = overlay de ruído SVG que dá materialidade física. Claras: `multiply` a 4%. Escuras: `overlay` a 6%. Nunca sobre texto ou elementos interativos — só no fundo da superfície. Sem grão, os gradients leem como flat digital.

**Malha de conexões** = rede animada de nós/linhas (metáfora do hub de exportação). Apenas em blocos azuis escuros; verde accent em baixa opacidade; lenta; 15–25 nós; pausa fora da viewport. Nunca "festa de partículas".

### Animação & estados
- **Easing:** `cubic-bezier(.2,0,0,1)` (saída suave). Durações 0.18–0.4s. Sem bounce, sem exagero.
- **Reveal:** fade + translateY(16px) ao entrar na viewport.
- **Hover (cards):** borda passa de cinza para **verde accent** + eleva com `shadow-md`.
- **Hover (botão primary):** verde escurece (`pressed`→`deep`) + glow verde sutil.
- **Hover (botão secondary):** outline azul **preenche** com azul, texto fica branco.
- **Press:** cor mais escura (pressed). Sem "shrink"/scale.
- **Foco (input):** borda azul + anel `0 0 0 3px rgba(36,69,130,.12)`.

### Bordas, raios & sombras
- **Bordas:** 3 pesos — `--line` (#e6eaf2) padrão, `--line-soft` mais leve, `--line-strong` (#cdd5e4) em inputs.
- **Raios:** SM 10px (botões/inputs), Card 16px, LG 24px, Pill 9999px (badges).
- **Sombras:** sempre com **tint azulado** (derivado do primary), nunca cinza neutro. SM (repouso) → MD (hover) → LG (modais).

### Cards
Superfície branca, borda fina 1px, raio 16px, padding 24px. Hover acende borda verde + `shadow-md`. **StatCards** invertem: gradient azul profundo (Abyss) + grão + número branco + detalhe verde — usados como âncoras pontuais em seções claras.

### Ritmo de composição
Alternar superfícies: seção clara (canvas/frost) → seção âncora (gradient azul + grão + malha) → seção dados (claro com stat cards escuros). Nunca 3+ seções escuras seguidas; nunca 4+ claras sem âncora.

### Tratamento fotográfico
Fotos com luz puxada para o azul (color grading) + overlay de gradient azul nas bordas. Nunca foto crua. Imagery: tom **frio/azulado**, premium, integrado à paleta.

### Layout
Site: conteúdo máx 1120–1200px centralizado, padding lateral 32px. Slides 16:9 (1920×1080): headline máx 140px / 8 palavras, reserva de 200px na base p/ footer. Posts 3:4 (1080×1440): 2–3 colunas máx.

---

## ICONOGRAPHY

A marca **não traz uma biblioteca de ícones própria** nos materiais recebidos. Abordagem:

- **Seta da marca (`BrandArrow` / `assets/brand/seta_*.svg`)** — o elemento gráfico **primário e proprietário**. Chevron de exportação. Usos: ícone de ação pequeno (verde sólido), elemento decorativo grande em fundos escuros (outline, ~0.15–0.4 opacidade), repetição modular em padrões. **Nunca** como seta de breadcrumb genérica nem em tamanho tiny. `seta_solid.svg` (preenchido) e `seta_outline.svg` (contorno) estão em `assets/brand/`. O wordmark oficial traz a seta em **bicolor** (verde claro + verde escuro `#00790E`).
- **World dotted (`assets/brand/world_dotted.svg`)** — mapa pontilhado para seções de comércio exterior, opacidade 8–15%, sempre em blocos escuros. Nunca pequeno (os pontos viram ruído).
- **Setas de UI (→):** o caractere unicode `→` é aceito em CTAs e links ("Saiba mais →"). Simples e intencional.
- **Ícones de sistema (UI geral):** quando precisar de ícones funcionais (menu, fechar, check, social), use **[Lucide](https://lucide.dev)** via CDN — stroke ~1.5–2px, cantos limpos, combina com a sobriedade institucional. ⚠️ **Substituição sinalizada:** Lucide não é parte oficial da marca; é a recomendação até o cliente definir um set. Evite misturar estilos de ícone.
- **Emoji:** nunca.

---

## VISUAL ASSETS (`assets/brand/`)

| Arquivo | Estado | Uso |
|---|---|---|
| `seta_outline.svg` | ✅ vetor | Seta decorativa (contorno verde) |
| `seta_solid.svg` | ✅ derivado | Seta preenchida (verde sólido) — gerado do path oficial |
| `world_dotted.svg` | ✅ vetor | Mapa de conectividade global |
| `logo_fundo_azul.svg` | ✅ oficial | **Wordmark azul** — usar sobre fundos claros |
| `logo_fundo_branco.svg` | ✅ oficial | **Wordmark branco** — usar sobre fundos escuros/azuis |
| `logo_governo.svg` | ✅ oficial | Lockup do Governo do Maranhão (co-branding) |
| `seta_zpe.svg`, `zpe_verde_azul.svg`, `zpe_verde_branco.svg` | ⚠️ legado | Exports iniciais vazios — substituídos pelos oficiais acima |

O componente **`Logo`** renderiza o wordmark oficial (`theme="light"` → azul; `theme="dark"` → branco). Para o símbolo isolado, use **`BrandArrow`**.

---

## ÍNDICE / MANIFESTO

**Entrada global:** `styles.css` (apenas `@import`s).

**Tokens** (`tokens/`): `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` (gradients, sombras, grão, motion).

**Componentes** (`components/`) — React, montados via `window.ZPEMaranhODesignSystem_408e04`:
- `core/` — **Button**, **Badge**, **Eyebrow**
- `cards/` — **Card**, **StatCard**
- `forms/` — **Input**
- `brand/` — **Logo** (wordmark tipográfico), **BrandArrow** (seta)

**Foundation cards** (`guidelines/`) — specimens na aba Design System: cores (azul/verde/canvas/semânticas/gradients), tipografia (display/headline/corpo/stat), spacing (escala/radius/elevação/grão), marca (seta/world).

**UI kit** (`ui_kits/site-institucional/`) — recriação interativa do site institucional (Home, Infraestrutura, Oportunidades).

**Slides** (`slides/`) — modelos de deck 16:9 (capa, dados, citação).

**Skill:** `SKILL.md` — torna este sistema utilizável como Agent Skill no Claude Code.
