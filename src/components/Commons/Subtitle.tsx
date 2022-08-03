import { styled, Typography } from '@mui/material';

export const TheBadgeSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: '700',
  fontSize: '64px',
  lineHeight: '85px',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '32px',
    lineHeight: '150%',
  },
}));
