import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { CheckButton as styles } from './styles';
import { TextPrune } from '../Text';
import CheckBox from '../CheckBox';
import { FONT_SIZE } from '../../styles';
import { viewStyle, textStyle } from '../../propTypes';


export default function CheckButton(props) {
  const {
    children, checked, style, textStyle, disable, onPress, ...rest
  } = props;

  const checkedStyle = checked ? {
    container: styles.containerChecked,
    text: styles.textChecked
  } : {};

  const disableStyle = disable ? styles.disable : undefined;

  return (
    <TouchableOpacity
      {...rest}
      onPress={disable ? undefined : onPress}
      style={[styles.container, checkedStyle.container, disableStyle, style]}
      textStyle={[styles.text, checkedStyle.text, textStyle]}
    >
      <TextPrune style={[styles.text, checkedStyle.text, textStyle]}>
        {children}
      </TextPrune>
      {checked && <CheckBox size={FONT_SIZE.xs} checked />}
    </TouchableOpacity>
  );
}

CheckButton.defaultProps = {
  checked: false,
  disable: false
};

CheckButton.propTypes = {
  onPress: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.node,
  style: viewStyle,
  textStyle: textStyle,
  disable: PropTypes.bool
};
