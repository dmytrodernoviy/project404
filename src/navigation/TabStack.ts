import { createBottomTabNavigator } from 'react-navigation-tabs';
import { screenNames } from '@src/constants';
import { DefaultScreen } from '@src/components/DefaultScreen';
import { TabBar } from '@src/components';

const TabStack = createBottomTabNavigator(
  {
    [screenNames.ProductsScreen]: DefaultScreen,
    ss: DefaultScreen,
    sss: DefaultScreen,
    ssss123: DefaultScreen,
    ssss121: DefaultScreen,
  },
  {
    tabBarComponent: TabBar,
  },
);

export default TabStack;
