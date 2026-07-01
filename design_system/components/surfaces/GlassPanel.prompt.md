Painel translúcido (glass) com borda fina e blur, desenhado para viver sobre gradients de profundidade azul (ref. AERAMAX). Para cards de processo numerados, blocos de dados e listas em seções escuras.

```jsx
<GlassPanel number="01" title="Análise">
  Recebimento da documentação e avaliação dos requisitos do projeto.
</GlassPanel>
<GlassPanel accent title="Resultado">Objeto entregue com zero desvio.</GlassPanel>
```

Props: `number` (ativa ponto+linha+número estilo processo), `title`, `children`, `accent` (tint verde). Só sobre fundos escuros — o blur e a transparência dependem de profundidade atrás.
