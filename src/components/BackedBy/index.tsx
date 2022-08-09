import { Box } from '@mui/material';
import { SectionTitle } from '../Commons/SectionTitle';

export const BackedBy = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
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
        {Array.from({ length: 10 }).map((v, i) => {
          return (
            <Box
              sx={{
                backgroundColor: '#D9D9D9',
                height: 150,
                flex: '1 1 20%',
              }}
              key={i}
            />
          );
        })}
      </Box>
    </Box>
  );
};
