import { Box, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  BoxGradient,
  colors,
  gradients,
  IconBadge,
  IconCurator,
  IconDecentralized,
  IconEvidence,
} from 'thebadge-ui-library';

const StyledStepBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    rowGap: theme.spacing(2),
    flexWrap: 'wrap',
  },
}));

const StyledStepStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  rowGap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '45%',
  },
}));

const StyledWhyStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
  rowGap: theme.spacing(2),
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  justifyContent: 'center',
}));

const STEPS = [
  {
    title: 'stepOne',
    Icon: IconDecentralized,
  },
  {
    title: 'stepTwo',
    Icon: IconBadge,
  },
  {
    title: 'stepThree',
    Icon: IconEvidence,
  },
  {
    title: 'stepFour',
    Icon: IconCurator,
  },
] as { title: string; Icon: any }[];

export default function WhatsTheBadge() {
  const { t } = useTranslation('landing');

  return (
    <Stack justifyContent="center" sx={{ mt: 10 }}>
      <Typography
        variant="h2"
        component="h2"
        color={colors.white}
        textAlign="center"
      >
        {t('whatIsTheBadge.title')}
      </Typography>
      <StyledStepBox>
        {STEPS.map(({ title, Icon }) => {
          return (
            <StyledStepStack key={title}>
              <Icon color="white" />
              <Typography
                variant="body3"
                component="p"
                color={colors.white}
                textAlign="center"
              >
                {t(`whatIsTheBadge.${title}`)}
              </Typography>
            </StyledStepStack>
          );
        })}
      </StyledStepBox>
      <Box mt={8}>
        <BoxGradient
          sx={{
            marginLeft: 'calc((-100vw + 100%) / 2)',
            marginRight: 'calc((-100vw + 100%) / 2)',
          }}
          gradient={gradients.gradient5}
          shadowColor="rgba(51, 255, 204, 0.3)"
        >
          <StyledWhyStack>
            <Typography
              variant="title1"
              component="h5"
              color={colors.white}
              textAlign="center"
            >
              {t(`whatIsTheBadge.why.title`)}
            </Typography>

            <Typography
              variant="body2"
              component="p"
              paddingX={'10%'}
              color={colors.white}
              textAlign="center"
            >
              {t(`whatIsTheBadge.why.description`)}
            </Typography>
          </StyledWhyStack>
        </BoxGradient>
      </Box>
    </Stack>
  );
}
