import { Box, Divider, styled, useMediaQuery, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import qfEthLatam from '../../assets/qf_ethlatam.svg';

import { SectionTitle } from '../Commons/SectionTitle';

const ContainerBox = styled(Box)(({ theme }) => ({
  flex: '1 1 20%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 100%',
  },
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
    <Box sx={{ marginTop: 4 }}>
      <Divider sx={{ borderColor: '#66F5DF' }} />

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
              <a href={org.url}>
                <Image
                  src={org.image}
                  alt={org.alt}
                  width={isMobile ? 250 : 350}
                  height={isMobile ? 100 : 150}
                />
              </a>
            </ContainerBox>
          );
        })}
      </Box>
    </Box>
  );
};
