import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container type="submit" {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
