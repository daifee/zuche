import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Header as styles } from './styles';
import { viewStyle } from '../../propTypes';


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
  style: viewStyle,
  left: PropTypes.node,
  leftContainerStyle: viewStyle,
  right: PropTypes.node,
  rightContainerStyle: viewStyle,
  center: PropTypes.node,
  centerContainerStyle: viewStyle
};
