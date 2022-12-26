import Image from 'next/image';
import { MultiBadgePreview } from 'thebadge-web-ui-library';
import diplomaCert from '../../assets/diploma-cert.png';
import howeyTest from '../../assets/howey-test.png';
import isoCertif from '../../assets/iso-cert.png';

const BADGES = [isoCertif, howeyTest, diplomaCert];

export const BadgesPreview = () => {
  return (
    <MultiBadgePreview
      badges={BADGES.map((cardSrc, i) => (
        <Image
          src={cardSrc}
          priority
          alt={'decorative-image-' + i}
          key={'decorative-image-' + i}
        />
      ))}
    />
  );
};
