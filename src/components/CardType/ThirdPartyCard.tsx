import { useIsMobile } from '@/src/hooks/useIsMobile';
import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { BadgeTypeDescription } from '.';
import image_desktop from '../../assets/certif_third-party.webp';

const ThirdPartyHowToMobile = dynamic(
  () => import('../Commons/SVGs/ThirdPartyHowToMobile'),
);

const ThirdPartyHowTo = dynamic(
  () => import('../Commons/SVGs/ThirdPartyHowTo'),
);

export const ThirdPartyCard = () => {
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
      imageSizes={
        isMobile
          ? {
              width: 96,
              height: 144,
            }
          : {
              width: 210,
              height: 300,
            }
      }
      howToSVGComponent={
        <Suspense fallback={<CircularProgress color="success" />}>
          {isMobile ? <ThirdPartyHowToMobile /> : <ThirdPartyHowTo />}
        </Suspense>
      }
      howToAspectRatio={isMobile ? '6/7' : '10/9'}
    />
  );
};
