import { StyleSheet } from 'react-native';
import { PADDING, LINE, COLOR } from '../../styles';

export const DatePicker = StyleSheet.create({
  container: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: LINE.color,
    borderBottomWidth: LINE.width,
  },
  button: {
    paddingHorizontal: PADDING.md,
    paddingVertical: PADDING.md,
  },
  cancelText: {
    color: COLOR.primary
  },
  confirmText: {
    color: COLOR.primary
  }
});
