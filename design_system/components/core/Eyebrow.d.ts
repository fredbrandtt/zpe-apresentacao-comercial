import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** green (padrão), blue, muted, light (sobre fundo escuro) */
  tone?: 'green' | 'blue' | 'muted' | 'light';
  children?: React.ReactNode;
}

/** Rótulo de seção monoespaçado, uppercase, com tracking largo. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
