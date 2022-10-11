import { BadgeTypeDescription } from '.';
import svg2 from '../../assets/certif_2.svg';
import { CustomLink } from '../Commons/Link';

import offchainHowToMobile from '../../assets/off-chain-how-to-mobile.svg';
import offchainHowTo from '../../assets/off-chain-how-to.svg';

import adornmentKleros from '../../assets/klerosCert.svg';

export const OffchainCard = () => {
  return (
    <BadgeTypeDescription
      tittle={'Off-chain Badges'}
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
      image={svg2}
      adornment={adornmentKleros}
      howToImage={{ desktop: offchainHowTo, mobile: offchainHowToMobile }}
      howToImageAspectRatio={{ desktop: '9/9', mobile: '6/10' }}
    />
  );
};
