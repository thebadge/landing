import { Box, styled } from '@mui/material';
import { LogoTheBadgeWithText, NavigationHeader } from 'thebadge-ui-library';

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
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    maxWidth: '1440px',
  },
  [theme.breakpoints.down('sm')]: {
    flex: 1,
    flexDirection: 'column',
  },
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Box sx={{ flex: 1 }}>
        <LogoTheBadgeWithText size={212} />
      </Box>
      <NavigationHeader
        items={[
          {
            label: 'HOME',
          },
          {
            label: 'HOW IT WORKS',
          },
          {
            label: 'TEAM',
          },
          {
            label: 'PARTNERSHIPS',
          },
          {
            label: 'CONTACT US',
          },
          {
            label: 'FAQ',
          },
        ]}
        callToActionItem={{
          label: 'Open app',
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
