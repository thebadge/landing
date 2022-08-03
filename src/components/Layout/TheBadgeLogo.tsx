import { Box, styled } from '@mui/material';

const LogoSvg = styled(Box)(({ theme }) => ({
  backgroundPositionY: 'center',
  backgroundPositionX: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(./logo.svg)`,
  position: 'relative',
  height: '70px',
  width: '212px',
  zIndex: 1,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

export const TheBadgeLogo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
    </LogoContainer>
  );
};
