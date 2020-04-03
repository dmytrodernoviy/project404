import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
});
