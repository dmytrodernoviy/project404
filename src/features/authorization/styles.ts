import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: -1,
    resizeMode: 'contain',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
