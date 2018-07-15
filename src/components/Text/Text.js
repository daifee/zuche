import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { TextComponent as styles } from './styles';
import { textStyle } from '../../propTypes';


export default function TextComponent(props) {
  const {
    children, level, style, ...rest
  } = props;

  if (!children) {
    return null;
  }
  return (
    <Text {...rest} style={[styles[level], style]}>{children}</Text>
  );
}

TextComponent.defaultProps = {
  level: 'p'
};

TextComponent.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'p']),
  style: textStyle
};
