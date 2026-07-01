import React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** light = wordmark azul (fundo claro) · dark = wordmark branco (fundo escuro) */
  theme?: 'light' | 'dark';
  /** Prefixo até a raiz do projeto a partir da página (ex.: "../../"). Padrão "" */
  basePath?: string;
  /** Altura do lockup em px (largura automática). Padrão 32 */
  size?: number;
}

/**
 * Wordmark oficial da ZPE Maranhão (seta bicolor + "ZPE MARANHÃO").
 * @startingPoint section="Marca" subtitle="Wordmark oficial e seta da marca" viewport="700x200"
 */
export function Logo(props: LogoProps): JSX.Element;
