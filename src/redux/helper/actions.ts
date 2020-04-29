import {
  SetAppLanguageAction,
  ToggleSnackBarAction,
  HelperConsts,
  SnackBarOptions,
} from '@src/redux/helper/types';

export const SetAppLanguage = (payload: string): SetAppLanguageAction => ({
  type: HelperConsts.SET_APP_LANGUAGE,
  payload,
});

export const ToggleSnackBar = ({
  isVisible,
  title,
}: SnackBarOptions): ToggleSnackBarAction => ({
  type: HelperConsts.SHOW_SNACKBAR,
  payload: { isVisible, title },
});
