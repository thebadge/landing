import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'next-export-i18n';
import { colors } from '@thebadge/ui-library';

const StyledContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: ' flex',
  columnGap: theme.spacing(3),
  '& > div': {
    flex: 1,
    display: 'flex',
  },
  [theme.breakpoints.down(1000)]: {
    rowGap: theme.spacing(6),
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function BadgeCategoriesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <Box mt={12}>
      <Typography
        color={colors.white}
        variant="h2"
        component="h2"
        textAlign="center"
      >
        {t('badgeCategories.title')}
      </Typography>
      <StyledContainer>{children}</StyledContainer>
    </Box>
  );
}
