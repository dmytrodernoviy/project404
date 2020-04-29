export const HelperConsts = {
  SET_APP_LANGUAGE: 'SET_APP_LANGUAGE',
  SHOW_SNACKBAR: 'SHOW_SNACKBAR',
};

export interface HelperReducerType {
  currentLanguage: string;
  snackBarOptions: SnackBarOptions;
}

export interface SetAppLanguageAction {
  type: typeof HelperConsts.SET_APP_LANGUAGE;
  payload: string;
}

export interface SnackBarOptions {
  isVisible: boolean;
  title?: string;
}

export interface ToggleSnackBarAction {
  type: typeof HelperConsts.SHOW_SNACKBAR;
  payload: SnackBarOptions;
}

export type HelperActionsType = SetAppLanguageAction | ToggleSnackBarAction;
