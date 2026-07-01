Wordmark oficial da ZPE Maranhão (seta bicolor verde + "ZPE MARANHÃO"). Use no header, footer e rodapés de slide.

```jsx
<Logo theme="light" basePath="../../" size={36} />   {/* wordmark azul, fundo claro */}
<Logo theme="dark" basePath="../../" size={32} />    {/* wordmark branco, fundo escuro */}
```

Props: `theme` (`light` = azul / `dark` = branco), `basePath` (prefixo até a raiz, ex.: `"../../"`), `size` (altura em px). Os arquivos vivem em `assets/brand/logo_fundo_azul.svg` e `logo_fundo_branco.svg`. Para o símbolo isolado (seta) use `BrandArrow`. Existe também `assets/brand/logo_governo.svg` (lockup do Governo do Maranhão) para co-branding institucional.
