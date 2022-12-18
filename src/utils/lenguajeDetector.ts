import languageDetectorFactory from 'next-language-detector';
import i18nextConfig from '../../next-i18next.config';

const languageDetector = languageDetectorFactory({
  supportedLngs: i18nextConfig.i18n.locales,
  fallbackLng: i18nextConfig.i18n.defaultLocale,
});

export default languageDetector;
