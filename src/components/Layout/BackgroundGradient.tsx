import { Box, styled } from '@mui/material';

const Background = styled(Box)({
  background:
    'radial-gradient(94.86% 21.92% at 3.16% 1.15%, #420756 0%, #190321 61.46%, #000000 100%, #000000 100%)',
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
