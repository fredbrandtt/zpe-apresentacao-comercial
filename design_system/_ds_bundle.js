/* @ds-bundle: {"format":3,"namespace":"ZPEMaranhODesignSystem_408e04","components":[{"name":"BrandArrow","sourcePath":"components/brand/BrandArrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ArrowImage","sourcePath":"components/motifs/ArrowImage.jsx"},{"name":"RippleField","sourcePath":"components/motifs/RippleField.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"}],"sourceHashes":{"components/brand/BrandArrow.jsx":"1c57cc213619","components/brand/Logo.jsx":"650d393d0d69","components/cards/Card.jsx":"7e2fa4e07bf8","components/cards/StatCard.jsx":"3f253fc8ff39","components/core/Badge.jsx":"b83be671775e","components/core/Button.jsx":"f020dee7f973","components/core/Eyebrow.jsx":"3a744f97ef33","components/forms/Input.jsx":"98f25e8deebc","components/motifs/ArrowImage.jsx":"6f8387101ab5","components/motifs/RippleField.jsx":"98159c297eb3","components/surfaces/GlassPanel.jsx":"53a33939ef9e","ui_kits/site-institucional/App.jsx":"8b77daa0378f","ui_kits/site-institucional/ConnectionMesh.jsx":"d4b4cb513ff7","ui_kits/site-institucional/Footer.jsx":"1f3bf9761ef0","ui_kits/site-institucional/Header.jsx":"2338f92ef394","ui_kits/site-institucional/Home.jsx":"640720b95826","ui_kits/site-institucional/Infraestrutura.jsx":"33e50affdd43","ui_kits/site-institucional/Oportunidades.jsx":"16e60f8fe012"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZPEMaranhODesignSystem_408e04 = window.ZPEMaranhODesignSystem_408e04 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · BrandArrow (seta / chevron)
 * Elemento gráfico primário da marca: direção, progresso, exportação.
 * Vetor real do arquivo seta_outline.svg.
 */
