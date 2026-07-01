Linhas concêntricas finas que irradiam de um canto — motivo gráfico premium (alcance, conexão, ondas de expansão). Posicione absoluto dentro de um bloco `position:relative`. Sutil, sempre decorativo.

```jsx
<div style={{ position: 'relative', overflow: 'hidden' }}>
  <RippleField origin="top-right" color="rgba(76,172,75,0.4)" opacity={0.6} />
  {/* conteúdo z-index acima */}
</div>
```

Props: `origin` (canto), `count`, `gap`, `radius`, `color`, `strokeWidth`, `opacity`. Em fundo escuro: verde/branco a baixa opacidade. Em fundo claro: azul `var(--blue)`. Use no máximo um por composição.
