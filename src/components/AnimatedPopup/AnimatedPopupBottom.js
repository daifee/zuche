import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import AnimatedMask from '../AnimatedMask';
import { AnimatedPopupBottom as styles } from './styles';

export default function AnimatedPopupBottom(props) {
  const {
    children, translateY, animatedMaskProps, ...rest
  } = props;

  return (
    <AnimatedMask {...animatedMaskProps}>
      <Animated.View
        {...rest}
        style={[
          styles.container,
          {
            transform: [{ translateY: translateY }]
          }
        ]}
      >
        {children}
      </Animated.View>
    </AnimatedMask>
  );
}

AnimatedPopupBottom.propTypes = {
  children: PropTypes.node,
  // Animated.Value
  // eslint-disable-next-line
  translateY: PropTypes.object.isRequired,
  animatedMaskProps: PropTypes.shape({
    ...AnimatedMask.propTypes
  })
};
