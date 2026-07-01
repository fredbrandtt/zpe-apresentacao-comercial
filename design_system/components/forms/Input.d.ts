import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo mono uppercase acima do campo */
  label?: string;
  /** Texto auxiliar abaixo do campo */
  hint?: string;
  /** Mensagem de erro (sobrepõe hint, borda vermelha) */
  error?: string;
}

/** Campo de texto com label mono e foco azul institucional. */
export function Input(props: InputProps): JSX.Element;
