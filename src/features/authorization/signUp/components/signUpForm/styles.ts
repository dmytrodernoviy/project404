import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: normalize(155, 'height'),
  },
});
