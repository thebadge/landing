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
  },
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
    <HeaderContainer>
      <Box sx={{ flex: 1 }}>
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
