import React from 'react';

import { Logo } from '@/styles/components/Header';

interface HeaderProps {
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ subTitle }) => {
  return (
    <Logo>
      <h1>Cadastur</h1>
      <span>{subTitle}</span>
    </Logo>
  );
}

export default Header;
