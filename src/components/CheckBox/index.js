import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { CheckBox as styles } from './styles';
import { COLOR, FONT_SIZE, TEXT_COLOR_SECONDARY } from '../../styles';
import { textStyle } from '../../propTypes';

export default function CheckBox(props) {
  const {
    checked, size, disable, style, iconStyle, onPress, ...rest
  } = props;

  const color = checked ? COLOR.primary : TEXT_COLOR_SECONDARY;
  const disableStyle = disable ? styles.disable : undefined;

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, style, disableStyle]}
      onPress={disable ? undefined : onPress}
    >
      <SimpleLineIcons
        name="check"
        size={size}
        color={color}
        style={[styles.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
}

CheckBox.defaultProps = {
  size: FONT_SIZE.md,
  checked: false,
  disable: false,
};

CheckBox.propTypes = {
  ...TouchableOpacity.propTypes,
  onPress: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.number,
  disable: PropTypes.bool,
  iconStyle: textStyle
};
