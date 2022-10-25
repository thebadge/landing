import { Box, styled } from '@mui/material';

import { BackedBy } from '../components/BackedBy';
import { OffchainCard } from '../components/CardType/OffChainCard';
import { ThirdPartyCard } from '../components/CardType/ThirdPartyCard';
import { BadgeSwipper } from '../components/Commons/BadgeSwiper';
import { Paragraph } from '../components/Commons/Paragraph';
import { SectionTitle } from '../components/Commons/SectionTitle';
import { TheBadgeSubTitle } from '../components/Commons/Subtitle';
import { HexagonalDecoration } from '../components/Commons/SVGs/HexagonalDecoration';
import { Team } from '../components/Team';

const MainContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
}));

const SvgDecoration = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  position: 'absolute',
  height: '10%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: -1,
  [theme.breakpoints.down('sm')]: {
    left: '50%',
    transform: 'scale(1.3) translateX(-50%)',
  },
}));

const BoxBadgeTypes = styled(Box)(({ theme }) => ({
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: 'rgba(0, 0, 0, 0.58)',
  borderRadius: '10px',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const TitleAndSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2),
    flexDirection: 'column',
  },
}));

export default function Home() {
  return (
    <Box>
      <SvgDecoration>
        <HexagonalDecoration />
      </SvgDecoration>
      <MainContainer>
        <TitleAndSwiperContainer>
          <Box sx={{ flex: 2 }}>
            <Box>
              <TheBadgeSubTitle as="h1">
                Information certification <br /> & profile identity
              </TheBadgeSubTitle>
            </Box>
            <Paragraph>
              The Badge is a decentralized certification platform built on
              Ethereum that allows tokenizing any piece of information from the
              real world under the concept of badges. These badges will create
              an on-chain identity by being issued as non-transferable and
              verifiable NFTs.
            </Paragraph>
          </Box>
          <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
            <BadgeSwipper />
          </Box>
        </TitleAndSwiperContainer>
        <BoxBadgeTypes>
          <SectionTitle>Types of badges</SectionTitle>
          <OffchainCard />
          <ThirdPartyCard />
        </BoxBadgeTypes>
        <Team />
        <BackedBy />
      </MainContainer>
    </Box>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // Used to generate static page
  };
}
