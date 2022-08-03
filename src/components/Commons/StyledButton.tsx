import { Box, styled } from '@mui/material';

export const StyledButton = styled(Box)<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    borderColor: '#5BBCAD',
    color: '#5BBCAD',
    textTransform: 'none',
    fontSize: '40px',
    border: '1px solid #5BBCAD',
    borderRadius: '8px',
    padding: theme.spacing(2),
    columnGap: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#5bbcad29',
    },
    cursor: disabled ? 'non-allowed' : 'pointer',
    ...(disabled ? { opacity: '0.7' } : {}),
    [theme.breakpoints.down('md')]: {
      columnGap: theme.spacing(1),
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  }),
);
