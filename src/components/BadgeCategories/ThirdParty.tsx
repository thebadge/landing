import { Box, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import { colors, fonts, SectionLayout, Stepper } from '@thebadge/ui-library';
import thirdPartyDecoration from '../../assets/thirdparty-decoration.webp';
import StyledFirstLetter from '../Commons/StyledFirstLetter';
import categoriesBackground from '../../assets/categories-background.webp';

export default function ThirdPartyBadge() {
  return (
    <Box>
      <SectionLayout
        backgroundColor={colors.transparent}
        borderColor={colors.green}
        components={[
          {
            component: <TopComponent />,
            options: {
              fitContent: true,
            },
          },
          {
            component: <MiddleComponent />,
            options: {
              withPadding: true,
            },
          },
          {
            component: <BottomComponent />,
            options: {
              sx: {
                m: 2,
              },
            },
          },
        ]}
      />
    </Box>
  );
}

function TopComponent() {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        placeContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          zIndex: '-1',
          height: ' 100%',
          width: '100%',
        }}
        src={categoriesBackground}
        alt="Background decoration"
      />
      <Image
        src={thirdPartyDecoration}
        alt="ThirdParty Badges decoration"
        height={350}
      />
    </Box>
  );
}

const StyledMiddleComponentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  placeContent: 'center',
  textAlign: 'center',
  rowGap: theme.spacing(3),
  marginTop: theme.spacing(2),
  '& > p': {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

function MiddleComponent() {
  const { t } = useTranslation();

  return (
    <StyledMiddleComponentContainer>
      <Typography
        color={colors.white}
        variant="h3"
        component="h4"
        fontWeight={fonts.fontWeightBlack}
        lineHeight="42px"
      >
        {t('badgeCategories.third-party.title')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="div"
        textAlign="left"
      >
        {t('badgeCategories.third-party.description')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="div"
        textAlign="left"
      >
        {t('badgeCategories.third-party.example')}
      </Typography>
    </StyledMiddleComponentContainer>
  );
}

function BottomComponent() {
  const { t } = useTranslation();
  const steps = [0, 1, 2, 3].map((stepNumber, i) => {
    return (
      <Stack key={i}>
        <StyledFirstLetter
          variant="title4"
          firstLetterColor={colors.pink}
          color={colors.black}
          textAlign="left"
        >
          {t(`badgeCategories.third-party.howItWorks.steps.${i}.title`)}
        </StyledFirstLetter>
        <Typography
          variant="body2"
          component="div"
          color={colors.black}
          textAlign="left"
        >
          {t(`badgeCategories.third-party.howItWorks.steps.${i}.description`)}
        </Typography>
      </Stack>
    );
  });

  return (
    <Stepper
      color="pink"
      minHeight={320}
      backgroundColor="white"
      title={
        <Typography
          variant="title3"
          component="div"
          color={colors.pink}
          sx={{ mb: 1 }}
          fontSize="1.1em"
          textAlign="center"
        >
          {t(`badgeCategories.third-party.howItWorks.title`)}
        </Typography>
      }
      steps={steps}
    />
  );
}
