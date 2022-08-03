import { Box, styled } from '@mui/material';

const Background = styled(Box)({
  background:
    'linear-gradient(154.96deg, #0B3F33 9.89%, #369485 54.65%, #900D90 100.15%)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  position: 'fixed',
  /* z-index usage is up to you.. although there is no need of using it because the default stack context will work. */
  zIndex: -1, // this is optional
});
export const BackgroundGradient = () => {
  return <Background />;
};
