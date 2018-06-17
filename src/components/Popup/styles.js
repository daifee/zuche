import { StyleSheet } from 'react-native';


export const PopuoMask = StyleSheet.create({
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

export const PopupBottom = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff'
  }
});
