import { BadgeTypeDescription } from '.';
import image_desktop from '../../assets/certif_off-chain.webp';
import { CustomLink } from '../Commons/Link';

import offchainHowToMobile from '../../assets/off-chain-how-to-mobile.svg';
import offchainHowTo from '../../assets/off-chain-how-to.svg';

export const OffchainCard = () => {
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
      image={{
        desktop: image_desktop,
        mobile: image_desktop,
      }}
      imageSizes={{
        desktop: {
          width: 339,
          height: 300,
        },
        mobile: {
          width: 141,
          height: 124,
        },
      }}
      howToImage={{ desktop: offchainHowTo, mobile: offchainHowToMobile }}
      howToImageAspectRatio={{ desktop: '9/9', mobile: '6/10' }}
      howToImageAlt={`
      Step 1: Select the type of badge you are interested in. Each badge will require the submission of proof or evidence to certify you have the right to claim it. An example of this type of badge could be to claim a Twitter account.
      Step 2: Prepare and submit the evidence. Each type of badge will request to accomplish some specific tasks. For example, a tweet containing your wallet address.
      Step 3: Your submission will have to pass through Kleros's curation process. Where the community will have a few days to analyze the evidence you have submitted.
      Step 4: Nobody has challenged your submission. The badge is minted to your address.
      Step 4.1: Someone has challenged your submission. A Jury of Kleros will analyze your evidence and determine if it is veridic or not.
      Step 4.2: The jury determines the evidence is veridic. The badge is minted.
      Step 4.3: The jury determines the evidence is fraudulent. The badge is not minted.
      `}
    />
  );
};
