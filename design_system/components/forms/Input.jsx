import React from 'react';

/**
 * ZPE Maranhão · Input
 * Campo de formulário com label mono e foco azul.
 */
export function Input({ label, hint, error, id, style, ...rest }) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error
    ? 'var(--error, #d03238)'
    : focus
      ? 'var(--blue, #244582)'
      : 'var(--line-strong, #cdd5e4)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 11, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-soft,#4a5a78)' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
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
          transition: 'border-color var(--dur-fast,.18s) var(--ease,ease), box-shadow var(--dur-fast,.18s) var(--ease,ease)',
        }}
        {...rest}
      />
      {(hint || error) && (
        <div style={{ fontFamily: "var(--font-body,'Inter',sans-serif)", fontSize: 12, color: error ? 'var(--error,#d03238)' : 'var(--ink-mute,#7a87a0)' }}>
          {error || hint}
        </div>
      )}
    </div>
  );
}
