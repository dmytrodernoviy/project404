import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screenNames } from '@src/constants';
import DefaultScreen from '@src/components/DefaultScreen';
import HomeScreen from '@src/features/homescreen';
import { TabBar } from '@src/components';
import ProfileScreen from '@src/features/profile';

const Tab = createBottomTabNavigator();

const TabStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.HomeScreen}
      tabBar={(props): Element => <TabBar {...props} />}>
      <Tab.Screen name={'FirstDefault'} component={DefaultScreen} />
      <Tab.Screen name={'SecondDefault'} component={DefaultScreen} />
      <Tab.Screen name={screenNames.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={'ThirdDefault'} component={DefaultScreen} />
      <Tab.Screen name={screenNames.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