const ARROW_PATH = 'M349.717 38.7726C448.698 17.9463 495.604 7.99495 519.471 3.74305C531.418 1.61461 537.512 0.93031 541.449 1.00546C545.328 1.07949 547.075 1.87922 550.546 2.89112C564.091 6.83931 577.291 18.6789 582.53 31.5652C582.675 31.9229 583.032 33.2411 583.611 35.6429C584.179 37.9989 584.941 41.3098 585.894 45.5622C587.8 54.066 590.467 66.3228 593.87 82.2203C600.675 114.015 610.424 160.362 622.921 220.347L661.109 403.646L659.898 409.022C659.796 409.477 659.512 410.232 658.922 411.44C658.34 412.631 657.487 414.209 656.287 416.291C653.889 420.455 650.132 426.585 644.446 435.583C633.077 453.575 614.024 482.987 582.774 530.962C555.365 573.042 536.075 602.445 523.26 621.632C516.852 631.227 512.067 638.261 508.697 643.048C507.011 645.442 505.684 647.266 504.689 648.564C503.664 649.9 503.056 650.587 502.787 650.805L502.786 650.805C499.992 653.066 495.109 654.988 489.975 656.083C484.836 657.179 479.69 657.395 476.401 656.444C469.482 654.443 464.433 651.245 459.937 646.036L455.968 641.437L418.796 465.643L381.57 289.597L381.364 288.621L380.388 288.824L205.076 325.338L29.9803 361.807L25.1131 360.681C9.27495 357.02 -1.04214 341.79 1.34126 325.552C1.77227 322.616 2.52769 320.159 12.5103 304.176C22.4578 288.25 41.4698 259.028 78.2008 202.655C104.877 161.712 124.181 132.304 137.162 112.86C143.653 103.137 148.56 95.9093 152.015 90.9782C153.743 88.512 155.103 86.6273 156.115 85.2943C156.621 84.6273 157.034 84.1057 157.358 83.7221C157.697 83.321 157.898 83.122 157.985 83.0527C159.969 81.4827 163.195 79.5065 165.351 78.5154L165.767 78.3312C165.769 78.3306 165.853 78.3005 166.085 78.2367C166.298 78.1777 166.592 78.1021 166.965 78.009C167.71 77.8233 168.757 77.5742 170.091 77.2652C172.758 76.6474 176.562 75.7923 181.375 74.7273C191.002 72.5976 204.661 69.6293 221.347 66.0392C254.72 58.8592 300.196 49.1926 349.717 38.7726Z';
function BrandArrow({
  size = 48,
  mode = 'solid',
  color,
  opacity = 1,
  style,
  ...rest
}) {
  const c = color || 'var(--green, #4cac4b)';
  const isOutline = mode === 'outline';
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 663 659",
    width: size,
    height: size * 659 / 663,
    fill: "none",
    "aria-hidden": true,
    style: {
      display: 'block',
      opacity,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: ARROW_PATH,
    fill: isOutline ? 'none' : c,
    stroke: isOutline ? c : 'none',
    strokeWidth: isOutline ? 2 : 0
  }));
}
Object.assign(__ds_scope, { BrandArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandArrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Logo — wordmark oficial (seta + "ZPE MARANHÃO").
 * theme="light" → wordmark azul (logo_fundo_azul) sobre fundos claros.
 * theme="dark"  → wordmark branco (logo_fundo_branco) sobre fundos escuros/azuis.
 * O símbolo (seta) é sempre o bicolor verde da marca.
 *
 * basePath: prefixo até a raiz do projeto a partir da página que usa o componente
 * (ex.: "../../" se a página está dois níveis abaixo da raiz). Padrão "".
 */
function Logo({
  theme = 'light',
  basePath = '',
  size = 32,
  style,
  ...rest
}) {
  const file = theme === 'dark' ? 'logo_fundo_branco.svg' : 'logo_fundo_azul.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}assets/brand/${file}`,
    alt: "ZPE Maranh\xE3o",
    height: size,
    style: {
      display: 'block',
      height: size,
      width: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Card
 * Superfície clara com borda. Hover acende a borda accent e eleva.
 */
function Card({
  eyebrow,
  title,
  children,
  interactive = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface, #fff)',
      border: `1px solid ${hover ? 'var(--green, #4cac4b)' : 'var(--line, #e6eaf2)'}`,
      borderRadius: 'var(--radius-card, 16px)',
      padding: 'var(--card-padding, 24px)',
      boxShadow: hover ? 'var(--shadow-md, 0 8px 24px -10px rgba(26,41,66,.16))' : 'none',
      transition: 'border-color var(--dur-base,.25s) var(--ease,ease), box-shadow var(--dur-base,.25s) var(--ease,ease)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--green-deep,#3d9a3c)',
      fontWeight: 500
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display,'Barlow',sans-serif)",
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--blue,#244582)',
      marginTop: eyebrow ? 8 : 0,
      letterSpacing: '-0.01em'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body,'Inter',sans-serif)",
      fontSize: 14,
      color: 'var(--ink-soft,#4a5a78)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · StatCard
 * Número de impacto sobre gradient azul profundo, com grão.
 * Regra: número em branco, verde só no detalhe (unidade/linha).
 */
function StatCard({
  value,
  unit,
  label,
  detail,
  tone = 'blue',
  style,
  ...rest
}) {
  const bg = tone === 'green' ? 'var(--grad-canopy-radial, radial-gradient(ellipse 70% 60% at 50% 30%, #4cac4b 0%, #0f2a12 100%))' : 'var(--grad-abyss, linear-gradient(180deg, #0f1d3a 0%, #244582 100%))';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      borderRadius: 'var(--radius-card, 16px)',
      padding: 'var(--card-padding, 24px)',
      color: '#fff',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      mixBlendMode: 'overlay',
      background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\") repeat"
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      marginTop: 6,
      fontFamily: "var(--font-display,'Barlow',sans-serif)",
      fontWeight: 600,
      fontSize: 'clamp(36px,4vw,52px)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.4em',
      fontWeight: 400,
      marginLeft: 6,
      color: 'var(--green-soft,#5fb55e)'
    }
  }, unit)), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      marginTop: 8,
      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: 'var(--green-soft,#5fb55e)'
    }
  }, detail));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Badge
 * Pílula de metadado em JetBrains Mono. Verde/azul para tom de marca,
 * semânticas (success/warning/error/info) para status.
 */
