export enum HelperConsts {
  SET_APP_LANGUAGE = 'SET_APP_LANGUAGE',
  SHOW_SNACKBAR = 'SHOW_SNACKBAR',
}

export interface HelperReducerType {
  currentLanguage: 'uk' | 'ru' | 'en';
  snackBarOptions: SnackBarOptions;
}

export interface SetAppLanguageAction {
  type: typeof HelperConsts.SET_APP_LANGUAGE;
  payload: 'uk' | 'ru' | 'en';
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
