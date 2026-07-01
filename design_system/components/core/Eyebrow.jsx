import React from 'react';

/**
 * ZPE Maranhão · Eyebrow
 * Rótulo monoespaçado uppercase. Verde por padrão (acento de seção).
 */
export function Eyebrow({ children, tone = 'green', style, ...rest }) {
  const tones = {
    green: 'var(--green-deep, #3d9a3c)',
    blue: 'var(--blue, #244582)',
    muted: 'var(--ink-mute, #7a87a0)',
    light: 'var(--green-soft, #5fb55e)',
  };
  return (
    <div
      style={{
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tones[tone] || tones.green,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
