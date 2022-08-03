import { Box, styled } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
}));
