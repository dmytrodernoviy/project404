import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: normalize(15),
    paddingBottom:
      normalize(60, 'height') + StaticSafeAreaInsets.safeAreaInsetsBottom,
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
