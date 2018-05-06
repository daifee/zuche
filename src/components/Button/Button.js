import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Button as styles } from './styles';
import { TextPrune } from '../Text';

const ViewPropTypesStyle = View.propTypes.style;
const TextPropTypesStyle = TextPrune.propTypes.style;

export default function Button(props) {
  const {
    children, style, contentContainerStyle, textStyle, ...rest
  } = props;

  return (
    <TouchableHighlight style={[styles.container, style]} {...rest}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <TextPrune style={[styles.textStyle, textStyle]}>{children}</TextPrune>
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  ...TouchableHighlight.propTypes,
  children: PropTypes.node.isRequired,
  contentContainerStyle: ViewPropTypesStyle,
  textStyle: TextPropTypesStyle
};

