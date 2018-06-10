import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SideMenu as styles } from './styles';
import { viewStyle } from '../../propTypes';

import SideMenuItem from './SideMenuItem';


export default function SideMenu(props) {
  const { style, children, ...rest } = props;
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
      <View style={[styles.topDividerStyle]} />
      <View style={[styles.bottomDividerStyle]} />
    </View>
  );
}

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  style: viewStyle,
  topDividerStyle: viewStyle,
  bottomDividerStyle: viewStyle
};

export { SideMenuItem };
