import React from 'react';

export interface ArrowImageProps extends React.SVGAttributes<SVGElement> {
  /** URL da imagem a recortar dentro da seta. Sem src, usa o gradient da marca */
  src?: string;
  /** Largura em px (altura na proporção da seta). Padrão 320 */
  size?: number;
  /** Gradient quando não há imagem: blue (Abyss), blue-bright, green (Canopy) */
  tone?: 'blue' | 'blue-bright' | 'green';
  /** Aplica grading azul sobre a foto. Padrão true */
  tint?: boolean;
}

/** Fotografia (ou gradient) recortada dentro da seta da marca — via clipPath SVG. */
export function ArrowImage(props: ArrowImageProps): JSX.Element;
