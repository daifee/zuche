import { StyleSheet } from 'react-native';
import { PADDING } from '../../styles';
import px from '../../utils/px';

export const Toast = StyleSheet.create({
  container: {
    flex: -1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

export const AnimdatedToast = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '30%',
    left: 0,
    width: '100%'
  }
});
