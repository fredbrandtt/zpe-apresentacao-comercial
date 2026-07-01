import React from 'react';

/**
 * ZPE Maranhão · GlassPanel
 * Painel translúcido com borda fina e blur, sobre fundos de profundidade azul
 * (ref. AERAMAX). Para cards de processo numerados, blocos de dados e listas
 * sobre gradients escuros. Número grande sempre branco; verde só no detalhe.
 */
export function GlassPanel({ number, title, children, accent = false, style, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-card, 16px)',
        padding: 24,
        background: accent ? 'rgba(76,172,75,0.10)' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${accent ? 'rgba(76,172,75,0.30)' : 'rgba(255,255,255,0.14)'}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        color: '#fff',
        boxShadow: '0 12px 40px -18px rgba(0,0,0,0.5)',
        ...style,
      }}
      {...rest}
    >
      {number != null && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-soft, #5fb55e)', boxShadow: '0 0 10px 1px rgba(76,172,75,.6)' }} />
            <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.18)' }} />
          </div>
          <div style={{ fontFamily: "var(--font-display,'Barlow',sans-serif)", fontWeight: 300, fontSize: 44, letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,.9)' }}>
            {number}
          </div>
        </>
      )}
      {title && (
        <div style={{ fontFamily: "var(--font-display,'Barlow',sans-serif)", fontWeight: 600, fontSize: 17, marginTop: number != null ? 16 : 0, letterSpacing: '-0.005em' }}>
          {title}
        </div>
      )}
      {children && (
        <div style={{ fontFamily: "var(--font-body,'Inter',sans-serif)", fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 8, lineHeight: 1.55 }}>
          {children}
        </div>
      )}
    </div>
  );
}
