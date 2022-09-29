import { Box, styled } from '@mui/material';
import svg1 from '../assets/certif_1.svg';
import svg2 from '../assets/certif_2.svg';
import svg3 from '../assets/certif_3.svg';

import adornmentCert from '../assets/cert.svg';
import adornmentKleros from '../assets/klerosCert.svg';
import adornmentGraph from '../assets/theGraphCert.svg';

import { BadgeTypeDescription } from '../components/CardType';

import { BadgeSwipper } from '../components/Commons/BadgeSwiper';
import { Paragraph } from '../components/Commons/Paragraph';
import { SectionTitle } from '../components/Commons/SectionTitle';
import { TheBadgeSubTitle } from '../components/Commons/Subtitle';
import { HexagonalDecoration } from '../components/Commons/SVGs/HexagonalDecoration';
import { TheBadgeTitle } from '../components/Commons/Title';

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

const BoxBadgeTypes = styled(Box)({
  marginTop: '10%',
  marginBottom: '10%',
  padding: '5%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: 'rgba(0, 0, 0, 0.58)',
  borderRadius: '10px',
});

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
              <TheBadgeTitle>The Badge,</TheBadgeTitle>
              <TheBadgeSubTitle>
                Information certification <br /> & profile identity
              </TheBadgeSubTitle>
            </Box>
            <Paragraph>
              The Badge is a decentralized certification platform built on
              Ethereum that allows tokenizing on any piece of information coming
              either on-chain or off-chain under the concept of badges. These
              badges will create an on chain identity by being issued as
              non-transferable and verifiable NFTs.
            </Paragraph>
          </Box>
          <Box sx={{ flex: 1, alignItems: 'center', display: 'flex' }}>
            <BadgeSwipper />
          </Box>
        </TitleAndSwiperContainer>
        <BoxBadgeTypes>
          <SectionTitle>Types of badges</SectionTitle>

          <BadgeTypeDescription
            tittle={'On-chain \n Badges'}
            body={`Are badges generated by querying historical events on the blockchain verified by The Graph. Examples of on-chain data are, liquidity providing, DAO voting, large holdings, liquidation events, etc.`}
            image={svg1}
            adornment={adornmentGraph}
          />

          <BadgeTypeDescription
            tittle={'Off-chain \n Badges'}
            body={`Are badges tokenizing real world information. It could be diplomas, passports, social media accounts, etc. User requesting these badges need to submit evidence that will be verified by Kleros's court`}
            image={svg2}
            adornment={adornmentKleros}
          />

          <BadgeTypeDescription
            tittle={'Third-party \n Badges'}
            body={`Are badges generated by a public or private entity. Entities that are willing to generate private badges will need to apply and be allowed before they can start emitting badges.`}
            image={svg3}
            adornment={adornmentCert}
          />
        </BoxBadgeTypes>
      </MainContainer>
    </Box>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // Used to generate static page
  }
}
