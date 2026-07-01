import React from 'react';

export type RippleOrigin = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';

export interface RippleFieldProps extends React.SVGAttributes<SVGElement> {
  /** Canto de onde as linhas irradiam. Padrão top-right */
  origin?: RippleOrigin;
  /** Número de anéis. Padrão 8 */
  count?: number;
  /** Espaçamento entre anéis (unidades de viewBox 1000). Padrão 90 */
  gap?: number;
  /** Raio do primeiro anel. Padrão 120 */
  radius?: number;
  /** Cor do traço (CSS). Padrão verde da marca */
  color?: string;
  strokeWidth?: number;
  /** Opacidade do conjunto 0–1. Padrão 0.5 */
  opacity?: number;
}

/** Linhas concêntricas finas irradiando de um canto — motivo de alcance/conexão. */
export function RippleField(props: RippleFieldProps): JSX.Element;