function Badge({
  variant = 'green',
  children,
  style,
  ...rest
}) {
  const variants = {
    green: {
      background: 'var(--green-pale, #e4f4e3)',
      color: 'var(--green-pressed, #2f7a2e)'
    },
    blue: {
      background: 'var(--blue-pale, #eef2fb)',
      color: 'var(--blue, #244582)'
    },
    success: {
      background: 'var(--success-bg, #e4f6e8)',
      color: 'var(--success-text, #0f5523)'
    },
    warning: {
      background: 'var(--warning-bg, #fbf2dc)',
      color: 'var(--warning-text, #6b4a08)'
    },
    error: {
      background: 'var(--error-bg, #fbe3e4)',
      color: 'var(--error-text, #6e1216)'
    },
    info: {
      background: 'var(--info-bg, #e3edfb)',
      color: 'var(--info-text, #123a6b)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-soft, #4a5a78)',
      border: '1px solid var(--line-strong, #cdd5e4)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.03em',
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill, 9999px)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Button
 * Verde (ação) é primary; azul outline é secondary; ghost é terciário.
 * O verde nunca vira fundo dominante — é o gesto de ação.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconRight,
  iconLeft,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 38,
      padding: '0 16px',
      fontSize: 12,
      radius: 8
    },
    md: {
      height: 48,
      padding: '0 24px',
      fontSize: 13,
      radius: 'var(--radius-sm, 10px)'
    },
    lg: {
      height: 56,
      padding: '0 32px',
      fontSize: 15,
      radius: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: s.height,
    padding: s.padding,
    borderRadius: s.radius,
    fontFamily: "var(--font-body, 'Inter', sans-serif)",
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base,.25s) var(--ease,ease), color var(--dur-base,.25s) var(--ease,ease), box-shadow var(--dur-base,.25s) var(--ease,ease), border-color var(--dur-base,.25s) var(--ease,ease)',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  const variants = {
    primary: {
      background: 'var(--green-pressed, #2f7a2e)',
      color: 'var(--on-accent, #fff)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--blue, #244582)',
      border: '1.5px solid var(--blue, #244582)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-soft, #4a5a78)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--green-deep, #3d9a3c)',
      boxShadow: 'var(--shadow-glow-accent, 0 4px 24px -4px rgba(76,172,75,.25))'
    },
    secondary: {
      background: 'var(--blue, #244582)',
      color: 'var(--on-primary, #fff)'
    },
    ghost: {
      background: 'var(--blue-pale, #eef2fb)',
      color: 'var(--blue, #244582)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hoverStyles[variant] : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Eyebrow
 * Rótulo monoespaçado uppercase. Verde por padrão (acento de seção).
 */
function Eyebrow({
  children,
  tone = 'green',
  style,
  ...rest
}) {
  const tones = {
    green: 'var(--green-deep, #3d9a3c)',
    blue: 'var(--blue, #244582)',
    muted: 'var(--ink-mute, #7a87a0)',
    light: 'var(--green-soft, #5fb55e)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tones[tone] || tones.green,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · Input
 * Campo de formulário com label mono e foco azul.
 */
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--error, #d03238)' : focus ? 'var(--blue, #244582)' : 'var(--line-strong, #cdd5e4)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft,#4a5a78)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 48,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm, 10px)',
      border: `1.5px solid ${borderColor}`,
      background: 'var(--surface, #fff)',
      color: 'var(--ink, #1a2942)',
      fontFamily: "var(--font-body,'Inter',sans-serif)",
      fontSize: 15,
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px rgba(36,69,130,.12)' : 'none',
      transition: 'border-color var(--dur-fast,.18s) var(--ease,ease), box-shadow var(--dur-fast,.18s) var(--ease,ease)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body,'Inter',sans-serif)",
      fontSize: 12,
      color: error ? 'var(--error,#d03238)' : 'var(--ink-mute,#7a87a0)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/motifs/ArrowImage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · ArrowImage
 * Recorta uma imagem (ou gradient da marca) dentro da seta — técnica Rabia.
 * Usa clipPath SVG (determinístico, sem depender de mask CSS). A seta é o
 * elemento proprietário; preenchê-la com fotografia tratada cria um lockup forte.
 */
const ARROW_PATH = 'M349.717 38.7726C448.698 17.9463 495.604 7.99495 519.471 3.74305C531.418 1.61461 537.512 0.93031 541.449 1.00546C545.328 1.07949 547.075 1.87922 550.546 2.89112C564.091 6.83931 577.291 18.6789 582.53 31.5652C582.675 31.9229 583.032 33.2411 583.611 35.6429C584.179 37.9989 584.941 41.3098 585.894 45.5622C587.8 54.066 590.467 66.3228 593.87 82.2203C600.675 114.015 610.424 160.362 622.921 220.347L661.109 403.646L659.898 409.022C659.796 409.477 659.512 410.232 658.922 411.44C658.34 412.631 657.487 414.209 656.287 416.291C653.889 420.455 650.132 426.585 644.446 435.583C633.077 453.575 614.024 482.987 582.774 530.962C555.365 573.042 536.075 602.445 523.26 621.632C516.852 631.227 512.067 638.261 508.697 643.048C507.011 645.442 505.684 647.266 504.689 648.564C503.664 649.9 503.056 650.587 502.787 650.805L502.786 650.805C499.992 653.066 495.109 654.988 489.975 656.083C484.836 657.179 479.69 657.395 476.401 656.444C469.482 654.443 464.433 651.245 459.937 646.036L455.968 641.437L418.796 465.643L381.57 289.597L381.364 288.621L380.388 288.824L205.076 325.338L29.9803 361.807L25.1131 360.681C9.27495 357.02 -1.04214 341.79 1.34126 325.552C1.77227 322.616 2.52769 320.159 12.5103 304.176C22.4578 288.25 41.4698 259.028 78.2008 202.655C104.877 161.712 124.181 132.304 137.162 112.86C143.653 103.137 148.56 95.9093 152.015 90.9782C153.743 88.512 155.103 86.6273 156.115 85.2943C156.621 84.6273 157.034 84.1057 157.358 83.7221C157.697 83.321 157.898 83.122 157.985 83.0527C159.969 81.4827 163.195 79.5065 165.351 78.5154L165.767 78.3312C165.769 78.3306 165.853 78.3005 166.085 78.2367C166.298 78.1777 166.592 78.1021 166.965 78.009C167.71 77.8233 168.757 77.5742 170.091 77.2652C172.758 76.6474 176.562 75.7923 181.375 74.7273C191.002 72.5976 204.661 69.6293 221.347 66.0392C254.72 58.8592 300.196 49.1926 349.717 38.7726Z';
const GRADS = {
  blue: [['0%', '#0f1d3a'], ['100%', '#244582']],
  'blue-bright': [['0%', '#1d3e7e'], ['100%', '#2a5ec0']],
  green: [['0%', '#0f2a12'], ['50%', '#2f7a2e'], ['100%', '#4cac4b']]
};
function ArrowImage({
  src,
  size = 320,
  tone = 'blue',
  tint = true,
  style,
  ...rest
}) {
  const uid = React.useId().replace(/:/g, '');
  const clipId = `ai-clip-${uid}`;
  const gradId = `ai-grad-${uid}`;
  const stops = GRADS[tone] || GRADS.blue;
  const h = size * 659 / 663;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 663 659",
    width: size,
    height: h,
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/React.createElement("path", {
    d: ARROW_PATH
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: gradId,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, stops.map(([o, c], i) => /*#__PURE__*/React.createElement("stop", {
    key: i,
    offset: o,
    stopColor: c
  })))), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${clipId})`
  }, src ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("image", {
    href: src,
    x: "0",
    y: "0",
    width: "663",
    height: "659",
    preserveAspectRatio: "xMidYMid slice"
  }), tint && /*#__PURE__*/React.createElement("rect", {
    width: "663",
    height: "659",
    fill: "#16315f",
    opacity: "0.34"
  })) : /*#__PURE__*/React.createElement("rect", {
    width: "663",
    height: "659",
    fill: `url(#${gradId})`
  })));
}
Object.assign(__ds_scope, { ArrowImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motifs/ArrowImage.jsx", error: String((e && e.message) || e) }); }

// components/motifs/RippleField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · RippleField
 * Linhas concêntricas finas que irradiam de um canto — motivo gráfico premium
 * (ref. Cinaro/Sinesubs). Metáfora de alcance e conexão. Sutil, decorativo.
 * Em fundos escuros use verde/branco a baixa opacidade; em claros, azul.
 */
function RippleField({
  origin = 'top-right',
  count = 8,
  gap = 90,
  radius = 120,
  color = 'var(--green, #4cac4b)',
  strokeWidth = 1.25,
  opacity = 0.5,
  style,
  ...rest
}) {
  const origins = {
    'top-right': [1000, 0],
    'top-left': [0, 0],
    'bottom-right': [1000, 1000],
    'bottom-left': [0, 1000],
    'center': [500, 500]
  };
  const [cx, cy] = origins[origin] || origins['top-right'];
  const rings = Array.from({
    length: count
  }, (_, i) => radius + i * gap);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1000 1000",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity,
      ...style
    }
  }, rest), rings.map((r, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth
  })));
}
Object.assign(__ds_scope, { RippleField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motifs/RippleField.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ZPE Maranhão · GlassPanel
 * Painel translúcido com borda fina e blur, sobre fundos de profundidade azul
 * (ref. AERAMAX). Para cards de processo numerados, blocos de dados e listas
 * sobre gradients escuros. Número grande sempre branco; verde só no detalhe.
 */
function GlassPanel({
  number,
  title,
  children,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card, 16px)',
      padding: 24,
      background: accent ? 'rgba(76,172,75,0.10)' : 'rgba(255,255,255,0.06)',
      border: `1px solid ${accent ? 'rgba(76,172,75,0.30)' : 'rgba(255,255,255,0.14)'}`,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      color: '#fff',
      boxShadow: '0 12px 40px -18px rgba(0,0,0,0.5)',
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-soft, #5fb55e)',
      boxShadow: '0 0 10px 1px rgba(76,172,75,.6)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(255,255,255,0.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display,'Barlow',sans-serif)",
      fontWeight: 300,
      fontSize: 44,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      color: 'rgba(255,255,255,.9)'
    }
  }, number)), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display,'Barlow',sans-serif)",
      fontWeight: 600,
      fontSize: 17,
      marginTop: number != null ? 16 : 0,
      letterSpacing: '-0.005em'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body,'Inter',sans-serif)",
      fontSize: 14,
      color: 'rgba(255,255,255,0.62)',
      marginTop: 8,
      lineHeight: 1.55
    }
  }, children));
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/App.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — App shell (navegação entre telas)
function App() {
  const [screen, setScreen] = React.useState('home');
  const nav = s => {
    setScreen(s);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const Screen = {
    home: window.Home,
    infra: window.Infraestrutura,
    oportunidades: window.Oportunidades
  }[screen];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--canvas)'
    }
  }, /*#__PURE__*/React.createElement(window.Header, {
    current: screen,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    onNav: nav
  })), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/ConnectionMesh.jsx
