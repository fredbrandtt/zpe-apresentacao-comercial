import React from 'react';

/**
 * ZPE Maranhão · Card
 * Superfície clara com borda. Hover acende a borda accent e eleva.
 */
export function Card({ eyebrow, title, children, interactive = true, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'var(--surface, #fff)',
        border: `1px solid ${hover ? 'var(--green, #4cac4b)' : 'var(--line, #e6eaf2)'}`,
        borderRadius: 'var(--radius-card, 16px)',
        padding: 'var(--card-padding, 24px)',
        boxShadow: hover ? 'var(--shadow-md, 0 8px 24px -10px rgba(26,41,66,.16))' : 'none',
        transition: 'border-color var(--dur-base,.25s) var(--ease,ease), box-shadow var(--dur-base,.25s) var(--ease,ease)',
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <div style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--green-deep,#3d9a3c)', fontWeight: 500 }}>
          {eyebrow}
        </div>
      )}
      {title && (
        <div style={{ fontFamily: "var(--font-display,'Barlow',sans-serif)", fontWeight: 600, fontSize: 19, color: 'var(--blue,#244582)', marginTop: eyebrow ? 8 : 0, letterSpacing: '-0.01em' }}>
          {title}
        </div>
      )}
      {children && (
        <div style={{ fontFamily: "var(--font-body,'Inter',sans-serif)", fontSize: 14, color: 'var(--ink-soft,#4a5a78)', marginTop: 6, lineHeight: 1.5 }}>
          {children}
        </div>
      )}
    </div>
  );
}
