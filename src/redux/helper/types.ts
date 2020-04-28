export const HelperConsts = {
  SET_APP_LANGUAGE: 'SET_APP_LANGUAGE',
  SHOW_SNACKBAR: 'SHOW_SNACKBAR',
};

export interface HelperReducerType {
  currentLanguage: string;
  snackBarTitle: string;
}

export interface SetAppLanguageAction {
  type: typeof HelperConsts.SET_APP_LANGUAGE;
  payload: string;
}

export interface ToggleSnackBarAction {
  type: typeof HelperConsts.SHOW_SNACKBAR;
  payload: string;
}

export type HelperActionsType = SetAppLanguageAction | ToggleSnackBarAction;
