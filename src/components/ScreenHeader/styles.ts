import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(50, 'height'),
    backgroundColor: colors.tabNavigatior,
    borderBottomLeftRadius: normalize(40),
    borderBottomRightRadius: normalize(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    shadowColor: colors.activeTab,
    shadowOffset: {
      width: 0,
      height: normalize(20, 'height'),
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
});
