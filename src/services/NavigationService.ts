import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

type Navigator = NavigationContainerRef | null;

class Service {
  navigator: Navigator;
  constructor() {
    this.navigator = null;
  }

  setTopLevelNavigator = (navigatorRef: Navigator): void => {
    this.navigator = navigatorRef;
  };

  navigate(name: string, params?: object): void {
    if (this.navigator) {
      this.navigator.dispatch(CommonActions.navigate(name, params));
    }
  }
}

export const NavigationService = new Service();
