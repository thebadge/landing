import { useSetionReferences } from '@/src/contexts/referencesContex';
import { ConstructionOutlined } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { RefObject } from 'react';
import {
  gradients,
  LogoTheBadgeWithText,
  NavigationHeader,
} from 'thebadge-ui-library';
import LanguageSwitchLink from '../TranslationUtils/LanguageSwitchLink';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  background: gradients.gradientBackgroundDark,
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

  const { t } = useTranslation();

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
        <Box sx={{ color: 'white.light' }}>
          <LanguageSwitchLink locale="en" />
          {'|'}
          <LanguageSwitchLink locale="es" />
          {'|'}
          <LanguageSwitchLink locale="de" />
        </Box>
      </Box>
      <NavigationHeader
        mobileViewMaxWidth={1040}
        anchorPosition="left"
        items={[
          {
            label: t('header.home'),
            onClick: () => scrollTo(homeSection),
          },
          {
            label: t('header.howItWorks'),
            onClick: () => scrollTo(howItWorksSection),
          },
          {
            label: t('header.team'),
            onClick: () => scrollTo(teamSection),
          },
          {
            label: t('header.partnerships'),
            onClick: () => scrollTo(partnershipSection),
          },
          {
            label: t('header.contactUs'),
            onClick: () => scrollTo(contactSection),
          },
        ]}
        callToActionItem={{
          label: t('header.goToAppButton.label'),
          disabled: true,
          icon: <ConstructionOutlined />,
          tooltip: t('header.goToAppButton.tooltip'),
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
