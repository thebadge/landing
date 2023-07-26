import { CustomDivider } from '@/src/components/Commons/Divider';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
import { colors } from '@thebadge/ui-library';

const ContainerBox = styled(Box)(({ theme }) => ({
  flex: '1 1 20%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 100%',
  },
}));

const BoxBackedBy = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
}));

const CustomOrgLink = styled('a')<{ backcolor: string }>(
  ({ theme, backcolor }) => ({
    background: `${backcolor}`,
    padding: '12px 16px 0 16px',
    borderRadius: '12px',
  }),
);

type Organizations = {
  image: string;
  url: string;
  alt: string;
  backColor: string;
};

const ORGS: Organizations[] = [
  {
    image: '/assets/klerosLogo.png',
    url: 'https://kleros.io/',
    alt: 'Kleros',
    backColor: '#4d00b4',
  },
  {
    image: '/assets/qf_ethlatam.svg',
    url: 'https://qf.ethlatam.org/#/?option=3',
    alt: 'Quadratic Founding ETH Latam',
    backColor: '#121212',
  },
];

const BackedBy = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <BoxBackedBy>
      <CustomDivider />
      <Typography
        variant="h2"
        component="h2"
        color={colors.white}
        textAlign="center"
      >
        {t('backedBy.title')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          marginTop: 6,
          columnGap: 2,
          rowGap: 2,
          marginBottom: 12,
        }}
      >
        {ORGS.map((org, i) => {
          return (
            <ContainerBox key={i}>
              <CustomOrgLink href={org.url} backcolor={org.backColor}>
                <img
                  src={org.image}
                  alt={org.alt}
                  width={isMobile ? 250 : 350}
                  height={isMobile ? 100 : 150}
                />
              </CustomOrgLink>
            </ContainerBox>
          );
        })}
      </Box>
    </BoxBackedBy>
  );
};

export default BackedBy;
