import React from 'react';

export type BadgeVariant = 'green' | 'blue' | 'success' | 'warning' | 'error' | 'info' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

/** Pílula de metadado/status em JetBrains Mono. */
export function Badge(props: BadgeProps): JSX.Element;
