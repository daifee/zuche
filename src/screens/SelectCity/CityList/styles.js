
import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING, LINE, ITEM_BG_COLOR_ACTIVE } from '../../../styles';
import px from '../../../utils/px';

export const CityList = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md / 2,
  },

  sectionHeaderContainer: {
    height: px(88),
    justifyContent: 'center',
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md / 2,
  },
  sectionContainer: {

  },
  columnWrapper: {
    justifyContent: 'space-between',
    flex: 1,
    overflow: 'hidden'
  },
  itemWrapper: {
    maxWidth: '50%',
    flex: 1,
    marginHorizontal: PADDING.md / 2,
    marginBottom: PADDING.md,
  }
});


export const CityItem = StyleSheet.create({
  container: {
    height: px(76),
    borderWidth: LINE.width,
    borderColor: LINE.color,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSelected: {
    backgroundColor: ITEM_BG_COLOR_ACTIVE
  }
});

