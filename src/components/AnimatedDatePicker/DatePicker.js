import React from 'react';
import { View, TouchableOpacity, DatePickerIOS } from 'react-native';
import PropTypes from 'prop-types';
import { TextPrune } from '../Text';
import { DatePicker as styles } from './styles';


export default function DatePicker(props) {
  const {
    onCancel, onConfirm, title, cancelText, confirmText, ...rest
  } = props;

  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={onCancel}
        >
          <TextPrune style={[styles.cancelText]}>
            {cancelText}
          </TextPrune>
        </TouchableOpacity>

        <TextPrune style={[styles.title]}>{title}</TextPrune>

        <TouchableOpacity
          style={[styles.button]}
          onPress={onConfirm}
        >
          <TextPrune style={[styles.confirmText]}>
            {confirmText}
          </TextPrune>
        </TouchableOpacity>
      </View>
      <DatePickerIOS {...rest} />
    </View>
  );
}


DatePicker.propTypes = {
  ...DatePickerIOS.propTypes,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
};

DatePicker.defaultProps = {
  title: '标题',
  cancelText: '取消',
  confirmText: '确认'
};
