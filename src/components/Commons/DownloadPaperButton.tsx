import { styled, Typography } from '@mui/material';
import { StyledButton } from './StyledButton';
import { DownloadIcon } from './SVGs/DownloadIcon';

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

const StyledDownloadIcon = styled(DownloadIcon)(({ theme }) => ({
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

export const DownloadPaperButton = () => {
  const url =
    'https://drive.google.com/file/d/1Bi0_vkyN8UuyJAfVT8OCc7qFVvTnO0yP/view?usp=sharing';
  return (
    <StyledButton onClick={() => window.open(url, '_blank')}>
      <StyledDownloadIcon />
      <DownloadButtonLabel>{`White Paper`}</DownloadButtonLabel>
    </StyledButton>
  );
};
