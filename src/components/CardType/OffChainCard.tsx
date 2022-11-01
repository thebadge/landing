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
      imageSizes={
        isMobile ? { width: 141, height: 124 } : { width: 344, height: 300 }
      }
      howToSVGComponent={
        <Suspense fallback={<CircularProgress color="success" />}>
          {isMobile ? <OffChainHowToMobile /> : <OffChainHowTo />}
        </Suspense>
      }
      howToAspectRatio={isMobile ? '6/10' : '9/9'}
    />
  );
};
