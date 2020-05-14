import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    width: normalize(350),
    alignItems: 'center',
    borderRadius: normalize(10, 'height'),
  },
});
