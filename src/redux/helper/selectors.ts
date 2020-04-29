import { RootStateType } from '@src/redux/types';
import { SnackBarOptions } from '@src/redux/helper/types';

export const HelperSelector = {
  locale: (state: RootStateType): string => state.helper.currentLanguage,
  snackBarOptions: (state: RootStateType): SnackBarOptions =>
    state.helper.snackBarOptions,
};
