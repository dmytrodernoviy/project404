import { createBottomTabNavigator } from 'react-navigation-tabs';
import { screenNames } from '@src/constants';
import DefaultScreen from '@src/components/DefaultScreen';
import HomeScreen from '@src/features/homescreen';
import { TabBar } from '@src/components';
import ProfileScreen from '@src/features/profile';

const TabStack = createBottomTabNavigator(
  {
    ss: DefaultScreen,
    sss: DefaultScreen,
    [screenNames.HomeScreen]: HomeScreen,
    ssss123: DefaultScreen,
    [screenNames.ProfileScreen]: ProfileScreen,
  },
  {
    tabBarComponent: TabBar,
    initialRouteName: screenNames.HomeScreen,
  },
);

export default TabStack;
