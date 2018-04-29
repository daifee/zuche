import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR } from '../../styles';
import px from '../../utils/px';

export const SelectCity = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBarWrapper: {
    flexShrink: 0,
  },
  listWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COMPONENT_BG_COLOR
  },
  regionListWrapper: {
    width: px(180),
    flexShrink: 0,
  },
  cityListWrapper: {
    flexGrow: 1
  }
});

