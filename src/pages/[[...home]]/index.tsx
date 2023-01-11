import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import BadgeCategoriesContainer from '../../components/BadgeCategories/BadgeCateogriesContainer';

import { Presentation } from '../../components/Presentation';
import WhatsTheBadge from '../../components/WhatsTheBadge';
import { useSetionReferences } from '../../contexts/referencesContex';

const Team = dynamic(() => import('../../components/Team'));
const BackedBy = dynamic(() => import('../../components/BackedBy'));

const WhatAreCurators = dynamic(() => import('../../components/WhatAre/Curators'));
const WhatAreCreators = dynamic(() => import('../../components/WhatAre/Creators'));
const ThirdPartyBadge = dynamic(
  () => import('../../components/BadgeCategories/Community'),
);
const CommunityBadge = dynamic(
  () => import('../../components/BadgeCategories/ThirdParty'),
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
    width: '80%',
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
          <WhatsTheBadge />
        </div>
        <WhatAreCurators />
        <div ref={howItWorksSection}>
          <BadgeCategoriesContainer>
            <CommunityBadge />
            <ThirdPartyBadge />
          </BadgeCategoriesContainer>
        </div>
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
