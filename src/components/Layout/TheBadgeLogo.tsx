import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';
const Logo = dynamic(() => import('../Commons/SVGs/Logo'));

const SvgContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: '70px',
  width: '212px',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
  [theme.breakpoints.down('sm')]: {
    height: '70px',
    width: '212px',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

export const TheBadgeLogo = () => {
  return (
    <LogoContainer>
      <SvgContainer>
        <Logo />
      </SvgContainer>
    </LogoContainer>
  );
};
