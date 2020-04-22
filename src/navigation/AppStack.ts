import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { navigationStackNames } from '@src/constants';
import { AuthStack, TabStack } from '@src/navigation/index';

const AppStack = createStackNavigator(
  {
    [navigationStackNames.AuthStack]: AuthStack,
    [navigationStackNames.TabStack]: TabStack,
  },
  {
    initialRouteName: navigationStackNames.TabStack,
    headerMode: 'none',
  },
);

export default createAppContainer(AppStack);
