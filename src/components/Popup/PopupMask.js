import React from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { PopuoMask as styles } from './styles';


export default function PopuoMask(props) {
  const { opacity, onPress, children } = props;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.animateView, { opacity: opacity }]}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.touchableView} />
        </TouchableWithoutFeedback>
      </Animated.View>
      {children}
    </View>
  );
}

PopuoMask.propTypes = {
  // AnimatedInterpolation
  // eslint-disable-next-line
  opacity: PropTypes.any.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired
};
