import React from 'react';

/**
 * ZPE Maranhão · Button
 * Verde (ação) é primary; azul outline é secondary; ghost é terciário.
 * O verde nunca vira fundo dominante — é o gesto de ação.
 */
export function Button({
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
    sm: { height: 38, padding: '0 16px', fontSize: 12, radius: 8 },
    md: { height: 48, padding: '0 24px', fontSize: 13, radius: 'var(--radius-sm, 10px)' },
    lg: { height: 56, padding: '0 32px', fontSize: 15, radius: 14 },
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
    pointerEvents: disabled ? 'none' : 'auto',
  };

  const variants = {
    primary: { background: 'var(--green-pressed, #2f7a2e)', color: 'var(--on-accent, #fff)' },
    secondary: { background: 'transparent', color: 'var(--blue, #244582)', border: '1.5px solid var(--blue, #244582)' },
    ghost: { background: 'transparent', color: 'var(--ink-soft, #4a5a78)' },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: 'var(--green-deep, #3d9a3c)', boxShadow: 'var(--shadow-glow-accent, 0 4px 24px -4px rgba(76,172,75,.25))' },
    secondary: { background: 'var(--blue, #244582)', color: 'var(--on-primary, #fff)' },
    ghost: { background: 'var(--blue-pale, #eef2fb)', color: 'var(--blue, #244582)' },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(hover && !disabled ? hoverStyles[variant] : null), ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
