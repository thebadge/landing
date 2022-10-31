import { useIsMobile } from '@/src/hooks/useIsMobile';
import dynamic from 'next/dynamic';
import { BadgeTypeDescription } from '.';
import image_desktop from '../../assets/certif_off-chain.webp';
import { CustomLink } from '../Commons/Link';

const OffChainHowToMobile = dynamic(
  () => import('../Commons/SVGs/OffChainHowToMobile'),
  {
    suspense: true,
  },
);

const OffChainHowTo = dynamic(() => import('../Commons/SVGs/OffChainHowTo'), {
  suspense: true,
});

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
      image={isMobile ? image_desktop : image_desktop}
      imageSizes={
        isMobile ? { width: 141, height: 124 } : { width: 344, height: 300 }
      }
      howToSVGComponent={isMobile ? OffChainHowToMobile : OffChainHowTo}
      howToAspectRatio={isMobile ? '6/10' : '9/9'}
    />
  );
};
