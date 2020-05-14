import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    borderRadius: normalize(20, 'height'),
  },
  content: {
    height: normalize(200, 'height'),
    width: normalize(300),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.tabNavigatior,
  },
  title: {
    ...fonts.main_18,
    color: colors.authMain,
  },
  button: {
    height: normalize(40, 'height'),
    width: normalize(100),
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.authAdd,
    flexDirection: 'row',
  },
  buttonTitle: {
    ...fonts.popupButton,
    color: colors.authMain,
  },
  answers: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});
