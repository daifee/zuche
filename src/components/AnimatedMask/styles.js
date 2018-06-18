import { StyleSheet } from 'react-native';


export const AnimatedMask = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  animateView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  touchableView: {
    width: '100%',
    height: '100%'
  }
});
