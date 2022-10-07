import DiscordIcon from '@/src/components/Icons/Discord';
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
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Link, styled } from '@mui/material';
import { CustomDivider } from '../Commons/Divider';

export const FooterContainer = styled(Box)({
  position: 'relative',
  bottom: 0,
  padding: '2%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.58)',
});

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

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <FooterContainer>
      <SocialContainer>
        <TwitterIcon link={TWITTER_URL} />
        <GithubIcon link={GITHUB_URL} />
        <MediumIcon link={MEDIUM_URL} />
        <EmailIcon link={EMAIL_URL} />
        <DiscordIcon link={DISCORD_URL} />
      </SocialContainer>
      <CustomDivider sx={{ mx: '25%', marginTop: 2 }} />
      <LegalContainer>
        <span>©{new Date().getFullYear()} The Badge</span>
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
