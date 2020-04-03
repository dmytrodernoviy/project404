import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-uuid';
import normalize from 'react-native-normalize';
import styles from './styles';
import { NavigationParams } from 'react-navigation';
import { colors } from '@src/constants';

const TabBar: React.FC<NavigationParams> = ({ onTabPress, navigation }) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const routesImagesNames = [
    'ios-home',
    'ios-nuclear',
    'ios-nuclear',
    'ios-contact',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {routes.map((route: number, routeIndex: number) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          return (
            <TouchableOpacity
              key={uuid()}
              onPress={(): void => {
                onTabPress({ route });
              }}>
              <Icon
                name={routesImagesNames[routeIndex]}
                size={normalize(30, 'height')}
                color={isRouteActive ? colors.activeTab : colors.inactiveTab}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
