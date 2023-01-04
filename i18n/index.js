var en = require('./translations.en.json');
var es = require('./translations.es.json');
var de = require('./translations.de.json');

const i18n = {
  translations: {
    en,
    es,
    de
  },
  defaultLang: 'en',
  useBrowserDefault: true,
};

module.exports = i18n;
