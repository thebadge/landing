import { Box, styled } from '@mui/material';

export const CardBadgeType = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: '1px solid #66F5DF',
  borderRadius: '10px',
  //  filter: "drop-shadow(0px 0px 8px #FFFFFF)",
  padding: '33px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'row',
  maxHeight: '280px',
  maxWidth: '1200px',
  marginBottom: '5%',
  boxShadow: '0 0 8px #f6f3f382',
  [theme.breakpoints.down('md')]: {
    maxHeight: 'none',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '450px',
    flexDirection: 'column-reverse',
    marginTop: theme.spacing(5),
  },
}));
