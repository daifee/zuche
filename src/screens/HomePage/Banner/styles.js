import { StyleSheet } from 'react-native';
import px from '../../../utils/px';

export const Banner = StyleSheet.create({
  container: {
    height: px(360),
  },

  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

