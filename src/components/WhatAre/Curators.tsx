import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import dynamic from 'next/dynamic';
import { colors, StepperProps } from 'thebadge-ui-library';
import StyledTypography from '../Commons/StyledFirstLetter';
import WhatAreContainer from './WhatAreContainer';

const Stepper = dynamic<StepperProps>(() =>
  import('thebadge-ui-library').then((m) => m.Stepper),
);

export default function WhatAreCurators() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <WhatAreContainer>
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
        <Typography
          variant="body2"
          component="p"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCurators.example')}
        </Typography>
      </Stack>
      <Stepper
        color="green"
        elements={[0, 1, 2, 3].map((stepNumber, i) => {
          return (
            <Stack key={i}>
              <StyledTypography
                variant="title4"
                color={colors.white}
                firstLetterColor={colors.green}
                textAlign="left"
              >
                {t(`whatAreCurators.earn.steps.${i}.title`)}
              </StyledTypography>
              <Typography
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
        minHeight={isMobile ? 400 : 320}
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
    </WhatAreContainer>
  );
}
