import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-uuid';
import normalize from 'react-native-normalize';
import styles from './styles';
import { NavigationParams } from 'react-navigation';
import { colors } from '@src/constants';

const TabBar: React.FC<NavigationParams> = ({ onTabPress, navigation }) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const routesImagesNames = [
    'ios-nuclear',
    'ios-nuclear',
    'ios-home',
    'ios-nuclear',
    'ios-contact',
  ];

  return (
    <View style={styles.container}>
      {routes.map((route: number, routeIndex: number) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        return (
          <TouchableWithoutFeedback
            key={uuid()}
            onPress={(): void => {
              onTabPress({ route });
            }}>
            <View style={routeIndex === 2 && styles.centerTab}>
              <Icon
                name={routesImagesNames[routeIndex]}
                size={routeIndex === 2 ? normalize(45) : normalize(35)}
                color={isRouteActive ? colors.activeTab : colors.inactiveTab}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default TabBar;
