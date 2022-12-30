import { Box, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import { colors, fonts, SectionLayout, Stepper } from 'thebadge-ui-library';
import thirdPartyDecoration from '../../assets/thirdparty-decoration.webp';
import StyledFirstLetter from '../Commons/StyledFirstLetter';

const StyledSectionLayout = styled(SectionLayout)(({}) => ({
  maxWidth: 'fit-content',
}));

export default function ThirdPartyBadge() {
  return (
    <Box>
      <StyledSectionLayout
        topComponent={<TopComponent />}
        middleComponent={<MiddleComponent />}
        bottomComponent={<BottomComponent />}
        borderColor="green"
        backgroundColor="transparent"
      />
    </Box>
  );
}

const TopComponent = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        placeContent: 'center',
        alignItems: 'center',
        background:
          'url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)',
      }}
    >
      <Image
        src={thirdPartyDecoration}
        alt="ThirdParty Badges decoration"
        height={350}
      />
    </Box>
  );
};

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

const MiddleComponent = () => {
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
        component="p"
        textAlign="left"
      >
        {t('badgeCategories.third-party.description')}
      </Typography>
      <Typography
        color={colors.white}
        variant="body2"
        component="p"
        textAlign="left"
      >
        {t('badgeCategories.third-party.example')}
      </Typography>
    </StyledMiddleComponentContainer>
  );
};

const BottomComponent = () => {
  const { t } = useTranslation();

  return (
    <Stepper
      color="pink"
      elements={[0, 1, 2, 3].map((stepNumber, i) => {
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
              variant="body4"
              component="p"
              color={colors.black}
              textAlign="left"
            >
              {t(
                `badgeCategories.third-party.howItWorks.steps.${i}.description`,
              )}
            </Typography>
          </Stack>
        );
      })}
      minHeight={320}
      backgroundColor="white"
      title={
        <Typography
          variant="title3"
          component="p"
          color={colors.pink}
          sx={{ mb: 1 }}
          fontSize="1.1em"
          textAlign="center"
        >
          {t(`badgeCategories.third-party.howItWorks.title`)}
        </Typography>
      }
    />
  );
};
