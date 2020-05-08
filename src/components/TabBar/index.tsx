import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import uuid from 'react-uuid';
import normalize from 'react-native-normalize';
import styles from './styles';
import { NavigationParams } from 'react-navigation';
import { colors } from '@src/constants';
import { BlurView } from '@react-native-community/blur';
import { isIOSPlatform } from '@src/utils/helpers';

const TabBarItems: React.FC<NavigationParams> = ({
  onTabPress,
  navigation,
}) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const routesImagesNames = [
    'ios-aperture',
    'ios-bug',
    'ios-home',
    'ios-nuclear',
    'ios-contact',
  ];

  return routes.map((route: number, routeIndex: number) => {
    const isRouteActive = routeIndex === activeRouteIndex;
    return (
      <TouchableWithoutFeedback
        key={uuid()}
        onPress={(): void => {
          onTabPress({ route });
        }}>
        <Icon
          name={routesImagesNames[routeIndex]}
          size={routeIndex === 2 ? normalize(40) : normalize(35)}
          color={isRouteActive ? colors.activeTab : colors.inactiveTab}
        />
      </TouchableWithoutFeedback>
    );
  });
};

const TabBar: React.FC<NavigationParams> = ({ onTabPress, navigation }) => {
  return (
    <View style={styles.container}>
      {isIOSPlatform() ? (
        <BlurView
          blurType={'dark'}
          style={[styles.iOSBarContainer, styles.bothPlatformsContainer]}>
          {TabBarItems({ onTabPress, navigation })}
        </BlurView>
      ) : (
        <View
          style={[styles.androidBarContainer, styles.bothPlatformsContainer]}>
          {TabBarItems({ onTabPress, navigation })}
        </View>
      )}
    </View>
  );
};

export default TabBar;
