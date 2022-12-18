import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import React from 'react';
import { BackgroundGradient } from './BackgroundGradient';
import { Mulish } from '@next/font/google';

const mulishFont = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

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
    <div className={mulishFont.className}>
      <BackgroundGradient />
      <Content>
        <Header />
        {children}
        <Footer />
      </Content>
    </div>
  );
};
