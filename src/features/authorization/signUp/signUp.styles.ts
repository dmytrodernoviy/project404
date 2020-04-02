import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '@src/constants';

export default StyleSheet.create({
  bottomBlock: {
    backgroundColor: colors.authMain,
    borderBottomLeftRadius: normalize(100),
    height: normalize(150),
    width: normalize(150),
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: colors.authAdd,
  },
  content: {
    backgroundColor: colors.authAdd,
    flex: 1,
    justifyContent: 'space-between',
  },
  dismissContainer: {
    flex: 1,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: colors.authTopBlock,
  },
  formContainer: {
    backgroundColor: colors.authAdd,
    borderBottomRightRadius: normalize(50),
    borderBottomLeftRadius: normalize(300),
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    elevation: 22,
    height: '90%',
    justifyContent: 'space-between',
    left: '5%',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    position: 'absolute',
    shadowColor: colors.authMain,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 14.78,
    top: getStatusBarHeight(),
    width: '90%',
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    alignSelf: 'center',
    height: normalize(100),
    tintColor: colors.authMain,
    width: normalize(100),
  },
  topBlock: {
    backgroundColor: colors.authTopBlock,
    borderBottomLeftRadius: normalize(200),
    borderBottomRightRadius: normalize(400),
    height: '40%',
    width: '100%',
  },
});
