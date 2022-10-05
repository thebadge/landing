import { styled } from '@mui/material';

export const BodyCardBadgeType = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '18px',
  textAlign: 'justify',
  [theme.breakpoints.down('md')]: {
    maxHeight: 'none',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up('xl')]: {
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '120%',
  },
}));
