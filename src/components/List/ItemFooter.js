import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ItemFooter as styles } from './styles';
import { TextPrune } from '../Text';

const ViewPropTypesStyle = View.propTypes.style;

export default function ItemFooter(props) {
  const { style, children, ...rest } = props;

  return (
    <View {...rest} style={[styles.container, style]}>
      <TextPrune>{children}</TextPrune>
    </View>
  );
}

ItemFooter.propTypes = {
  style: ViewPropTypesStyle,
  children: PropTypes.node
};
