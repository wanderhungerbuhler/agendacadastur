import React, { ButtonHTMLAttributes } from 'react';

import { Container } from '@/styles/components/ButtonNext';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonNext: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

export default ButtonNext;
