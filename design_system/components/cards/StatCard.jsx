import React from 'react';

/**
 * ZPE Maranhão · StatCard
 * Número de impacto sobre gradient azul profundo, com grão.
 * Regra: número em branco, verde só no detalhe (unidade/linha).
 */
export function StatCard({ value, unit, label, detail, tone = 'blue', style, ...rest }) {
  const bg = tone === 'green'
    ? 'var(--grad-canopy-radial, radial-gradient(ellipse 70% 60% at 50% 30%, #4cac4b 0%, #0f2a12 100%))'
    : 'var(--grad-abyss, linear-gradient(180deg, #0f1d3a 0%, #244582 100%))';
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: bg,
        borderRadius: 'var(--radius-card, 16px)',
        padding: 'var(--card-padding, 24px)',
        color: '#fff',
        ...style,
      }}
      {...rest}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'overlay',
          background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\") repeat",
        }}
      />
      {label && (
        <div style={{ position: 'relative', zIndex: 2, fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', fontWeight: 500 }}>
          {label}
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 6, fontFamily: "var(--font-display,'Barlow',sans-serif)", fontWeight: 600, fontSize: 'clamp(36px,4vw,52px)', letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {value}
        {unit && <span style={{ fontSize: '0.4em', fontWeight: 400, marginLeft: 6, color: 'var(--green-soft,#5fb55e)' }}>{unit}</span>}
      </div>
      {detail && (
        <div style={{ position: 'relative', zIndex: 2, marginTop: 8, fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 11, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--green-soft,#5fb55e)' }}>
          {detail}
        </div>
      )}
    </div>
  );
}
