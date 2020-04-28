import {
  HelperActionsType,
  HelperReducerType,
  HelperConsts,
} from '@src/redux/helper/types';

const initialState: HelperReducerType = {
  currentLanguage: 'uk',
  snackBarTitle: '',
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
        snackBarTitle: action.payload,
      };
    default:
      return state;
  }
};
