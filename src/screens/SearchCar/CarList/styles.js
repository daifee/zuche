
import { StyleSheet } from 'react-native';
import { COMPONENT_BG_COLOR, PADDING, LINE, ITEM_BG_COLOR_ACTIVE, TEXT_COLOR_SECONDARY, TEXT_COLOR } from '../../../styles';
import px from '../../../utils/px';

export const SiteList = StyleSheet.create({
  container: {
    backgroundColor: COMPONENT_BG_COLOR
  },

  sectionHeaderContainer: {
    height: px(84),
    justifyContent: 'center',
    backgroundColor: COMPONENT_BG_COLOR,
    paddingHorizontal: PADDING.md,
    borderBottomColor: LINE.color,
    borderBottomWidth: LINE.width,
    // borderBottomStyle: 'solid'
  },

  sectionFooterContainer: {
    height: PADDING.md,
    backgroundColor: ITEM_BG_COLOR_ACTIVE
  },

  headerText: {
    color: TEXT_COLOR_SECONDARY
  },

  separator: {
    height: LINE.width,
    marginLeft: PADDING.md,
    backgroundColor: LINE.color
  },
  separatorActive: {
    backgroundColor: 'transparent'
  }
});


export const SiteItem = StyleSheet.create({
  container: {
    padding: PADDING.md
  },
  containerSelected: {
    backgroundColor: ITEM_BG_COLOR_ACTIVE
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

