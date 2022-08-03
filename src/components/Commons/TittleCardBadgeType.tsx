import { styled, Typography } from '@mui/material';

export const TittleCardBadgeType = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.common.white,
  fontStyle: 'normal',
  fontWeight: '900',
  fontSize: '32px',
  lineHeight: '32.75px',
  whiteSpace: 'pre-line',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('xl')]: {
    fontWeight: '800',
    fontSize: '40px',
    lineHeight: '120%',
  },
}));
