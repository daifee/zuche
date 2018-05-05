import { StyleSheet } from 'react-native';
import {
  COMPONENT_BG_COLOR,
  STATUS_BAR_HEIGHT,
  LINE,
  NAV_BAR_HEIGHT,
  PADDING
} from '../../styles';

export const Header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: STATUS_BAR_HEIGHT,
    height: NAV_BAR_HEIGHT,
    position: 'relative',
    backgroundColor: COMPONENT_BG_COLOR,
    borderBottomColor: LINE.color,
    borderBottomWidth: LINE.width,
    borderStyle: 'solid'
  },
  centerContainer: {
    position: 'absolute',
    left: 0,
    top: STATUS_BAR_HEIGHT,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export const BackButton = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: PADDING.md,
    minHeight: 44,
    minWidth: 44,
  }
});
