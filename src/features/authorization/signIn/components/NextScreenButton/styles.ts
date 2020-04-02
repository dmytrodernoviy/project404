import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.authMain,
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    marginLeft: normalize(10),
    width: normalize(60),
  },
  rightPosition: {
    alignSelf: 'flex-end',
  },
});
