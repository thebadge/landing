import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import React from 'react';
import Headroom from 'react-headroom';
import { BackgroundGradient } from './BackgroundGradient';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

const Content = styled(Box)({
  position: 'relative',
});

type LayoutContainerProps = {
  children: React.ReactElement;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        <Headroom
          style={{
            transition: 'all .5s cubic-bezier(0.83, 0, 0.17, 1)',
          }}
        >
          <Header />
        </Headroom>
        {children}
        <Footer />
      </Content>
    </div>
  );
};