try { (() => {
// ZPE Maranhão · Connection mesh — rede de nós (metáfora do hub de exportação).
// Apenas em blocos azuis escuros; verde accent em baixa opacidade; pausa fora da viewport.
function ConnectionMesh({
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [],
      w = 0,
      h = 0,
      running = true,
      raf = 0;
    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = r.width;
      h = canvas.height = r.height;
    }
    function make() {
      nodes = [];
      const count = Math.min(22, Math.floor(w * h / 42000));
      for (let i = 0; i < count; i++) nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - .5) * .3,
        vy: (Math.random() - .5) * .3,
        r: 2 + Math.random() * 2
      });
    }
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(76,172,75,' + 0.12 * (1 - d / 200) + ')';
            ctx.lineWidth = .8;
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76,172,75,0.35)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize();
    make();
    draw();
    const obs = new IntersectionObserver(es => {
      running = es[0].isIntersecting;
      if (running) draw();
    }, {
      threshold: .05
    });
    obs.observe(canvas.parentElement);
    const onR = () => {
      resize();
      make();
    };
    window.addEventListener('resize', onR);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener('resize', onR);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      ...style
    }
  });
}
window.ConnectionMesh = ConnectionMesh;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/ConnectionMesh.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/Footer.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — Footer
const {
  Logo
} = window.ZPEMaranhODesignSystem_408e04;
function Footer() {
  const cols = [{
    h: 'Institucional',
    links: ['Sobre a ZPE', 'Governança', 'Legislação', 'Notícias']
  }, {
    h: 'Infraestrutura',
    links: ['Localização', 'Logística', 'Energia', 'Conectividade']
  }, {
    h: 'Investidor',
    links: ['Incentivos fiscais', 'Como instalar', 'Oportunidades', 'Contato']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-abyss)',
      color: '#fff',
      padding: '64px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    theme: "dark",
    basePath: "../../",
    size: 34
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.55)',
      marginTop: 16,
      lineHeight: 1.6,
      maxWidth: '34ch'
    }
  }, "Zona de Processamento de Exporta\xE7\xE3o do Maranh\xE3o. Infraestrutura de classe mundial para empresas exportadoras.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--green-soft)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.7)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)',
      marginTop: 48,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.4)'
    }
  }, "\xA9 2026 ZPE Maranh\xE3o \xB7 Empresa de Estado"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.4)'
    }
  }, "S\xE3o Lu\xEDs \xB7 Maranh\xE3o \xB7 Brasil"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/Header.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — Header
