import { Box, CardMedia } from '@mui/material';
import { VIDEO_URL } from '@/src/constants';
import React, { useEffect, useRef, useState } from 'react';
import { BackgroundGradient } from '@/src/components/Layout/BackgroundGradient';
import Footer from '@/src/components/Layout/Footer';

export default function Video() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 24,
            p: 2,
          }}
        >
          <CardMedia
            sx={{ width: 350 }}
            component="video"
            controls
            src={VIDEO_URL}
            autoPlay
          />
        </Box>
      )}
    </>
  );
}

Video.getLayout = (children: React.ReactElement) => {
  return (
    <div>
      <BackgroundGradient />
      {children}
      <Footer />
    </div>
  );
};
