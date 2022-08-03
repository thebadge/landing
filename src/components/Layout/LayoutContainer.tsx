import { Box, styled } from '@mui/material';

import React from 'react';
import { BackgroundGradient } from './BackgroundGradient';
import { Footer } from './Footer';
import { Header } from './Header';
const Content = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
});

type LayoutContainerProps = {
  children: React.ReactElement;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        <Header />
        {children}
        <Footer />
      </Content>
    </div>
  );
};
