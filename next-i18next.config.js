const i18n = {
  defaultLocale: 'en',
  locales: ['en'],
};
const localePath =
  typeof window === 'undefined'
    ? require('path').resolve('./src/translations/')
    : '/public/src/translations/';

module.exports = {
  i18n,
  localePath,
};
