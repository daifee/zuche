import { StyleSheet } from 'react-native';
import { ITEM_BG_COLOR, LINE, PADDING, FONT_SIZE, COLOR, BORDER_RADIUS, TEXT_COLOR_SECONDARY } from '../../styles';


export const CheckButton = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ITEM_BG_COLOR,
    borderWidth: LINE.width,
    borderColor: TEXT_COLOR_SECONDARY,
    padding: PADDING.xs,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  text: {
    fontSize: FONT_SIZE.sm,
    marginRight: PADDING.xs,
  },
  containerChecked: {
    borderColor: COLOR.primary
  },
  textChecked: {
    color: COLOR.primary
  },
  disable: {
    opacity: 0.5
  }
});
