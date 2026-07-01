import React from 'react';

export interface BrandArrowProps extends React.SVGAttributes<SVGElement> {
  /** Largura em px (altura calculada na proporção). Padrão 48 */
  size?: number;
  /** solid = preenchida, outline = só contorno */
  mode?: 'solid' | 'outline';
  /** Cor (CSS). Padrão verde da marca */
  color?: string;
  /** Opacidade 0–1. Em fundos escuros, use outline a ~0.15 */
  opacity?: number;
}

/** Seta/chevron da marca — direção, progresso, exportação. */
export function BrandArrow(props: BrandArrowProps): JSX.Element;
