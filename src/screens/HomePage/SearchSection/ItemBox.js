import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { ItemBox as styles } from './styles';


export default function ItemBox(props) {
  const {
    title, children, childrenContainerStyle, ...rest
  } = props;

  return (
    <TouchableOpacity onPress={() => {}} {...rest} style={[styles.container, rest.style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.childrenContainer, childrenContainerStyle]}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

ItemBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  childrenContainerStyle: PropTypes.number,
};
