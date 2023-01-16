import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import dynamic from 'next/dynamic';
import { colors, StepperProps } from 'thebadge-ui-library';
import StyledTypography from '../Commons/StyledFirstLetter';
import WhatAreContainer from './WhatAreContainer';

const Stepper = dynamic<StepperProps>(() =>
  import('thebadge-ui-library').then((mod) => mod.Stepper),
);

export default function WhatAreCreators() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const Steps = [0, 1, 2].map((stepNumber, i) => {
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
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t(`whatAreCreators.earn.steps.${i}.description`)}
        </Typography>
      </Stack>
    );
  });

  return (
    <WhatAreContainer>
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
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCreators.description')}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          color={colors.white}
          textAlign="left"
        >
          {t('whatAreCreators.example')}
        </Typography>
      </Stack>
      <Box>
        <Stepper
          color="pink"
          minHeight={isMobile ? 380 : 320}
          glowTitle={true}
          border={true}
          backgroundColor="transparent"
          title={
            <Typography
              variant="title3"
              component="div"
              color={colors.pink}
              sx={{ textShadow: '0 0 0 25px', textTransform: 'none', mb: 2 }}
              textAlign="center"
            >
              {t(`whatAreCreators.earn.title`)}
            </Typography>
          }
        >
          {Steps}
        </Stepper>
      </Box>
    </WhatAreContainer>
  );
}
