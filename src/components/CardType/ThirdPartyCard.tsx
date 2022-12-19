import { useIsMobile } from '@/src/hooks/useIsMobile';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import { Suspense } from 'react';
import { BadgeTypeDescription } from '.';
import image_desktop from '../../assets/certif_third-party.webp';
import howToMobile from '../../assets/how-to-third-party-mobile.webp';
import howTo from '../../assets/how-to-third-party.webp';

const MOBILE_IMAGE_SIZE = {
  width: 96,
  height: 144,
};

const DESKTOP_IMAGE_SIZE = {
  width: 210,
  height: 300,
};

const MOBILE_SVG_ASPECT_RATIO = '6/7';
const DESKTOP_SVG_ASPECT_RATIO = '10/9';

const ALT_TEXT = `
Step 1: First the entity has to register within the platform submitting information such as name, description, logo, etc.
Step 2: Once they are registered, they are able to mint their own custom badges according to their needs.
Step 3: In case they want to, they might apply as verified entities by The Badge.
Step 4: If they get verified, they will be able not only to whitelist addresses but also to directly mint badges for their users.
`;

const ThirdPartyCard = () => {
  const isMobile = useIsMobile();

  return (
    <BadgeTypeDescription
      title={'Third-party Badges'}
      body={
        <div>
          Also known as &quot;Blockchain certifications as a service&quot;. They
          are badges generated and backed by a public or private entity.
          Entities that are willing to generate these badges have to be
          registered on the platform before they can start emitting them.
        </div>
      }
      image={image_desktop}
      imageSizes={isMobile ? MOBILE_IMAGE_SIZE : DESKTOP_IMAGE_SIZE}
      howToSVGComponent={
        <Suspense fallback={<CircularProgress color="success" />}>
          {isMobile ? (
            <Image src={howToMobile} alt={ALT_TEXT} />
          ) : (
            <Image src={howTo} alt={ALT_TEXT} priority />
          )}
        </Suspense>
      }
      howToAspectRatio={
        isMobile ? MOBILE_SVG_ASPECT_RATIO : DESKTOP_SVG_ASPECT_RATIO
      }
    />
  );
};

export default ThirdPartyCard;
