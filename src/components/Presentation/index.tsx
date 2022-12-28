import { DISCORD_URL, PAPER_URL } from '@/src/constants';
import { useGoogleAnalyticsBtn } from '@/src/hooks/useGoogleAnalytics';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { colors, IconDiscord } from 'thebadge-ui-library';
import { BadgesPreview } from '../Commons/BadgesPreview';

const TitleAndSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    flexDirection: 'column',
    rowGap: theme.spacing(6),
  },
}));

const StyledButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: '9px 26px 9px 26px',
}));

export const Presentation = () => {
  const { t } = useTranslation();
  const googleAnalyticsBtn = useGoogleAnalyticsBtn();

  const openPaperHandler = () => {
    window.open(PAPER_URL, '_blank');
    googleAnalyticsBtn('Read Paper');
  };

  const openDiscordInvite = () => {
    window.open(DISCORD_URL, '_blank');
  };

  return (
    <TitleAndSwiperContainer>
      <Stack justifyContent="center" sx={{ flex: 2 }}>
        <Box mb={2}>
          <Typography
            variant="h1"
            component="h1"
            color={colors.white}
            sx={{ wordWrap: 'break-word' }}
          >
            {t('presentation.title')}
          </Typography>
        </Box>
        <Typography variant="body1" component="p" color={colors.white}>
          {t('presentation.description')}
        </Typography>
        <Box sx={{ display: 'flex', flex: 1, mt: 4, columnGap: 2 }}>
          <StyledButton variant="contained" onClick={openPaperHandler}>
            {t('presentation.buttons.whitepaper')}
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={openDiscordInvite}
            endIcon={<IconDiscord color="white" />}
          >
            {t('presentation.buttons.community')}
          </StyledButton>
        </Box>
      </Stack>
      <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
        <BadgesPreview />
      </Box>
    </TitleAndSwiperContainer>
  );
};
