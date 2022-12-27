import { Box } from '@mui/material';
import Image from 'next/image';
import { MultiBadgePreview } from 'thebadge-web-ui-library';
import diplomaCert from '../../assets/diploma-cert.webp';
import howeyTest from '../../assets/howey-test.webp';
import isoCertif from '../../assets/iso-cert.webp';

const BADGES = [isoCertif, howeyTest, diplomaCert];

export const BadgesPreview = () => {
  return (
    <MultiBadgePreview
      animated={true}
      badges={BADGES.map((cardSrc, i) => (
        <Box
          key={'decorative-image-' + i}
          sx={{ filter: 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.7))' }}
        >
          <Image src={cardSrc} priority alt={'decorative-image-' + i} />
        </Box>
      ))}
    />
  );
};
