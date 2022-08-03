import { styled, Typography } from '@mui/material';
import { StyledButton } from './StyledButton';
import { ConstructionIcon } from './SVGs/ConstructionIcon';

const DownloadButtonLabel = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre-line',
  fontWeight: '800',
  fontSize: '18px',
  lineHeight: '17px',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    fontWeight: '700',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    margin: 0,
  },
}));

const StyledDownloadIcon = styled(ConstructionIcon)(({ theme }) => ({
  width: 50,
  height: 50,
  [theme.breakpoints.down('md')]: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
  },
}));

export const GoToAppButton = () => {
  return (
    <StyledButton disabled={true}>
      <StyledDownloadIcon />
      <DownloadButtonLabel>{`Go to App`}</DownloadButtonLabel>
    </StyledButton>
  );
};
