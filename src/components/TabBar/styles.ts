import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    height: normalize(50, 'height'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    borderRadius: normalize(30),
    backgroundColor: colors.tabNavigatior,
    shadowColor: colors.activeTab,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  safeArea: {
    backgroundColor: colors.authAdd,
  },
});
