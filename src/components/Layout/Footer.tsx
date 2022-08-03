import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, styled } from '@mui/material';

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
        <GitHubIcon />
        <TwitterIcon />
        <TelegramIcon />
      </SocialContainer>
    </FooterContainer>
  );
};
