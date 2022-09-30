import { Box, styled } from '@mui/material';
import TwitterIcon from '@/src/components/Icons/Twitter';
import GithubIcon from '@/src/components/Icons/Github';
import MediumIcon from '@/src/components/Icons/Medium';
import EmailIcon from '@/src/components/Icons/Email';
import DiscordIcon from '@/src/components/Icons/Discord';
import {
  TWITTER_URL,
  DISCORD_URL,
  EMAIL_URL,
  GITHUB_URL,
  MEDIUM_URL,
} from '@/src/constants';

export const FooterContainer = styled(Box)({
  position: 'relative',
  bottom: 0,
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.58)',
  height: 100,
});

export const SocialContainer = styled(Box)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: theme.spacing(2),
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <TwitterIcon link={TWITTER_URL} />
        <GithubIcon link={GITHUB_URL} />
        <MediumIcon link={MEDIUM_URL} />
        <EmailIcon link={EMAIL_URL} />
        <DiscordIcon link={DISCORD_URL} />
      </SocialContainer>
    </FooterContainer>
  );
};
