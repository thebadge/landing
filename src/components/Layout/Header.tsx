import { useSetionReferences } from '@/src/contexts/referencesContex';
import { Box, styled } from '@mui/material';
import { RefObject } from 'react';
import { LogoTheBadgeWithText, NavigationHeader } from 'thebadge-ui-library';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  background:
    'radial-gradient(94.86% 21.92% at 3.16% 1.15%, #420756 0%, #190321 61.46%, #000000 100%, #000000 100%)',
  // With this the header bacnground and page bacnground has the same match
  backgroundSize: '100vw 100vh',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  paddingLeft: '10%',
  paddingRight: '10%',
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '5%',
    paddingRight: '5%',
    maxWidth: '1440px',
  },
  [theme.breakpoints.down(1040)]: {
    paddingLeft: theme.spacing(3),
    paddingRight: 0,
  },
  [theme.breakpoints.down('sm')]: {
    flex: 1,
  },
  transition: 'padding-top 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
}));

const Header = () => {
  const {
    homeSection,
    howItWorksSection,
    teamSection,
    partnershipSection,
    contactSection,
  } = useSetionReferences();

  const scrollTo = (sectionRef: RefObject<HTMLDivElement> | null) => {
    if (!sectionRef) return;
    window.scrollTo({
      top: sectionRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <HeaderContainer id="header-container">
      <Box
        sx={{
          flex: 1,
          transition: 'scale 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
        }}
        id="logo-container"
      >
        <LogoTheBadgeWithText size={212} />
      </Box>
      <NavigationHeader
        anchorPosition="left"
        items={[
          {
            label: 'HOME',
            onClick: () => scrollTo(homeSection),
          },
          {
            label: 'HOW IT WORKS',
            onClick: () => scrollTo(howItWorksSection),
          },
          {
            label: 'TEAM',
            onClick: () => scrollTo(teamSection),
          },
          {
            label: 'PARTNERSHIPS',
            onClick: () => scrollTo(partnershipSection),
          },
          {
            label: 'CONTACT US',
            onClick: () => scrollTo(contactSection),
          },
        ]}
        callToActionItem={{
          label: 'Open app',
          disabled: true,
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
