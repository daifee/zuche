import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import Toast from './Toast';
import { AnimdatedToast as styles } from './styles';

export default function AnimdatedToast(props) {
  const { type, content, opacity } = props;

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: opacity }
      ]}
    >
      <Toast type={type} content={content} />
    </Animated.View>
  );
}


AnimdatedToast.propTypes = {
  ...Toast.propTypes,
  // Animated.Value
  opacity: PropTypes.instanceOf(Object).isRequired
};