const {
  Logo,
  Button
} = window.ZPEMaranhODesignSystem_408e04;
function Header({
  current,
  onNav
}) {
  const items = [{
    id: 'home',
    label: 'Início'
  }, {
    id: 'infra',
    label: 'Infraestrutura'
  }, {
    id: 'oportunidades',
    label: 'Oportunidades'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 68,
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    theme: "light",
    basePath: "../../",
    size: 34
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: current === it.id ? 600 : 400,
      color: current === it.id ? 'var(--blue)' : 'var(--ink-soft)',
      borderBottom: current === it.id ? '2px solid var(--green)' : '2px solid transparent'
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav('oportunidades')
  }, "Contato"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: "\u2192",
    onClick: () => onNav('oportunidades')
  }, "Investir")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/Home.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — Home
const {
  Eyebrow,
  Button,
  Card,
  StatCard,
  BrandArrow,
  Badge
} = window.ZPEMaranhODesignSystem_408e04;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-aurora-blue)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(window.ConnectionMesh, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement(BrandArrow, {
    size: 420,
    mode: "outline",
    color: "rgba(76,172,75,0.16)"
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/world_dotted.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      opacity: .13,
      filter: 'brightness(0) invert(1)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      maxWidth: 1120,
      margin: '0 auto',
      padding: '104px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Zona de Processamento de Exporta\xE7\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(44px,6vw,80px)',
      lineHeight: .96,
      letterSpacing: '-.025em',
      margin: '18px 0 0',
      maxWidth: '15ch'
    }
  }, "Infraestrutura de ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "classe mundial"), " no Maranh\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'rgba(255,255,255,.65)',
      maxWidth: '50ch',
      marginTop: 22,
      lineHeight: 1.55
    }
  }, "300 hectares de \xE1rea industrial com acesso direto \xE0 ferrovia, rodovia e o Porto do Itaqui, um dos mais profundos do Brasil."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 44,
      flexWrap: 'wrap'
    }
  }, [['300', 'ha', 'Área total'], ['23', 'm', 'Calado do porto'], ['800', 'm', 'Distância ao porto']].map(([n, u, d]) => /*#__PURE__*/React.createElement("div", {
    key: d
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      letterSpacing: '-.02em',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, n, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--green-soft)',
      marginLeft: 4,
      fontWeight: 500
    }
  }, u)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'rgba(255,255,255,.4)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "\u2192",
    onClick: () => onNav('oportunidades')
  }, "Conhe\xE7a a ZPE"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('infra'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.4)'
    }
  }, "Ver infraestrutura"))));
}
function InfraSection({
  onNav
}) {
  const cards = [{
    eyebrow: 'Logística',
    title: 'Porto do Itaqui · 800m',
    body: 'Um dos portos mais profundos do Brasil, com calado de 23 metros, a menos de 1km do complexo.'
  }, {
    eyebrow: 'Ferrovia',
    title: 'Carajás & Transnordestina',
    body: 'Acesso direto à malha ferroviária nacional com terminal de carga integrado à zona.'
  }, {
    eyebrow: 'Rodovia',
    title: 'BR-135 integrada',
    body: 'Conexão rodoviária multimodal ligando o complexo aos principais corredores do Nordeste.'
  }, {
    eyebrow: 'Energia',
    title: 'Matriz limpa disponível',
    body: 'Oferta robusta de energia com forte componente renovável para operação industrial.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Infraestrutura"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(30px,3.6vw,44px)',
      color: 'var(--blue)',
      letterSpacing: '-.015em',
      margin: '10px 0 0',
      lineHeight: 1.06
    }
  }, "Conectividade ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "multimodal"), " em um raio de 5km"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 36
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    eyebrow: c.eyebrow,
    title: c.title
  }, c.body)))));
}
function DataBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-frost)',
      padding: '88px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Dados estrat\xE9gicos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3.4vw,40px)',
      color: 'var(--blue)',
      letterSpacing: '-.015em',
      margin: '10px 0 14px',
      lineHeight: 1.08
    }
  }, "N\xFAmeros que demonstram ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "escala")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 3,
      background: 'var(--grad-accent-line)',
      borderRadius: 2,
      margin: '0 0 18px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink-soft)',
      maxWidth: '40ch',
      lineHeight: 1.6
    }
  }, "A ZPE Maranh\xE3o concentra infraestrutura log\xEDstica multimodal com capacidade de expans\xE3o planejada e incentivos fiscais federais.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Investimento previsto",
    value: "R$ 4,2",
    unit: "bi",
    detail: "At\xE9 2030"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "green",
    label: "Expans\xE3o",
    value: "40",
    unit: "%",
    detail: "\xC1rea adicional planejada"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\xC1rea industrial",
    value: "300",
    unit: "ha"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Calado do porto",
    value: "23",
    unit: "m",
    detail: "Entre os maiores do pa\xEDs"
  }))));
}
function CtaBand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-blue-to-green)',
      color: '#fff',
      padding: '80px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "green",
    style: {
      background: 'rgba(255,255,255,.12)',
      color: 'var(--green-soft)'
    }
  }, "Aberto para instala\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(30px,4vw,52px)',
      letterSpacing: '-.02em',
      margin: '18px 0 0',
      lineHeight: 1.02
    }
  }, "Sua opera\xE7\xE3o exportadora ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "come\xE7a aqui")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'rgba(255,255,255,.7)',
      marginTop: 16,
      lineHeight: 1.55
    }
  }, "Fale com a equipe de relacionamento com investidores e conhe\xE7a os incentivos dispon\xEDveis."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "\u2192",
    onClick: () => onNav('oportunidades')
  }, "Quero investir"))));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(InfraSection, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(DataBand, null), /*#__PURE__*/React.createElement(CtaBand, {
    onNav: onNav
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/Infraestrutura.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — Infraestrutura
const {
  Eyebrow,
  Card,
  StatCard,
  Badge,
  Button
} = window.ZPEMaranhODesignSystem_408e04;
function InfraHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-ocean-floor)',
      color: '#fff',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/world_dotted.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      opacity: .14,
      filter: 'brightness(0) invert(1)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Infraestrutura"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(36px,5vw,64px)',
      letterSpacing: '-.025em',
      margin: '16px 0 0',
      lineHeight: .98,
      maxWidth: '16ch'
    }
  }, "Tudo pronto para ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "operar e exportar")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'rgba(255,255,255,.65)',
      maxWidth: '52ch',
      marginTop: 20,
      lineHeight: 1.55
    }
  }, "Log\xEDstica multimodal, energia, conectividade e \xE1rea industrial preparada \u2014 concentrados em um raio de menos de 5km.")));
}
function LogisticsGrid() {
  const rows = [{
    eyebrow: 'Porto do Itaqui',
    title: '800m · calado 23m',
    body: 'Um dos portos mais profundos do Brasil, com terminal de contêineres e granéis a poucos minutos da zona.'
  }, {
    eyebrow: 'Ferrovia Carajás',
    title: 'Terminal integrado',
    body: 'Conexão direta à malha ferroviária para escoamento de minério e carga geral.'
  }, {
    eyebrow: 'Ferrovia Transnordestina',
    title: 'Em expansão',
    body: 'Novo eixo ferroviário ampliando o alcance da ZPE ao interior do Nordeste.'
  }, {
    eyebrow: 'Rodovia BR-135',
    title: 'Acesso multimodal',
    body: 'Ligação rodoviária aos principais corredores logísticos da região.'
  }, {
    eyebrow: 'Energia',
    title: 'Matriz renovável',
    body: 'Oferta robusta com forte componente limpo para operação industrial intensiva.'
  }, {
    eyebrow: 'Área industrial',
    title: '300 ha urbanizados',
    body: 'Lotes com infraestrutura de utilidades, água e telecom prontos para instalação.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas)',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Componentes do complexo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3.4vw,40px)',
      color: 'var(--blue)',
      letterSpacing: '-.015em',
      margin: '10px 0 32px',
      lineHeight: 1.08
    }
  }, "Seis pilares de ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "infraestrutura")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.eyebrow,
    eyebrow: r.eyebrow,
    title: r.title
  }, r.body)))));
}
function InfraStats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-frost)',
      padding: '72px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\xC1rea total",
    value: "300",
    unit: "ha"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Dist\xE2ncia ao porto",
    value: "800",
    unit: "m"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Calado do porto",
    value: "23",
    unit: "m"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "green",
    label: "Expans\xE3o prevista",
    value: "40",
    unit: "%"
  })));
}
function Infraestrutura() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfraHero, null), /*#__PURE__*/React.createElement(LogisticsGrid, null), /*#__PURE__*/React.createElement(InfraStats, null));
}
window.Infraestrutura = Infraestrutura;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/Infraestrutura.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-institucional/Oportunidades.jsx
try { (() => {
// ZPE Maranhão · Site Institucional — Oportunidades (incentivos + formulário de investidor)
const {
  Eyebrow,
  Button,
  Card,
  Input,
  Badge,
  BrandArrow,
  GlassPanel,
  RippleField
} = window.ZPEMaranhODesignSystem_408e04;
function Incentivos() {
  const items = [{
    eyebrow: 'Tributário',
    title: 'Suspensão de impostos',
    body: 'Suspensão de tributos federais sobre importação e aquisição de bens e serviços para o projeto.'
  }, {
    eyebrow: 'Prazo',
    title: 'Regime por 20 anos',
    body: 'Estabilidade do regime tributário da ZPE garantida por duas décadas, prorrogável.'
  }, {
    eyebrow: 'Cambial',
    title: 'Liberdade cambial',
    body: 'Tratamento cambial diferenciado para empresas predominantemente exportadoras.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas)',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Incentivos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3.4vw,40px)',
      color: 'var(--blue)',
      letterSpacing: '-.015em',
      margin: '10px 0 32px',
      lineHeight: 1.08
    }
  }, "Por que instalar na ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "ZPE Maranh\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, items.map(i => /*#__PURE__*/React.createElement(Card, {
    key: i.title,
    eyebrow: i.eyebrow,
    title: i.title
  }, i.body)))));
}
function ProcessoInstalacao() {
  const steps = [{
    n: '01',
    t: 'Localização',
    b: 'Selecione um lote urbanizado a 800m do Porto do Itaqui, com utilidades prontas.'
  }, {
    n: '02',
    t: 'Licenciamento',
    b: 'Habilitação no regime ZPE com suspensão de tributos federais por 20 anos.'
  }, {
    n: '03',
    t: 'Instalação',
    b: 'Infraestrutura de energia, água e telecom para operação industrial intensiva.'
  }, {
    n: '04',
    t: 'Exportação',
    b: 'Escoamento multimodal: ferrovia, rodovia e porto profundo.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-aurora-deep)',
      color: '#fff',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(RippleField, {
    origin: "top-right",
    color: "rgba(76,172,75,0.22)",
    opacity: 0.6,
    count: 9
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Modelo de opera\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(28px,3.6vw,44px)',
      letterSpacing: '-.02em',
      margin: '12px 0 40px',
      lineHeight: 1.04,
      maxWidth: '20ch'
    }
  }, "Da sele\xE7\xE3o do lote \xE0 ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "exporta\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(GlassPanel, {
    key: s.n,
    number: s.n,
    title: s.t,
    accent: i === steps.length - 1
  }, s.b)))));
}
function InvestorForm() {
  const [sent, setSent] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-abyss)',
      color: '#fff',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "zpe-grain-dark",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      bottom: -40,
      opacity: .9,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(BrandArrow, {
    size: 300,
    mode: "outline",
    color: "rgba(76,172,75,0.14)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "green",
    style: {
      background: 'rgba(255,255,255,.12)',
      color: 'var(--green-soft)'
    }
  }, "Relacionamento com investidores"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(30px,3.8vw,48px)',
      letterSpacing: '-.02em',
      margin: '18px 0 0',
      lineHeight: 1.02
    }
  }, "Fale com nossa ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "equipe")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'rgba(255,255,255,.65)',
      marginTop: 16,
      lineHeight: 1.55,
      maxWidth: '38ch'
    }
  }, "Envie seus dados e receba o prospecto completo com incentivos, lotes dispon\xEDveis e pr\xF3ximos passos para instala\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Raz\xE3o social",
    required: true,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nome do respons\xE1vel",
    placeholder: "Nome completo",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cargo",
    placeholder: "Diretor, gerente\u2026"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail corporativo",
    type: "email",
    placeholder: "nome@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    placeholder: "(98) 90000-0000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--ink-mute)',
      maxWidth: '28ch'
    }
  }, sent ? 'Recebido! Nossa equipe entrará em contato.' : 'Resposta em até 2 dias úteis.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "\u2192",
    type: "submit",
    style: {
      background: sent ? 'var(--green-deep)' : undefined
    }
  }, sent ? 'Enviado' : 'Solicitar prospecto'))))));
}
function Oportunidades() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Incentivos, null), /*#__PURE__*/React.createElement(ProcessoInstalacao, null), /*#__PURE__*/React.createElement(InvestorForm, null));
}
window.Oportunidades = Oportunidades;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-institucional/Oportunidades.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandArrow = __ds_scope.BrandArrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ArrowImage = __ds_scope.ArrowImage;

__ds_ns.RippleField = __ds_scope.RippleField;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

})();
