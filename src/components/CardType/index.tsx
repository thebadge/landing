import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { CardBadgeType } from '../Commons/CardBadgeType';
import { TittleCardBadgeType } from '../Commons/TittleCardBadgeType';
import { BodyCardBadgeType } from '../Commons/BodyCardBadgeType';
import { ImageContainer } from '../Commons/ImageContainer';

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
  tittle: string;
  body: string;
  image: string;
  adornment: string;
};

export const BadgeTypeDescription = ({
  tittle,
  body,
  image,
  adornment,
}: BadgeTypeDescriptionPropsType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CardBadgeType>
      <LittleBadgeAdornment>
        <Image src={adornment} alt="Ilustration" width={45} height={65} />
      </LittleBadgeAdornment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          filter: 'none',
        }}
      >
        <Box m="auto">
          <TittleCardBadgeType>{tittle}</TittleCardBadgeType>
          <BodyCardBadgeType>{body}</BodyCardBadgeType>
        </Box>
      </Box>
      <ImageContainer>
        <Image
          src={image}
          alt="Ilustration"
          width={isMobile ? 250 : 350}
          height={isMobile ? 250 : 350}
        />
      </ImageContainer>
    </CardBadgeType>
  );
};
