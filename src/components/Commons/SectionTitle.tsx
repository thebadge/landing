import { styled, Typography } from '@mui/material';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  fontWeight: '800',
  fontSize: '50px',
  textAlign: 'center',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '40px',
  },
}));
