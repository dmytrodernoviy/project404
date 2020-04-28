import { RootStateType } from '@src/redux/types';

export const HelperSelector = {
  locale: (state: RootStateType): string => state.helper.currentLanguage,
  snackBarTitle: (state: RootStateType): string => state.helper.snackBarTitle,
};
