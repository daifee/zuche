import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ItemBox as style } from './styles';


export default function ItemBox(props) {
  const {
    title, children, childrenContainerStyle, ...rest
  } = props;

  return (
    <View {...rest} style={[style.container, rest.style]}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
      <View style={[style.childrenContainer, childrenContainerStyle]}>{children}</View>
    </View>
  );
}

ItemBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  childrenContainerStyle: PropTypes.number,
};
