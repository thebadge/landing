var en = require('./translations.en.json');
var es = require('./translations.en.json');
var de = require('./translations.en.json');

const i18n = {
  translations: {
    en,
    de,
    es,
  },
  defaultLang: 'en',
  useBrowserDefault: false,
};

module.exports = i18n;
