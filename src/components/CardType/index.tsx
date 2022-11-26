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
  image: string | StaticImageData;
  imageSizes: {
    width: number;
    height: number;
  };
  adornment?: string;
  howToSVGComponent: React.ReactNode;
  howToAspectRatio: string;
};

export const BadgeTypeDescription = ({
  title,
  body,
  image,
  imageSizes,
  adornment,
  howToSVGComponent,
  howToAspectRatio,
}: BadgeTypeDescriptionPropsType) => {
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
            <Image src={image} {...imageSizes} alt={title + ' Ilustration'} />
          </ImageContainer>
        </CardBadgeType>
        {howToSVGComponent && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 'fit-content',
              my: 2,
              aspectRatio: howToAspectRatio,
            }}
          >
            {howToSVGComponent}
          </Box>
        )}
      </Container>
    </CardBadgeContainer>
  );
};
