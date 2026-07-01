Recorta uma fotografia (ou gradient da marca) dentro da seta — técnica Rabia, via clipPath SVG (determinístico). A seta é o elemento proprietário; preenchê-la com imagem tratada cria um lockup forte. Aplica grading azul automático sobre a foto.

```jsx
<ArrowImage src="assets/img/porto.jpg" size={360} />     {/* foto recortada na seta */}
<ArrowImage size={200} tone="blue" />                    {/* sem foto: gradient Abyss */}
<ArrowImage size={160} tone="green" />                   {/* acento verde */}
```

Props: `src`, `size`, `tone` (`blue` / `blue-bright` / `green`), `tint`. Sem `src` usa o gradient — mantenha azul dominante (verde só como acento pontual). Ótimo em hero e capas com foto industrial/porto/logística.
