import React from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { AnimatedMask as styles } from './styles';

export default function AnimatedMask(props) {
  const { onPress, children, opacity } = props;
  const opacityObj = opacity;

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.animateView, { opacity: opacityObj }]}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.touchableView} />
        </TouchableWithoutFeedback>
      </Animated.View>
      {children}
    </View>
  );
}

AnimatedMask.propTypes = {
  // Animated.Value
  // eslint-disable-next-line
  opacity: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.node
};
