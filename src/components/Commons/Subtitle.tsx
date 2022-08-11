import { styled, Typography } from '@mui/material';

export const TheBadgeSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: '700',
  fontSize: '64px',
  lineHeight: '85px',
  textShadow: '6px 4px 4px rgba(0, 0, 0, 0.5)',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '32px',
    lineHeight: '150%',
  },
}));
