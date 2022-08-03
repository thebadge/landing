import { styled, Typography } from '@mui/material';

export const TheBadgeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: '700',
  fontSize: '100px',
  textShadow: '6px 4px 4px rgba(0, 0, 0, 0.5)',
  [theme.breakpoints.down('md')]: {
    fontSize: '64px',
  },
}));
