import { StyleSheet } from 'react-native';
import { FONT_SIZE, PADDING, COMPONENT_BG_COLOR, LINE } from '../../../styles';

export const HotOptionList = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    borderBottomWidth: LINE.width,
    borderBottomColor: LINE.color,
  },

  contentContainer: {
    flexDirection: 'row',
    padding: PADDING.xs,
  },

  button: {
    marginHorizontal: PADDING.xs,

  },
  buttonText: {
    fontSize: FONT_SIZE.xs,
  }
});

