import React from 'react';

/**
 * ZPE Maranhão · Badge
 * Pílula de metadado em JetBrains Mono. Verde/azul para tom de marca,
 * semânticas (success/warning/error/info) para status.
 */
export function Badge({ variant = 'green', children, style, ...rest }) {
  const variants = {
    green: { background: 'var(--green-pale, #e4f4e3)', color: 'var(--green-pressed, #2f7a2e)' },
    blue: { background: 'var(--blue-pale, #eef2fb)', color: 'var(--blue, #244582)' },
    success: { background: 'var(--success-bg, #e4f6e8)', color: 'var(--success-text, #0f5523)' },
    warning: { background: 'var(--warning-bg, #fbf2dc)', color: 'var(--warning-text, #6b4a08)' },
    error: { background: 'var(--error-bg, #fbe3e4)', color: 'var(--error-text, #6e1216)' },
    info: { background: 'var(--info-bg, #e3edfb)', color: 'var(--info-text, #123a6b)' },
    outline: { background: 'transparent', color: 'var(--ink-soft, #4a5a78)', border: '1px solid var(--line-strong, #cdd5e4)' },
  };
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
