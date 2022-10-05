import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import qfEthLatam from '../../assets/qf_ethlatam.svg';

import { SectionTitle } from '../Commons/SectionTitle';
import { CustomDivider } from '@/src/components/Commons/Divider';

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
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const CustomOrgLink = styled('a')(({ theme }) => ({
  background: '#121212',
  padding: '12px 16px 0 16px',
  borderRadius: '12px',
}));

type Organizations = {
  image: string | StaticImageData;
  url: string;
  alt: string;
};

const ORGS: Organizations[] = [
  /* {
    image: klerosLogo,
    url: 'https://kleros.io/',
  }, */
  {
    image: qfEthLatam,
    url: 'https://qf.ethlatam.org/#/?option=3',
    alt: 'Quadratic Founding Eth Latam',
  },
];

export const BackedBy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BoxBackedBy>
      <CustomDivider />
      <SectionTitle>Backed By</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 3,
          marginBottom: 4,
        }}
      >
        {ORGS.map((org, i) => {
          return (
            <ContainerBox key={i}>
              <CustomOrgLink href={org.url}>
                <Image
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
