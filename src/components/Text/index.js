import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../../styles';

export const TextComponent = StyleSheet.create({
  h1: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: FONT_SIZE.xs,
    fontWeight: 'bold',
  },
  p: {
    fontSize: FONT_SIZE.sm
  }
});
