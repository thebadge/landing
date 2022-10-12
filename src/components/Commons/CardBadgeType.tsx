import { Box, styled } from '@mui/material';

export const CardBadgeType = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxHeight: '280px',
  maxWidth: '1200px',
  [theme.breakpoints.down('md')]: {
    maxHeight: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '450px',
    flexDirection: 'column-reverse',
  },
}));

export const CardBadgeContainer = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  border: '1px solid #66F5DF',
  borderRadius: '10px',
  //  filter: "drop-shadow(0px 0px 8px #FFFFFF)",
  paddingTop: '33px',
  paddingBottom: '33px',
  paddingLeft: '33px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '5%',
  boxShadow: '0 0 8px #f6f3f382',
  [theme.breakpoints.down('md')]: {
    maxHeight: 'none',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(5),
    padding: '0',
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}));
