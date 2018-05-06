import { StyleSheet } from 'react-native';
import { PADDING, ITEM_BG_COLOR_ACTIVE, ITEM_BG_COLOR, FONT_SIZE, COLOR, LINE } from '../../styles';
import px from '../../utils/px';

const divider = {
  position: 'absolute',
  right: 0,
  left: 0,
  height: LINE.width,
  backgroundColor: LINE.color
};

export const SideMenu = StyleSheet.create({
  container: {
    position: 'relative'
  },
  topDividerStyle: {
    ...divider,
    top: 0
  },
  bottomDividerStyle: {
    ...divider,
    bottom: 0
  }
});


export const SideMenuItem = StyleSheet.create({
  container: {
    flex: 0,
    position: 'relative',
    padding: PADDING.md,
    backgroundColor: ITEM_BG_COLOR_ACTIVE
  },
  containerSelected: {
    backgroundColor: ITEM_BG_COLOR
  },

  text: {
    fontSize: FONT_SIZE.sm,
  },
  textSelected: {
    fontWeight: 'bold',
  },

  divider: {
    ...divider,
    bottom: 0
  },
  dividerSelected: {
    backgroundColor: ITEM_BG_COLOR
  },

  selectedLabelContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: px(4),
    justifyContent: 'center',
  },
  selectedLabel: {
    width: px(4),
    height: '30%',
    backgroundColor: COLOR.primary
  }
});
