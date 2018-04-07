import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ItemBox as ItemBoxStyle } from './styles';


export default function ItemBox(props) {
  const {
    title, children, childrenContainerStyle, ...rest
  } = props;

  return (
    <View {...rest} style={[ItemBoxStyle.container, rest.style]}>
      <View style={ItemBoxStyle.titleContainer}>
        <Text style={ItemBoxStyle.title}>{title}</Text>
      </View>
      <View style={[ItemBoxStyle.childrenContainer, childrenContainerStyle]}>
        {children}
      </View>
    </View>
  );
}

ItemBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  childrenContainerStyle: PropTypes.number,
};
