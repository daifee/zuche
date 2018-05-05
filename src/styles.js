/**
 * 主题样式
 */
import { StyleSheet } from 'react-native';
import px from './utils/px';

export const COLOR = {
  primary: '#254FCB',
  primaryActive: '#506fca',
  info: '',
  success: '',
  error: '',
  highlight: '',
  warning: '',
  normal: '#d9d9d9'
};

export const PADDING = {
  lg: px(36),
  md: px(24),
  sm: px(16),
  xs: px(12)
};

export const FONT_SIZE = {
  lg: px(40),
  md: px(34),
  sm: px(28),
  xs: px(22)
};

export const TEXT_COLOR = 'rgba(0, 0, 0, 0.9)';
export const TEXT_COLOR_SECONDARY = 'rgba(0, 0, 0, 0.50)';
export const TEXT_COLOR_PRIMARY = 'rgba(255, 255, 255, 1)';

export const BODY_BG_COLOR = '#f5f5f5';

export const COMPONENT_BG_COLOR = '#ffffff';
export const COMPONENT_BG_COLOR_ACTIVE = '#DDDDDD';

export const ITEM_BG_COLOR = '#ffffff';
export const ITEM_BG_COLOR_ACTIVE = '#DDDDDD';

export const LINE = {
  color: '#e8e8e8',
  width: StyleSheet.hairlineWidth,
};

export const BORDER_RADIUS = '';

// nav-bar包含status-bar
export const STATUS_BAR_HEIGHT = 20;
export const NAV_BAR_HEIGHT = 64;
