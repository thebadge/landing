import { styled, Typography } from '@mui/material';

export const Paragraph = styled(Typography)(({ theme }) => ({
  letterSpacing: '0em',
  textAlign: 'left',
  color: theme.palette.common.white,
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '28px',
  margin: 0,
  marginTop: theme.spacing(2),
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '65%',
    fontSize: '24px',
    lineHeight: '120%',
  },
}));
