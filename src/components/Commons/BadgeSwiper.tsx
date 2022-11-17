import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import amlTest from '../../assets/aml-test.png';
import howeyTest from '../../assets/howey-test.png';
import isoCertif from '../../assets/iso-cert.png';

const CARDS = [isoCertif, howeyTest, amlTest];

const CarouserContainerInner = styled(Box)({
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  perspective: '500px',
  height: '30rem',
  alignItems: 'center',
});

export const Item = styled(Box)<{
  size: number;
  order: number;
}>(({ size, order }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: `${size}rem`,
  height: `${size * (order == 1 ? 1.4 : 1.2)}rem`,
  position: 'absolute',
  backgroundColor: 'transparent',
  transition: '.4s ease',
  borderRadius: '8px',
  ...(order == 0
    ? {
        /* Left slide*/
        left: '20%',
        transform: 'translate(-50%) scale(0.8, 0.8)',
        zIndex: 1,
        opacity: 0.9,
      }
    : {}),
  ...(order === 1
    ? {
        /* Middle slide */

        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 3,
        opacity: '1',
      }
    : {}),
  ...(order === 2
    ? {
        /* Right slide*/
        left: '80%',
        transform: 'translate(-50%) scale(0.8, 0.8)',
        zIndex: 2,
        opacity: 0.9,
      }
    : {}),
  /*     transition: 'height 1s cubic-bezier(0.55, 0.09, 0.68, 0.53)',
   */
}));

const BadgeSwipper = () => {
  const [indexSelected, setIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(indexSelected + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [indexSelected]);

  return (
    <Box id="BadgeSwipper" sx={{ display: 'flex', flex: 1 }}>
      <CarouserContainerInner>
        {CARDS.map((cardSrc, i) => {
          return (
            <Item
              key={'decorative-image-' + i}
              size={isMobile ? 13 : 16}
              order={(indexSelected + i) % 3}
            >
              <Image src={cardSrc} layout="fill" />
            </Item>
          );
        })}
      </CarouserContainerInner>
    </Box>
  );
};

export default BadgeSwipper;
