import { BadgeTypeDescription } from '.';
import svg3 from '../../assets/certif_3.svg';

import tpHowToMobile from '../../assets/tp-how-to-mobile.svg';
import tpHowTo from '../../assets/tp-how-to.svg';

export const ThirdPartyCard = () => {
  return (
    <BadgeTypeDescription
      tittle={'Third-party Badges'}
      body={
        <div>
          Also known as &quot;Blockchain certifications as a service&quot;. They
          are badges generated and backed by a public or private entity.
          Entities that are willing to generate these badges have to be
          registered on the platform before they can start emitting them.
        </div>
      }
      image={svg3}
      howToImage={{ desktop: tpHowTo, mobile: tpHowToMobile }}
      howToImageAspectRatio={{ desktop: '10/9', mobile: '6/7' }}
      howToImageAlt={`
      Step 1: First the entity has to register within the platform submitting information such as name, description, logo, etc.
      Step 2: Once they are registered, they are able to mint their own custom badges according to their needs.
      Step 3: In case they want to, they might apply as verified entities by The Badge.
      Step 4: If they get verified, they will be able not only to whitelist addresses but also to directly mint badges for their users.
      `}
    />
  );
};
