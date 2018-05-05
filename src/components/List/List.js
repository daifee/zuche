import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List as styles } from './styles';

const ViewPropTypesStyle = View.propTypes.style;

export default function List(props) {
  const { style, children, ...rest } = props;
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
      <View style={[styles.topDividerStyle]} />
      <View style={[styles.bottomDividerStyle]} />
    </View>
  );
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypesStyle,
  topDividerStyle: ViewPropTypesStyle,
  bottomDividerStyle: ViewPropTypesStyle
};
