import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { navigationStackNames } from '@src/constants';
import { AuthStack } from '@src/navigation/index';

const AppStack = createStackNavigator(
  {
    [navigationStackNames.AuthStack]: AuthStack,
  },
  {
    initialRouteName: navigationStackNames.AuthStack,
    headerMode: 'none',
  },
);

export default createAppContainer(AppStack);
