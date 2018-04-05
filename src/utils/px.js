/**
 * @flow
 * 将设计稿固定尺寸自适应转化为设备屏幕尺寸
 */
import {
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';

const DEVICE_WIDTH: number = Dimensions.get('window').width;
const PIXEL_RATIO = PixelRatio.get();

export default function px(size: number) {
  // 别人的代码（可能是存在bug？）
  if (PIXEL_RATIO >= 3 && Platform.OS === 'ios' && size === 1) {
    return size;
  }

  return (DEVICE_WIDTH / 750) * size;
}
