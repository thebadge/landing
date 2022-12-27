import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors, Stepper } from 'thebadge-ui-library';
import StyledTypography from '../Commons/StyledFirstLetter';
import StyledContainer from './StyledContainer';

export default function WhatAreCreators() {
  const { t } = useTranslation('landing');

  return (
    <StyledContainer>
      <Stack rowGap={3}>
        <Typography
          variant="body3"
          component="span"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCreators.sectionName')}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCreators.title')}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCreators.description')}
        </Typography>
      </Stack>
      <Box>
        <Stepper
          color="pink"
          elements={[0, 1, 2, 3].map((stepNumber, i) => {
            return (
              <Stack key={i} sx={{ flex: 1 }}>
                <StyledTypography
                  variant="title4"
                  color={colors.white}
                  firstLetterColor={colors.pink}
                  textAlign="left"
                >
                  {t(`whatAreCreators.earn.steps.${i}.title`)}
                </StyledTypography>
                <Typography
                  key="0"
                  variant="body4"
                  component="p"
                  color={colors.white}
                  textAlign="left"
                >
                  {t(`whatAreCreators.earn.steps.${i}.description`)}
                </Typography>
              </Stack>
            );
          })}
          minHeight={320}
          glowTitle={true}
          border={true}
          backgroundColor="transparent"
          title={
            <Typography
              variant="title3"
              component="p"
              color={colors.pink}
              sx={{ textShadow: '0 0 0 25px', textTransform: 'none', mb: 2 }}
              textAlign="center"
            >
              {t(`whatAreCreators.earn.title`)}
            </Typography>
          }
        />
      </Box>
    </StyledContainer>
  );
}
