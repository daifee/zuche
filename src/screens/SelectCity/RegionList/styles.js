import { StyleSheet } from 'react-native';
import {
  ITEM_BG_COLOR_ACTIVE,
  ITEM_BG_COLOR,
  PADDING,
  COLOR,
  LINE
} from '../../../styles';
import px from '../../../utils/px';

export const RegionList = StyleSheet.create({
  separator: {
    height: LINE.width,
    backgroundColor: LINE.color
  },
  separatorActive: {
    backgroundColor: 'transparent'
  }
});


export const RegionItem = StyleSheet.create({
  container: {
    height: px(84),
    paddingHorizontal: PADDING.md,
    backgroundColor: ITEM_BG_COLOR_ACTIVE,
    justifyContent: 'center',
  },
  containerSelected: {
    backgroundColor: ITEM_BG_COLOR,
    position: 'relative'
  },
  sign: {
    position: 'absolute',
    width: px(4),
    height: px(36),
    backgroundColor: COLOR.primary
  },
  text: {
    fontSize: px(24),
  }
});
