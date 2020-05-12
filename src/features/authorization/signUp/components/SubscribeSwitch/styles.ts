import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: normalize(20, 'height'),
  },
  title: {
    ...fonts.main_18,
    color: colors.authMain,
    marginRight: normalize(20),
  },
});
