import { StyleSheet } from 'react-native';
import { colors, fonts } from '@src/constants';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(15, 'height'),
  },
  title: {
    ...fonts.searchableTitle,
    color: colors.inactiveTab,
  },
});
