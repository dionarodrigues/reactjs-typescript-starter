import React from 'react';

import * as S from './styles';

export interface ButtonProps {
  label: string;
  path: string;
}

export const Button: React.FC<ButtonProps> = ({ label, path }: ButtonProps) => {
  return <S.Button to={path}>{label}</S.Button>;
};

export default Button;
