import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, ITEM_BG_COLOR_ACTIVE } from '../../styles';
import px from '../../utils/px';

export const SelectSite = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBarWrapper: {
    flexShrink: 0,
    flex: 0
  },
  listWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COMPONENT_BG_COLOR
  },
  siteTypeListWrapper: {
    width: px(180),
    flexShrink: 0,
    backgroundColor: ITEM_BG_COLOR_ACTIVE
  },
  siteListWrapper: {
    flexGrow: 1
  }
});

