import { BadgeTypeDescription } from '.';
import svg3 from '../../assets/certif_3.svg';

import tpHowToMobile from '../../assets/tp-how-to-mobile.svg';
import tpHowTo from '../../assets/tp-how-to.svg';

import adornmentCert from '../../assets/cert.svg';
export const ThirdPartyCard = () => {
  return (
    <BadgeTypeDescription
      tittle={'Third-party Badges'}
      body={
        <div>
          Are badges generated and backed by a public or private entity.
          Entities that are willing to generate these badges will need to be
          registered on the platform before they can start emitting them.
        </div>
      }
      image={svg3}
      adornment={adornmentCert}
      howToImage={{ desktop: tpHowTo, mobile: tpHowToMobile }}
      howToImageAspectRatio={{ desktop: '10/9', mobile: '6/7' }}
    />
  );
};
