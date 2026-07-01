import React from 'react';

/**
 * ZPE Maranhão · Logo — wordmark oficial (seta + "ZPE MARANHÃO").
 * theme="light" → wordmark azul (logo_fundo_azul) sobre fundos claros.
 * theme="dark"  → wordmark branco (logo_fundo_branco) sobre fundos escuros/azuis.
 * O símbolo (seta) é sempre o bicolor verde da marca.
 *
 * basePath: prefixo até a raiz do projeto a partir da página que usa o componente
 * (ex.: "../../" se a página está dois níveis abaixo da raiz). Padrão "".
 */
export function Logo({ theme = 'light', basePath = '', size = 32, style, ...rest }) {
  const file = theme === 'dark' ? 'logo_fundo_branco.svg' : 'logo_fundo_azul.svg';
  return (
    <img
      src={`${basePath}assets/brand/${file}`}
      alt="ZPE Maranhão"
      height={size}
      style={{ display: 'block', height: size, width: 'auto', ...style }}
      {...rest}
    />
  );
}
