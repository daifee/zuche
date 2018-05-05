import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { Button as styles } from './styles';

const TouchableHighlightPropTypesStyle = TouchableHighlight.propTypes.style;
const ViewPropTypesStyle = View.propTypes.style;

export default function Button(props) {
  const {
    children, style, contentContainerStyle, ...rest
  } = props;

  return (
    <TouchableHighlight style={[styles.container, style]} {...rest}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  style: TouchableHighlightPropTypesStyle,
  children: PropTypes.node.isRequired,
  contentContainerStyle: ViewPropTypesStyle
};

