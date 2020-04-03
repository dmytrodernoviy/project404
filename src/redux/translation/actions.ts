import {
  SetAppLanguageAction,
  TranslationAppConsts,
} from '@src/redux/translation/types';

export const SetAppLanguage = (payload: string): SetAppLanguageAction => ({
  type: TranslationAppConsts.SET_APP_LANGUAGE,
  payload,
});
