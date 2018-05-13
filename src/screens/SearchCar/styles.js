import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, ITEM_BG_COLOR_ACTIVE } from '../../styles';
import px from '../../utils/px';


export const SearchCar = StyleSheet.create({
  container: {
    flex: 1
  },
  hotOptionListWrapper: {
    flexShrink: 0,
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COMPONENT_BG_COLOR
  },
  sideMenuWrapper: {
    flexShrink: 0,
    width: px(160),
    backgroundColor: ITEM_BG_COLOR_ACTIVE
  },
  carListWrapper: {
    // flex: 1,
  }
});
