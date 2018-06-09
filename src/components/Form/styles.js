import { StyleSheet } from 'react-native';
import { COLOR, PADDING, TEXT_COLOR_SECONDARY } from '../../styles';
import px from '../../utils/px';


export const FormInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR.normal,
    borderBottomWidth: 1,
    paddingTop: PADDING.md
  },
  labelContainer: {
    flexShrink: 0,
    minWidth: px(100),
    paddingRight: PADDING.sm,
  },
  labelText: {
    textAlign: 'right',
    color: TEXT_COLOR_SECONDARY
  },
  textInput: {
    flexGrow: 1,
    paddingVertical: PADDING.sm,
  }
});
