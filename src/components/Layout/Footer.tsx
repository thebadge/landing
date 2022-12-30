import { IconDiscord } from 'thebadge-ui-library';
import EmailIcon from '@/src/components/Icons/Email';
import GithubIcon from '@/src/components/Icons/Github';
import MediumIcon from '@/src/components/Icons/Medium';
import TwitterIcon from '@/src/components/Icons/Twitter';
import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '@/src/constants';
import { useSetionReferences } from '@/src/contexts/referencesContex';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Link, styled } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

export const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  bottom: 0,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.58)',
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: theme.spacing(2),
}));

export const LegalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: theme.spacing(2),
  color: '#FFF',
  '& a': {
    color: '#FFF',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    rowGap: theme.spacing(1),
  },
}));

const Footer = () => {
  const isMobile = useIsMobile();
  const { contactSection } = useSetionReferences();
  const { t } = useTranslation();

  return (
    <FooterContainer ref={contactSection}>
      <SocialContainer>
        <TwitterIcon link={TWITTER_URL} />
        <GithubIcon link={GITHUB_URL} />
        <MediumIcon link={MEDIUM_URL} />
        <EmailIcon link={EMAIL_URL} />
        <IconDiscord color="white" link={DISCORD_URL} />
      </SocialContainer>
      <LegalContainer sx={{ marginTop: 2 }}>
        <span>
          ©{new Date().getFullYear()} {t('footer.copyright')}
        </span>
        <Box sx={{ columnGap: 2, display: 'none' }}>
          {!isMobile && <span>|</span>}
          <Link target="_blank">Terms</Link>
          <span>|</span>
          <Link target="_blank">Privacy</Link>
          <span>|</span>
          <Link target="_blank">Licenses</Link>
          <span>|</span>
          <Link target="_blank">Cookie Policy</Link>
        </Box>
      </LegalContainer>
    </FooterContainer>
  );
};

export default Footer;
