import { useIsMobile } from '@/src/hooks/useIsMobile';
import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { BadgeTypeDescription } from '.';
import image_desktop from '../../assets/certif_off-chain.webp';
import { CustomLink } from '../Commons/Link';

const OffChainHowToMobile = dynamic(
  () => import('../Commons/SVGs/OffChainHowToMobile'),
);

const OffChainHowTo = dynamic(() => import('../Commons/SVGs/OffChainHowTo'));

const MOBILE_IMAGE_SIZE = { width: 141, height: 124 };
const DESKTOP_IMAGE_SIZE = { width: 344, height: 300 };
const MOBILE_SVG_ASPECT_RATIO = '6/10';
const DESKTOP_SVG_ASPECT_RATIO = '9/9';

export const OffchainCard = () => {
  const isMobile = useIsMobile();

  return (
    <BadgeTypeDescription
      title={'Off-chain Badges'}
      body={
        <div>
          Are badges generated and backed by{' '}
          <CustomLink
            href={'https://kleros.gitbook.io/docs/products/curate'}
            target={'_blank'}
          >
            Kleros
          </CustomLink>
          . In order to mint these badges evidence has to be presented and pass
          through a curation process.
        </div>
      }
      image={image_desktop}
      imageSizes={isMobile ? MOBILE_IMAGE_SIZE : DESKTOP_IMAGE_SIZE}
      howToSVGComponent={
        <Suspense fallback={<CircularProgress color="success" />}>
          {isMobile ? <OffChainHowToMobile /> : <OffChainHowTo />}
        </Suspense>
      }
      howToAspectRatio={
        isMobile ? MOBILE_SVG_ASPECT_RATIO : DESKTOP_SVG_ASPECT_RATIO
      }
    />
  );
};
