import React from 'react';

import { Container } from '@/styles/components/Main';

const ContainerPage: React.FC = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
}

export default ContainerPage;
