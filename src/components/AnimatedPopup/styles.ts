import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors, fonts } from '@src/constants';

export default StyleSheet.create({
  container: {
    borderBottomLeftRadius: normalize(70, 'height'),
    borderTopRightRadius: normalize(70, 'height'),
  },
  content: {
    height: normalize(200, 'height'),
    width: normalize(300),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.tabNavigatior,
  },
  iconSuccess: {
    marginBottom: normalize(-30, 'height'),
  },
  title: {
    ...fonts.main_18,
    color: colors.authMain,
  },
  button: {
    height: normalize(30, 'height'),
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.authAdd,
    flexDirection: 'row',
  },
  buttonTitle: {
    ...fonts.popupButton,
    color: colors.authMain,
    marginLeft: normalize(10),
  },
});
