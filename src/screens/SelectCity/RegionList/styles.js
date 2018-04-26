import { StyleSheet } from 'react-native';
import {
  ITEM_BG_COLOR_ACTIVE,
  PADDING
} from '../../../styles';
import px from '../../../utils/px';

export const RegionList = StyleSheet.create({
  // flexShrink: 0,
});


export const RegionItem = StyleSheet.create({
  container: {

  },
  button: {
    height: px(84),
    width: px(180),
    paddingHorizontal: PADDING.md,
    backgroundColor: ITEM_BG_COLOR_ACTIVE,
    // alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: px(24),
  }
});
