import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ItemBody as styles } from './styles';
import { TextPrune } from '../Text';
import { viewStyle } from '../../propTypes';


export default function ItemBody(props) {
  const { style, children, ...rest } = props;

  return (
    <View {...rest} style={[styles.container, style]}>
      <TextPrune>{children}</TextPrune>
    </View>
  );
}

ItemBody.propTypes = {
  style: viewStyle,
  children: PropTypes.node
};
