Botão da marca ZPE — verde é ação (primary), azul outline é secundário, ghost é terciário. Use sempre que houver uma ação clicável; o verde primary aparece no máximo uma vez por bloco.

```jsx
<Button variant="primary" size="lg" iconRight="→">Investir agora</Button>
<Button variant="secondary">Contato</Button>
<Button variant="ghost">Ver detalhes</Button>
<Button variant="primary" disabled>Indisponível</Button>
```

Variantes: `primary` (verde, ação principal), `secondary` (azul outline → preenche no hover), `ghost` (texto). Tamanhos: `sm` (38px), `md` (48px), `lg` (56px). Prop `disabled` aplica opacidade 0.4.
