import { colors, Roadmap } from 'thebadge-ui-library';
import { CustomDivider } from '@/src/components/Commons/Divider';
import { Box, styled, Typography } from '@mui/material';

const BoxRoadmap = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
}));

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
        <Roadmap />
      </Box>      
    </BoxRoadmap>
  );
};

export default RoadmapSection;
