import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rótulo mono uppercase no topo */
  eyebrow?: React.ReactNode;
  /** Título em Barlow semibold azul */
  title?: React.ReactNode;
  /** Corpo (children) em Inter */
  children?: React.ReactNode;
  /** Ativa hover (borda accent + elevação). Padrão true */
  interactive?: boolean;
}

/**
 * Card de superfície clara com borda; hover acende borda verde e eleva.
 * @startingPoint section="Componentes" subtitle="Card claro + stat card escuro" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
