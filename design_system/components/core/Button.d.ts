import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = verde de ação, secondary = azul outline, ghost = terciário */
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Elemento de ícone à direita (ex.: seta) */
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Botão da ZPE. Verde é ação (primary), azul outline é secundário, ghost é terciário.
 * @startingPoint section="Componentes" subtitle="Botões com variantes e tamanhos" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
