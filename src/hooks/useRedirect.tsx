import { useRouter } from 'next/router';
import { useEffect } from 'react';
import languageDetector from '../utils/lenguajeDetector';

export const useRedirect = (to: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route);
      return;
    }

    if (languageDetector?.cache && detectedLng) {
      languageDetector.cache(detectedLng);
      router.replace('/' + detectedLng + to);
    }
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect('');
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return <></>;
};
