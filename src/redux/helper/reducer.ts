import {
  HelperActionsType,
  HelperReducerType,
  HelperConsts,
} from '@src/redux/helper/types';

const initialState: HelperReducerType = {
  currentLanguage: 'uk',
  snackBarOptions: { isVisible: false, title: '' },
};

export const helperReducer = (
  state = initialState,
  action: HelperActionsType,
): HelperReducerType => {
  switch (action.type) {
    case HelperConsts.SET_APP_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    case HelperConsts.SHOW_SNACKBAR:
      return {
        ...state,
        snackBarOptions: action.payload,
      };
    default:
      return state;
  }
};
