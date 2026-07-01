import React from 'react';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número do passo (mostra ponto + linha + número, estilo processo) */
  number?: React.ReactNode;
  /** Título em Barlow semibold */
  title?: React.ReactNode;
  /** Corpo (children) */
  children?: React.ReactNode;
  /** Variante com tint verde da marca em vez de branco translúcido */
  accent?: boolean;
}

/**
 * Painel translúcido (glass) com borda fina e blur, sobre profundidade azul.
 * @startingPoint section="Componentes" subtitle="Cards de processo translúcidos sobre gradient" viewport="700x300"
 */
export function GlassPanel(props: GlassPanelProps): JSX.Element;
