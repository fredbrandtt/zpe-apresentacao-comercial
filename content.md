# CONTENT.md — ZPE Maranhão: Apresentação de Pitch
# Versão atualizada — reflete o estado atual do index.html

> Este arquivo contém o conteúdo exato de cada slide da apresentação.
> Leia-o integralmente antes de implementar qualquer slide.
> Não altere, resuma ou reinterprete nenhum dado, número ou texto aqui contido.
> Quando um elemento visual for descrito, implemente conforme a descrição.
> Se a descrição for insuficiente, PARE e pergunte ao usuário.

---

## Estrutura de capítulos e slides

| Índice | Capítulo | Título do slide | Tema |
|---|---|---|---|
| 0 | Capa | ZPE Maranhão | dark com imagem de fundo |
| 1 | O Problema | Exportar no Brasil custa caro demais. | dark |
| 2 | O Problema | ele corrói irreversivelmente... | dark (impacto) |
| 3 | O Problema | Existe um regime que resolve tudo isso. | light |
| 4 | O Impacto Financeiro | Quanto você deixa de pagar. | dark |
| 5 | O Impacto Financeiro | Menos dias de navegação. | dark |
| 6 | A Infraestrutura | Tudo conectado. | light |
| 7 | A Infraestrutura | O projeto avança. Com atos formais. | light |
| 8 | Setores e Oportunidade | O momento é agora. | dark |
| 9 | Setores e Oportunidade | A demanda cresce. A área é finita. | dark |
| 10 | Próximos Passos | O caminho é claro. | light |
| 11 | Próximos Passos | Vamos analisar sua operação. | dark com imagem de fundo |

Total: 12 slides (índices 0 a 11)

---

## SLIDE 0 — Capa

**Tema:** dark com bg_hero_blue_compressed.jpg como fundo

**Elementos visuais de fundo:**
- Imagem de fundo: bg_hero_blue_compressed.jpg
- Mapa mundi dotted: world_dotted.svg posicionado à direita, opacidade 12%
- Overlay escuro sobre a imagem
- Flares azuis nos cantos
- Fades laterais para profundidade

**Conteúdo (coluna esquerda, ~55% da largura, PERFEITAMENTE CENTRALIZADO VERTICALMENTE):**
- Logo: logo-zpe.png — sem filtro, cores originais
- Slogan: "A conexão estratégica do Maranhão com o mundo."
- Linha divisória verde (64px largura, 3px altura)
- Logos de rodapé lado a lado:
  - investe-ma-logo.png com filter: brightness(0) invert(1) opacity(0.8) (versão branca)
  - governo-ma-logo.png sem filtro (cores originais)

**REGRA CRÍTICA DE LAYOUT DA CAPA:**
O slide capa NÃO usa o padding padrão dos outros slides.
O .capa-content deve ocupar a metade esquerda do slide (55% da largura, 100% da altura)
e centralizar seu conteúdo verticalmente usando flexbox interno (justify-content: center).
NUNCA use position: absolute + top: 50% + transform: translateY(-50%) para centralizar.
Use: display: flex; flex-direction: column; justify-content: center; height: 100%;
O slide pai deve ser: display: flex; align-items: stretch; (sem padding)

**Animação de entrada:** cada elemento em fadeIn sequencial, delays 0ms, 200ms, 400ms, 550ms.
As animações usam APENAS opacity (fade simples, sem translateY).
Elementos começam com opacity: 0 definido diretamente no CSS, não via fill-mode: both.

---

## SLIDE 1 — O Problema

**Título:** Exportar no Brasil custa caro demais.

**Destaque no título:** "caro demais." tem sublinhado verde animado que cresce da esquerda para direita ao entrar.

**Grid 2x2 — quatro cards (fundo sólido escuro, sem glassmorphism):**

Card 01 — ícone de documento (SVG outline)
Título: Carga Tributária
Texto: Impostos em cascata sobre importação de insumos e equipamentos encarecem cada etapa da operação.

Card 02 — ícone de seta circular
Título: Conversão de Divisas
Texto: Empresas são obrigadas a converter divisas ao repatriar receitas de exportação, corroendo a margem cambial.

Card 03 — ícone de relógio
Título: Burocracia Aduaneira
Texto: Processos lentos e fragmentados atrasam operações e elevam custos administrativos e de armazenagem.

Card 04 — ícone de pin de localização
Título: Infraestrutura Cara
Texto: Logística fragmentada e distante dos grandes mercados globais aumenta o custo por tonelada exportada.

**Não há linha de fechamento.** O slide termina nos cards.

---

## SLIDE 2 — Impacto (slide de citação)

**Tema:** dark, conteúdo centralizado vertical e horizontalmente, sem padding

Linha 1 (Barlow 300 itálico, médio, branco opacidade 70%):
"O peso do Custo Brasil não se resume a burocracia ou taxas:"

Linha 2 (Barlow 800, grande, branco):
"ele corrói irreversivelmente"

Linha 3 (Barlow 800, mesmo tamanho):
- "a sua margem de lucro" em verde
- "no mercado exterior." em branco

Linha divisória verde (64px largura, 4px altura) centralizada abaixo da frase.

