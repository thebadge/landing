import {
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '@/src/constants';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Link, styled } from '@mui/material';
import dynamic from 'next/dynamic';
import { CustomDivider } from '../Commons/Divider';

const DiscordIcon = dynamic(() => import('@/src/components/Icons/Discord'));
const EmailIcon = dynamic(() => import('@/src/components/Icons/Email'));
const GithubIcon = dynamic(() => import('@/src/components/Icons/Github'));
const MediumIcon = dynamic(() => import('@/src/components/Icons/Medium'));
const TwitterIcon = dynamic(() => import('@/src/components/Icons/Twitter'));

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

const Footer = () => {
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
        <span>©{new Date().getFullYear()} The Badge. All rights reserved.</span>
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
