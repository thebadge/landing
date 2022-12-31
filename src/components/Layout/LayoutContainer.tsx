import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import React from 'react';
// import Headroom from 'react-headroom';
import { BackgroundGradient } from './BackgroundGradient';
import Header from './Header';

const Footer = dynamic(() => import('./Footer'));

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .headroom--scrolled': {
    // When header is sticky on scroll, we reduce the size of the padding and the logo
    '& #header-container': {
      paddingTop: theme.spacing(2),
      '& #logo-container': {
        scale: '0.8',
        transformOrigin: 'left center',
      },
    },
  },
}));

type LayoutContainerProps = {
  children: React.ReactElement;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        {
          // </Content><Headro}om
          // </Content>  style}={{
          // </Content>    tra}nsition: 'all .5s cubic-bezier(0.83, 0, 0.17, 1)',
          // </Content>  }}}
          // </Content>>
        }
        <Header />
        {children}
        <Footer />
      </Content>
    </div>
  );
};
