export const TranslationAppConsts = {
  SET_APP_LANGUAGE: 'SET_APP_LANGUAGE',
};

export interface CurrentLanguageReducerType {
  currentLanguage: string;
}

export interface SetAppLanguageAction {
  type: typeof TranslationAppConsts.SET_APP_LANGUAGE;
  payload: string;
}
