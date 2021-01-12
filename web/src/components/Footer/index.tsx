import React from 'react';

import { Container } from '@/styles/components/Footer';

const Footer: React.FC = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
}

export default Footer;