**Animação:** fadeInUp sequencial, delays 0ms, 200ms, 400ms, 650ms.

---

## SLIDE 3 — A Solução

**Título:** Existe um regime que resolve tudo isso.
**Subtítulo em verde:** Garantido por lei federal.

**Tema:** light (fundo branco)

**Layout: duas colunas**

Coluna esquerda (~55%) — mapa e badge:
- world_dotted.svg como fundo decorativo, opacidade 15%, filtro invertido
- maranhao_stylized.jpg como imagem central
- Pin clicável com tooltip:
  - Ponto verde pulsante
  - Tooltip: "ZPE MARANHÃO" (título) + "BACABEIRA" (subtítulo verde)
  - Clicar abre a tela de detalhe da ZPE (openDetailScreen)
  - Posição: top: 25%, left: 55% do container do mapa
- Badge verde canto inferior esquerdo:
  - "20 ANOS" Barlow 800, 32px, branco
  - "DE SEGURANÇA JURÍDICA" Inter 600, 11px, branco, uppercase

Coluna direita (~45%) — grid 3x2 de cards brancos:

Card 1 — ícone cifrão: Suspensão de Impostos — II, IPI, PIS/COFINS e AFRMM na importação de insumos e equipamentos.
Card 2 — ícone gráfico: Isenção de ICMS — Garantida pelo Convênio ICMS 99/1998, reduzindo custos de operação.
Card 3 — ícone globo: Liberdade Cambial — Mantenha 100% das divisas obtidas com exportação no exterior.
Card 4 — ícone pin: Local Estratégico — Instalada na Região Metropolitana de São Luís.
Card 5 — ícone grid: Logística Premium — A 60km do Porto do Itaqui, o 4º maior porto público do Brasil.
Card 6 — ícone raio: Multimodalidade — Única ZPE no NE com infraestrutura multimodal completa.

---

## SLIDE 4 — Impacto Tributário

**Título:** Quanto você deixa de pagar.
**Tema:** dark

**Número de impacto (protagonista, tamanho display, verde com glow):**
Label: "ECONOMIA TRIBUTÁRIA ESTIMADA"
Número: "US$ 7 milhões" — apenas o "7" anima com counter de 0 até 7 em 1200ms
Contexto: "para operações que importam US$ 15 mi em insumos e equipamentos por ano"

**Tabela comparativa (max-width 720px, centralizada):**

| Tributo | Operação Convencional | ZPE Maranhão |
|---|---|---|
| II | Alíquota cheia conforme TEC | Suspenso |
| IPI | Alíquota cheia conforme TIPI | Suspenso |
| PIS/COFINS | Alíquota cheia | Suspenso |
| AFRMM | 25% sobre o frete marítimo | Suspenso |
| ICMS | Variável conforme estado e operação | Isento via Convênio ICMS 99/1998 |

**Nota de rodapé:**
Baseado no Estudo Tributário Comparado da CZPE, com 11.760 simulações em 20 estados e 147 mercadorias. Valores variam conforme NCM e regime de apuração.

---

## SLIDE 5 — Vantagem Logística

**Título:** Menos dias de navegação. Mais margem para sua operação.
**Tema:** dark

**Mapa SVG do Atlântico:**
- Oceano azul escuro translúcido
- Continentes azul escuro
- Maranhão em verde com glow
- Ponto de origem (Itaqui) com pulso
- 3 rotas tracejadas verdes animadas via stroke-dashoffset:
  - Europa: -5 dias
  - Costa Leste EUA: -6 dias
  - Ásia via Panamá: -7 dias
- Cards de destino aparecem ao fim de cada rota

**Número de impacto:**
"US$ 30 milhões" — "30" anima com counter
Contexto: "vantagem logística anual estimada para operações de 100 mil TEUs/ano. Cada dia a menos de navegação representa até US$ 30.000 em economia por navio."

**Nota de rodapé:**
Porto do Itaqui: calado de 23 metros, o maior do Norte e Nordeste. Comporta navios Capesize e Neo-Panamax. 4º maior porto público do Brasil.

---

## SLIDE 6 — A Infraestrutura

**Título:** Tudo conectado. Pronto para receber sua operação.
**Tema:** light

**Número de destaque:** "2.098" anima com counter — label: "hectares nivelados"

**7 itens de infraestrutura em grid 2 colunas:**
1. Porto do Itaqui — 60 km, calado 23m, 34 mi ton (2024)
2. BR-135 e BR-402 — acesso direto, 0 km
3. Ferrovia Carajás — 3 km, 120 mi ton/ano
4. Ferrovia Transnordestina — 700 m
5. Subestação 500 kV — 3 km
6. Rio Itapecuru — 800 m
7. Cabo submarino EllaLink — conexão direta Europa, baixa latência

**Linha de fechamento:** Nenhuma outra ZPE brasileira reúne essa convergência de modais em um único sítio.

---

## SLIDE 7 — Segurança Jurídica

**Título:** O projeto avança. Com atos formais.
**Tema:** light

**Linha do tempo horizontal — 6 marcos:**

