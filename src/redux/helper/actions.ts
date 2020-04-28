import {
  SetAppLanguageAction,
  ToggleSnackBarAction,
  HelperConsts,
} from '@src/redux/helper/types';

export const SetAppLanguage = (payload: string): SetAppLanguageAction => ({
  type: HelperConsts.SET_APP_LANGUAGE,
  payload,
});

export const ToggleSnackBar = (payload: string): ToggleSnackBarAction => ({
  type: HelperConsts.SHOW_SNACKBAR,
  payload,
});
