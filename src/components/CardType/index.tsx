import { useIsMobile } from '@/src/hooks/useIsMobile';
import { Box, Container, styled } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { BodyCardBadgeType } from '../Commons/BodyCardBadgeType';
import { CardBadgeContainer, CardBadgeType } from '../Commons/CardBadgeType';
import { ImageContainer } from '../Commons/ImageContainer';
import { TittleCardBadgeType } from '../Commons/TittleCardBadgeType';

const LittleBadgeAdornment = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: theme.spacing(3),
  transform: 'translateY(-30%)',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  [theme.breakpoints.down('md')]: {
    right: theme.spacing(1),
  },
}));

type BadgeTypeDescriptionPropsType = {
  title: string;
  body: React.ReactNode;
  image: {
    mobile: string | StaticImageData;
    desktop: string | StaticImageData;
  };
  imageSizes: {
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
  adornment?: string;
  howToImage: {
    mobile: string;
    desktop: string;
  };
  howToImageAlt: string;
  howToImageAspectRatio: {
    mobile: string;
    desktop: string;
  };
};

export const BadgeTypeDescription = ({
  title,
  body,
  image,
  imageSizes,
  adornment,
  howToImage,
  howToImageAlt,
  howToImageAspectRatio,
}: BadgeTypeDescriptionPropsType) => {
  const isMobile = useIsMobile();

  return (
    <CardBadgeContainer>
      <Container maxWidth={'md'}>
        <CardBadgeType>
          {adornment ? (
            <LittleBadgeAdornment>
              <Image src={adornment} alt="Ilustration" width={45} height={65} />
            </LittleBadgeAdornment>
          ) : null}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: 1,
              filter: 'none',
            }}
          >
            <Box m="auto">
              <TittleCardBadgeType>{title}</TittleCardBadgeType>
              <BodyCardBadgeType>{body}</BodyCardBadgeType>
            </Box>
          </Box>
          <ImageContainer>
            <Image
              src={image[isMobile ? 'mobile' : 'desktop']}
              {...imageSizes[isMobile ? 'mobile' : 'desktop']}
              alt={title + ' Ilustration'}
            />
          </ImageContainer>
        </CardBadgeType>
        {howToImage && (
          <Box
            sx={{
              display: 'flex',
              position: 'relative',
              width: '100%',
              my: 2,
              aspectRatio: isMobile
                ? howToImageAspectRatio.mobile
                : howToImageAspectRatio.desktop,
            }}
          >
            <Image
              src={isMobile ? howToImage.mobile : howToImage.desktop}
              layout="fill"
              alt={howToImageAlt}
            />
          </Box>
        )}
      </Container>
    </CardBadgeContainer>
  );
};
