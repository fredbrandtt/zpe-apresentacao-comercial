import React from 'react';

/**
 * ZPE Maranhão · RippleField
 * Linhas concêntricas finas que irradiam de um canto — motivo gráfico premium
 * (ref. Cinaro/Sinesubs). Metáfora de alcance e conexão. Sutil, decorativo.
 * Em fundos escuros use verde/branco a baixa opacidade; em claros, azul.
 */
export function RippleField({
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
    'top-right': [1000, 0], 'top-left': [0, 0],
    'bottom-right': [1000, 1000], 'bottom-left': [0, 1000], 'center': [500, 500],
  };
  const [cx, cy] = origins[origin] || origins['top-right'];
  const rings = Array.from({ length: count }, (_, i) => radius + i * gap);
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity, ...style }}
      {...rest}
    >
      {rings.map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={strokeWidth} />
      ))}
    </svg>
  );
}
