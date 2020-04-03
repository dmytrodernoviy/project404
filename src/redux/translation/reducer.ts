import {
  CurrentLanguageReducerType,
  SetAppLanguageAction,
  TranslationAppConsts,
} from '@src/redux/translation/types';

const initialState: CurrentLanguageReducerType = {
  currentLanguage: 'uk',
};

export const currentLanguageReducer = (
  state = initialState,
  action: SetAppLanguageAction,
): CurrentLanguageReducerType => {
  switch (action.type) {
    case TranslationAppConsts.SET_APP_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};
