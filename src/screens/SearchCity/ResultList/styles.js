import { StyleSheet } from 'react-native';
import { ITEM_BG_COLOR, PADDING, TEXT_COLOR, TEXT_COLOR_SECONDARY, LINE } from '../../../styles';
import px from '../../../utils/px';


export const ResultList = StyleSheet.create({
  separator: {
    height: LINE.width,
    marginLeft: PADDING.md,
    backgroundColor: LINE.color
  },
  separatorActive: {
    backgroundColor: 'transparent'
  }
});

export const ResultItem = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: PADDING.md,
    backgroundColor: ITEM_BG_COLOR,
    alignItems: 'center',
  },

  rightWrapper: {
    marginLeft: PADDING.md,
  },

  title: {
    fontSize: px(28),
    color: TEXT_COLOR
  },
  secondTitle: {
    fontSize: px(24),
    color: TEXT_COLOR_SECONDARY
  }
});
