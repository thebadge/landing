import { Box, styled } from '@mui/material';
import { DownloadPaperButton } from '../Commons/DownloadPaperButton';
import { GoToAppButton } from '../Commons/GoToAppButton';
import { TheBadgeLogo } from './TheBadgeLogo';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('xl')]: {
    width: '70%',
    maxWidth: '1440px',
  },
  [theme.breakpoints.down('sm')]: {
    flex: 1,
    flexDirection: 'column',
  },
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flex: 1,
    marginTop: theme.spacing(2),
  },
}));

const Header = () => {
  return (
    <HeaderContainer>
      <TheBadgeLogo />
      <ButtonsContainer>
        <DownloadPaperButton />
        <GoToAppButton />
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
