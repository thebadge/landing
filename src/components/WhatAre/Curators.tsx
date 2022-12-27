import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors, Stepper } from 'thebadge-ui-library';
import StyledTypography from '../Commons/StyledFirstLetter';
import StyledContainer from './StyledContainer';

export default function WhatAreCurators() {
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
          {t('whatAreCurators.sectionName')}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.title')}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.description')}
        </Typography>
      </Stack>
      <Box>
        <Stepper
          color="green"
          elements={[0, 1, 2, 3, 4].map((stepNumber, i) => {
            return (
              <Stack key={i}>
                <StyledTypography
                  variant="title4"
                  color={colors.white}
                  firstLeterColor={colors.green}
                  textAlign="left"
                >
                  {t(`whatAreCurators.earn.steps.${i}.title`)}
                </StyledTypography>
                <Typography
                  key="0"
                  variant="body4"
                  component="p"
                  color={colors.white}
                  textAlign="left"
                >
                  {t(`whatAreCurators.earn.steps.${i}.description`)}
                </Typography>
              </Stack>
            );
          })}
          minHeight={280}
          glowTitle={true}
          border={true}
          backgroundColor="transparent"
          title={
            <Typography
              variant="title3"
              component="p"
              color={colors.green}
              sx={{ textShadow: '0 0 0 25px', textTransform: 'none', mb: 1 }}
              textAlign="center"
            >
              {t(`whatAreCurators.earn.title`)}
            </Typography>
          }
        />
      </Box>
    </StyledContainer>
  );
}
