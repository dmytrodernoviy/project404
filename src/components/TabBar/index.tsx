import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import uuid from 'react-uuid';
import normalize from 'react-native-normalize';
import styles from './styles';
import { NavigationParams } from 'react-navigation';
import { colors } from '@src/constants';
import { isIOSPlatform } from '@src/utils/helpers';

const TabBar: React.FC<NavigationParams> = ({ onTabPress, navigation }) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const routesImagesNames = [
    'ios-aperture',
    'ios-bug',
    'ios-home',
    'ios-nuclear',
    'ios-contact',
  ];

  return (
    <>
      <View style={styles.container}>
        {routes.map((route: number, routeIndex: number) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          return (
            <TouchableWithoutFeedback
              key={uuid()}
              onPress={(): void => {
                onTabPress({ route });
              }}>
              <Icon
                name={routesImagesNames[routeIndex]}
                size={routeIndex === 2 ? normalize(45) : normalize(35)}
                color={isRouteActive ? colors.activeTab : colors.inactiveTab}
              />
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      {isIOSPlatform() && <View style={styles.bottomBlock} />}
    </>
  );
};

export default TabBar;
