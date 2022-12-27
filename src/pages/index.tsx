import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import BadgeCategoriesContainer from '../components/BadgeCategories/BadgeCateogiresContainer';
import { Presentation } from '../components/Presentation';
import { useSetionReferences } from '../contexts/referencesContex';

const Team = dynamic(() => import('../components/Team'));
const BackedBy = dynamic(() => import('../components/BackedBy'));
const WhatsTheBadge = dynamic(() => import('../components/WhatsTheBadge'));
const WhatAreCurators = dynamic(() => import('../components/WhatAre/Curators'));
const WhatAreCreators = dynamic(() => import('../components/WhatAre/Creators'));

const CommunityBadge = dynamic(
  () => import('../components/BadgeCategories/Community'),
);
const ThirdPartyBadge = dynamic(
  () => import('../components/BadgeCategories/ThridParty'),
);

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
    maxWidth: '1440px',
  },
}));

export default function Home() {
  const { homeSection, howItWorksSection, teamSection, partnershipSection } =
    useSetionReferences();

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <MainContainer>
        <div ref={homeSection}>
          <Presentation />
        </div>
        <WhatsTheBadge />
        <div ref={howItWorksSection}>
          <WhatAreCurators />
        </div>
        <BadgeCategoriesContainer>
          <CommunityBadge />
          <ThirdPartyBadge />
        </BadgeCategoriesContainer>
        <WhatAreCreators />
        <div ref={teamSection}>
          <Team />
        </div>
        <div ref={partnershipSection}>
          <BackedBy />
        </div>
      </MainContainer>
    </Box>
  );
}
