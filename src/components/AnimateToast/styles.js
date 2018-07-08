import { StyleSheet } from 'react-native';
import { PADDING } from '../../styles';
import px from '../../utils/px';

export const Toast = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING.lg,
    paddingVertical: PADDING.xs,
    borderRadius: px(16),
  },
  left: {
    marginLeft: PADDING.xs,
    maxWidth: '70%'
  },
  content: {
    color: '#fff'
  }
});
