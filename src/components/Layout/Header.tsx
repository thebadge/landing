import { useSetionReferences } from '@/src/contexts/referencesContex';
import { Box, styled } from '@mui/material';
import { RefObject } from 'react';
import {
  gradients,
  LogoTheBadgeWithText,
  NavigationHeader,
} from 'thebadge-ui-library';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  background: gradients.gradientBackground,
  // With this the header bacnground and page bacnground has the same match
  backgroundSize: '100vw 100vh',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  paddingLeft: '5%',
  paddingRight: 'calc(5% - 16px)',
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '10%',
    paddingRight: 'calc(10% - 16px)',
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
        }}
        id="logo-container"
      >
        <LogoTheBadgeWithText size={212} />
      </Box>
      <NavigationHeader
        mobileViewMaxWidth={1040}
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
