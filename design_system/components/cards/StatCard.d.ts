import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Número de impacto (branco) */
  value: React.ReactNode;
  /** Unidade curta (verde) — ha, m, %, bi */
  unit?: React.ReactNode;
  /** Rótulo mono uppercase acima do número */
  label?: React.ReactNode;
  /** Linha de detalhe em verde abaixo do número */
  detail?: React.ReactNode;
  /** blue (abyss, padrão) ou green (canopy radial) */
  tone?: 'blue' | 'green';
}

/** Número de impacto sobre gradient escuro com grão; verde só no detalhe. */
export function StatCard(props: StatCardProps): JSX.Element;
