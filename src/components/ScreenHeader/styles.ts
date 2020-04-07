import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.tabNavigatior,
    zIndex: 10,
    borderBottomLeftRadius: normalize(40),
    borderBottomRightRadius: normalize(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    shadowColor: colors.tabNavigatior,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
