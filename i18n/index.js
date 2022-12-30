var en = require('./translations.en.json');
var es = require('./translations.es.json');
var de = require('./translations.en.json'); // @todo (agustin) // Change to DE translation once translation is ready

const i18n = {
  translations: {
    en,
    es,
    de,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
};

module.exports = i18n;
