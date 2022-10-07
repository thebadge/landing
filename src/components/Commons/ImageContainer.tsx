import { Box, styled } from '@mui/material';

export const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    marginTop: theme.spacing(-6),
  },
}));
