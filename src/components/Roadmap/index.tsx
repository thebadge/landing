import { colors, Roadmap, RoadmapItem } from '@thebadge/ui-library';
import { CustomDivider } from '@/src/components/Commons/Divider';
import { Box, styled, Typography } from '@mui/material';

const BoxRoadmap = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

const roadmapElements: RoadmapItem[] = [
  {
    numberTitle: '01',
    quarterNumber: 'Q1 2024',
    quarterTitle: 'Beta launch on mainnet and support for existing partners',
    quarterDescription:
      'Platform release on mainnet.',
    quarterDone: false,
  },
  {
    numberTitle: '02',
    quarterNumber: 'Q2 2024',
    quarterTitle: 'Developing additional partnerships and sdk',
    quarterDescription:
      'Reach out to potential partners and development of SDK for easy integration with customers.',
  },
  {
    numberTitle: '03',
    quarterNumber: 'Q3 2024',
    quarterTitle: 'Multichain Badges',
    quarterDescription: 'Supporting badge minting on multiple chains.',
  },
  {
    numberTitle: '04',
    quarterNumber: 'Q4 2024',
    quarterTitle: 'AI Integration',
    quarterDescription:
      'Badge curation with AI assistance.',
  },
  {
    numberTitle: '05',
    quarterNumber: 'Q1 2025',
    quarterTitle: 'ZK badges',
    quarterDescription: 'Zero Knowledge feature integration to preserve user\'s privacy.',
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
          '.roadmap__year:first-of-type': {
            marginLeft: '-30px'
          },
        }}
      >
        <Roadmap elements={roadmapElements} />
      </Box>
    </BoxRoadmap>
  );
};

export default RoadmapSection;
