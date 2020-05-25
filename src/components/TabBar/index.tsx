import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import uuid from 'react-uuid';
import normalize from 'react-native-normalize';
import styles from './styles';
import { colors } from '@src/constants';
import { BlurView } from '@react-native-community/blur';
import { isIOSPlatform } from '@src/utils/helpers';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface TProps {
  index: number;
  routes: Array<{ key: string; name: string }>;
  navigation: any;
}

const TabBarItems: React.FC<TProps> = ({ index, routes, navigation }) => {
  const routesImagesNames = [
    'ios-aperture',
    'ios-bug',
    'ios-home',
    'ios-nuclear',
    'ios-contact',
  ];

  return (
    <>
      {routes.map((route, routeIndex) => {
        const isFocused = routeIndex === index;

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableWithoutFeedback key={uuid()} onPress={onPress}>
            <Icon
              name={routesImagesNames[routeIndex]}
              size={routeIndex === 2 ? normalize(40) : normalize(35)}
              color={isFocused ? colors.activeTab : colors.inactiveTab}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </>
  );
};

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { index, routes } = state;
  return (
    <View style={styles.container}>
      {isIOSPlatform() ? (
        <BlurView
          blurType={'dark'}
          style={[styles.iOSBarContainer, styles.bothPlatformsContainer]}>
          {TabBarItems({ index, routes, navigation })}
        </BlurView>
      ) : (
        <View
          style={[styles.androidBarContainer, styles.bothPlatformsContainer]}>
          {TabBarItems({ index, routes, navigation })}
        </View>
      )}
    </View>
  );
};

export default TabBar;
