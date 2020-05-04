import React, { useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, View, Animated } from 'react-native';
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
  const opacity = useRef(new Animated.Value(0)).current;
  const routesImagesNames = [
    'ios-aperture',
    'ios-bug',
    'ios-home',
    'ios-nuclear',
    'ios-contact',
  ];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <View>
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
    </View>
  );
};

export default TabBar;
