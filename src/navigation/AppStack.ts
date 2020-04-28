import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { navigationStackNames } from '@src/constants';
import { AuthStack, TabStack } from '@src/navigation/index';

const AppStack = createSwitchNavigator(
  {
    [navigationStackNames.AuthStack]: AuthStack,
    [navigationStackNames.TabStack]: TabStack,
  },
  {
    initialRouteName: navigationStackNames.AuthStack,
  },
);

export default createAppContainer(AppStack);
