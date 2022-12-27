import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from 'thebadge-ui-library';

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
  [theme.breakpoints.between(1000, 1200)]: {
    marginLeft: 'calc((-100vw + 100%) / 2)',
    marginRight: 'calc((-100vw + 100%) / 2)',
    padding: theme.spacing(2),
  },
}));

export default function BadgeCategoriesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation('landing');

  return (
    <Box mt={10}>
      <Typography
        color={colors.white}
        variant="h2"
        component="h2"
        fontWeight={900}
        textAlign="center"
      >
        {t('badgesCategories.title')}
      </Typography>
      <StyledContainer>{children}</StyledContainer>
    </Box>
  );
}
