import { createBottomTabNavigator } from 'react-navigation-tabs';
import { screenNames } from '@src/constants';
import DefaultScreen from '@src/components/DefaultScreen';
import { TabBar } from '@src/components';
import HomeScreen from '@src/features/homescreen';

const TabStack = createBottomTabNavigator(
  {
    ss: DefaultScreen,
    sss: DefaultScreen,
    [screenNames.HomeScreen]: HomeScreen,
    ssss123: DefaultScreen,
    ssss121: DefaultScreen,
  },
  {
    tabBarComponent: TabBar,
    initialRouteName: screenNames.HomeScreen,
  },
);

export default TabStack;
