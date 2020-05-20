import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

const translationGetters = {
  en: (): object => require('./en.json'),
  uk: (): object => require('./uk.json'),
  ru: (): object => require('./ru.json'),
};

const setCurrentLanguage = (language: 'en' | 'uk' | 'ru'): void => {
  I18n.translations = { [language]: translationGetters[language]() };
  I18n.locale = language;
};

export const translationString = (string = 'empty', locale: any): string => {
  setCurrentLanguage(locale);
  return I18n.t(string, locale);
};

export const setI18nConfig = (callback: Function = (): void => {}): void => {
  const fallback = { languageTag: 'en' };
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  if (languageTag === ('uk' || 'ru' || 'en')) {
    setCurrentLanguage(languageTag);
  } else {
    setCurrentLanguage('uk');
  }

  callback(languageTag);
};
