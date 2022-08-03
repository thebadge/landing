import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { DownloadPaperButton } from '../Commons/DownloadPaperButton';
import { BackgroundGradient } from './BackgroundGradient';
import { TheBadgeLogo } from './TheBadgeLogo';
import { Footer } from '../Footer';
import { HeaderContainer } from '../Commons/HeaderContainer';

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
        <HeaderContainer>
          <TheBadgeLogo />
          <DownloadPaperButton />
        </HeaderContainer>
        {children}
        <Footer>
          <Typography>Social Media</Typography>
        </Footer>
      </Content>
    </div>
  );
};
