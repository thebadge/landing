import { colors, Roadmap, RoadmapItem } from 'thebadge-ui-library';
import { CustomDivider } from '@/src/components/Commons/Divider';
import { Box, styled, Typography } from '@mui/material';

const BoxRoadmap = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

const roadmapElements: RoadmapItem[] = [
  {
    numberTitle: '01',
    quarterNumber: 'Q1 2023',
    quarterTitle: 'Certification Platform Development',
    quarterDescription:
      'Develop core functionalities of the platform, including creation, minting, and curation processes.',
    quarterDone: true,
  },
  {
    numberTitle: '02',
    quarterNumber: 'Q2 2023',
    quarterTitle: 'Beta Launch and Marketing Campaign',
    quarterDescription:
      'Start the beta testing program and marketing pre-launch campaign, with incentives for early adopters.',
  },
  {
    numberTitle: '03',
    quarterNumber: 'Q3 2023',
    quarterTitle: 'Going Live',
    quarterDescription: 'We will be releasing our platform.',
  },
  {
    numberTitle: '04',
    quarterNumber: 'Q4 2023',
    quarterTitle: 'Third-Party',
    quarterDescription:
      'Develop and release the third-party creators functionality for B2B partners.',
  },
  {
    numberTitle: '05',
    quarterNumber: '2024',
    quarterTitle: 'Security Layer and More',
    quarterDescription: 'Integrate private evidence and ZKBadges.',
  },
];

const RoadmapSection = () => {
  return (
    <BoxRoadmap>
      <CustomDivider />
      <Typography
        variant="h2"
        component="h3"
        textAlign="center"
        color={colors.white}
      >
        ROADMAP
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          columnGap: 3,
          rowGap: 8,
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        <Roadmap elements={roadmapElements} />
      </Box>
    </BoxRoadmap>
  );
};

export default RoadmapSection;
