import {
  NavigationActions,
  NavigationContainerComponent,
} from 'react-navigation';

type Navigator = NavigationContainerComponent | null;

class Service {
  navigator: Navigator;
  constructor() {
    this.navigator = null;
  }

  setTopLevelNavigator = (navigatorRef: Navigator): void => {
    this.navigator = navigatorRef;
  };

  navigate<TParams>(routeName: string, params?: TParams): void {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        }),
      );
    }
  }

  hideTabNavigator(): void {
    if (this.navigator) {
      console.log(this.navigator);
      this.navigator.dispatch(
        NavigationActions.setParams({
          key: 'HomeScreen',
          params: {
            tabBarVisible: false,
          },
        }),
      );
    }
  }
}

export const NavigationService = new Service();
