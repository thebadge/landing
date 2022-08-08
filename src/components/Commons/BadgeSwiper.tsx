import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import offChainOne from '../../assets/cards_offchain_1.png';
import onChainOne from '../../assets/cards_onchain_1.png';
import thirdPartyOne from '../../assets/cards_thirdparty_1.png';

const IMAGES = [offChainOne, onChainOne, thirdPartyOne];

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
  backgroundColor: 'white',
  transition: '3s ease',
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

export const BadgeSwipper = () => {
  const [indexSelected, setIndex] = useState(0);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(indexSelected + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [indexSelected]);

  return (
    <Box id="BadgeSwipper" sx={{ display: 'flex', flex: 1 }}>
      <CarouserContainerInner>
        {IMAGES.map((image, i) => {
          return (
            <Item key={'decorative-image-' + i} size={isMobile ? 10 : 15} order={(indexSelected + i) % 3}>
              <Image src={image} alt="decorative-image" layout="fill" />
            </Item>
          );
        })}
      </CarouserContainerInner>
    </Box>
  );
};