| Ano | Marco |
|---|---|
| 1988 | Criação do regime original das ZPEs no Brasil |
| 2007 | Modernização do regime — Lei 11.508 |
| 2021 | Fim do compromisso de 80% de exportação, inclusão de serviços |
| 2024 | Criação da ZPE Maranhão — Decreto Federal 12.131 |
| Dez/2025 | Licença Prévia emitida — LP 1085517/2025 |
| Fev/2026 | Licença de Instalação emitida — LI 1009637/2026 |

Marcos Dez/2025 e Fev/2026: nó maior, ano em verde, texto em negrito.

**Linha de fechamento:** Benefícios garantidos por lei federal por 20 anos, prorrogáveis. Fiscalização centralizada pela Receita Federal e pelo CZPE. Sem risco de interpretação divergente em nível estadual.

---

## SLIDE 8 — Setores e Oportunidade

**Título:** O momento é agora.
**Tema:** dark

**3 cards em linha horizontal:**

Card 1 — Fertilizantes
Número: "44 mi" | Label: Fertilizantes (ton/ano)
Texto: Brasil importa 44 mi ton/ano. Dependência externa de 80%, com 97% do potássio importado e 40% vindo da Rússia. A reconfiguração geopolítica das cadeias de suprimento torna urgente a produção local.

Card 2 — Agroindustrial
Número: "US$ 12" | Label: Agroindustrial (/kg)
Texto: MATOPIBA produz 32 mi ton de grãos por safra com área plantada crescendo 8,3% ao ano. Grande parte exportada como commodity bruta. O caju que sai a US$ 2/kg pode ser exportado a US$ 12/kg processado.

Card 3 — Serviços e Tecnologia
Número: "40-60%" | Label: Serviços e Tecnologia
Texto: 96% dos CEOs globais avaliam relocalização por proximidade. Com fuso GMT-3, custo operacional 40 a 60% abaixo de centros como Bangalore e Dublin, e liberdade cambial total, o Maranhão é a escolha natural.

---

## SLIDE 9 — Pipeline Comercial

**Título:** A demanda cresce. A área é finita.
**Tema:** dark

**3 indicadores (renderizar literalmente como "[X]" — NÃO inventar números):**
- "[X]" — Pré-projetos recebidos
- "[X]" — Em análise técnica
- "[X]" — Projetos aprovados

**Esquema geométrico CSS da planta:**
- Área em pré-reserva: azul hsl(220 55% 32% / 0.5)
- Área disponível: verde hsl(120 40% 49% / 0.3) com glow interno

**Legenda:** quadrado azul + "Área em pré-reserva" / quadrado verde + "Área disponível"

**Linha de fechamento:** 2.098 hectares. Projetos de diferentes setores já em avaliação.

---

## SLIDE 10 — Como Instalar

**Título:** O caminho é claro.
**Tema:** light

**Duas colunas simétricas:**

Fase 1 (esquerda):
1. Manifestação Digital — preenchimento do formulário Quero Investir para qualificação imediata
2. Pré-projeto ZPE — elaboração do projeto preliminar com informações mínimas conforme requisitos legais
3. Pré-Reserva e Precificação — reserva de área e definição inicial de cronograma e preços

Fase 2 (direita):
4. Projeto Técnico ZPE — análise detalhada do projeto para implantação na área
5. Aprovação CZPE — aprovação pelo Conselho Nacional das Zonas de Processamento de Exportação
6. Contrato ZPE — celebração do Contrato de Cessão de Uso Onerosa da área

**Nota de rodapé:** Cada projeto é analisado individualmente. Prazos variam conforme complexidade e documentação.

---

## SLIDE 11 — CTA Final

**Tema:** dark com bg_hero_blue_compressed.jpg como fundo + overlay escuro

**Conteúdo centralizado:**

Título (Barlow 800, display, branco): "Vamos analisar sua operação."

Texto (Inter 400, 24px, branco opacidade 90%):
"A equipe técnica da ZPE Maranhão avalia a aderência do seu projeto ao regime e estima o impacto tributário e logístico para o seu setor."

Contato (Barlow 700, 36px, verde):
contato@zpe.ma.gov.br
zpe.ma.gov.br

Linha final (itálico, cinza claro): "A conexão estratégica do Maranhão com o mundo."

Logos no rodapé (gap 40px):
- logo-zpe.png altura 40px, sem filtro
- governo-ma-logo.png altura 40px, sem filtro

---

## TELA DE DETALHE DA ZPE (overlay — não é slide)

Abre ao clicar no pin "ZPE MARANHÃO / BACABEIRA" no slide 3.
Fecha com botão X, tecla Escape ou clique fora.

**Linha superior (62vh):**
- Vídeo animacao.mp4 — autoplay, loop, muted, object-fit cover
- Fade nas bordas via mask-image
- Label "O PROJETO" no canto inferior esquerdo (verde uppercase)
- Botão "Ver em tela cheia" no canto inferior esquerdo

**Linha inferior (28vh):**
- Label "A ÁREA" acima da galeria
- Galeria horizontal com scroll: 01.webp, 02.webp, 03.webp, 04.webp, 05.webp
- Cada foto clicável abre lightbox com navegação por setas e Escape para fechar