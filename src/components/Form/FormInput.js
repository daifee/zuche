import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { TextPrune } from '../Text';
import { FormInput as styles } from './styles';
import { viewStyle } from '../../propTypes';


export default function FormInput(props) {
  const {
    label, textInput, style, labelContainerStyle, labelTextStyle, ...rest
  } = props;

  return (
    <View {...rest} style={[styles.container, style]}>
      {label ? (
        <View style={[styles.labelContainer, labelContainerStyle]}>
          <TextPrune style={[styles.labelText, labelTextStyle]}>
            {label}
          </TextPrune>
        </View>
      ) : null}
      <TextInput {...textInput} style={[styles.textInput, textInput.style]} />
    </View>
  );
}

FormInput.defaultProps = {
  textInput: {}
};

FormInput.propTypes = {
  ...View.propTypes,
  label: PropTypes.node,
  labelContainerStyle: viewStyle,
  textInput: PropTypes.shape({
    ...TextInput.propTypes
  })
};
