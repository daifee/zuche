import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header as styles } from './styles';

const ViewPropTypesStyle = View.propTypes.style;

export default function Header(props) {
  const {
    style,
    left,
    leftContainerStyle,
    center,
    centerContainerStyle,
    right,
    rightContainerStyle
  } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {center || null}
      </View>
      <View style={[styles.leftContainer, leftContainerStyle]}>
        {left || null}
      </View>
      <View style={[styles.rightContainer, rightContainerStyle]}>
        {right || null}
      </View>
    </View>
  );
}

Header.propTypes = {
  style: ViewPropTypesStyle,
  left: PropTypes.node,
  leftContainerStyle: ViewPropTypesStyle,
  right: PropTypes.node,
  rightContainerStyle: ViewPropTypesStyle,
  center: PropTypes.node,
  centerContainerStyle: ViewPropTypesStyle
};
