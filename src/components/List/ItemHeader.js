import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ItemHeader as styles } from './styles';
import { TextPrune } from '../Text';

const ViewPropTypesStyle = View.propTypes.style;

export default function ItemHeader(props) {
  const { style, children, ...rest } = props;

  return (
    <View {...rest} style={[styles.container, style]}>
      <TextPrune>{children}</TextPrune>
    </View>
  );
}

ItemHeader.propTypes = {
  style: ViewPropTypesStyle,
  children: PropTypes.node
};
