import { RootStateType } from '@src/redux/types';

export const CurrentLanguageSelector = {
  locale: (state: RootStateType): string => state.locale.currentLanguage,
};
