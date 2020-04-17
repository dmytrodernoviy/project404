import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tabNavigatior,
  },
  topBlock: {
    width: '100%',
    height: StaticSafeAreaInsets.safeAreaInsetsTop,
    position: 'absolute',
    zIndex: 30,
    backgroundColor: colors.tabNavigatior,
  },
});
