import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import PopupMask from './PopupMask';
import { PopupBottom as styles } from './styles';

import { SHOW_OPTIONS, HIDE_OPTIONS } from './flow.type';

// 配置
const DURATION = 300;
const OPACITY = 0.3;

function PopupBottom(props) {
  const {
    content, translateY, opacity, onClose, onLayout
  } = props;
  return (
    <PopupMask
      opacity={opacity}
      onPress={onClose}
    >
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: translateY }] }
        ]}
        onLayout={onLayout}
      >
        {content}
      </Animated.View>
    </PopupMask>
  );
}

PopupBottom.propTypes = {
  // AnimatedInterpolation
  // eslint-disable-next-line
  opacity: PropTypes.any.isRequired,
  // AnimatedInterpolation
  // eslint-disable-next-line
  translateY: PropTypes.any.isRequired,
  content: PropTypes.node,
  onClose: PropTypes.func
};


class PopupBottomContainer extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    content: PopupBottom.propTypes.content,
  };

  static defaultProps = {
    height: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      animation: new Animated.Value(0),
      visible: false,
      height: props.height,
      content: props.content
    };
  }

  onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;

    if (this.state.height === 0) {
      this.setState({ height: layout.height });
    }
  };

  show(options: SHOW_OPTIONS = {}) {
    const {
      duration, content, callback
    } = options;

    this.setState({ height: 0, content, visible: true }, () => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: duration || DURATION
      }).start(() => {
        if (callback) {
          callback();
        }
      });
    });
  }

  hide(options: HIDE_OPTIONS = {}) {
    const { callback, duration } = options;

    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: duration || DURATION
    }).start(() => {
      this.setState({ visible: false }, callback);
    });
  }

  render() {
    const {
      visible, animation, height, content
    } = this.state;

    if (!visible) return null;

    const opacityMax = height === 0 ? 0 : OPACITY;

    const opacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, opacityMax]
    });
    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    });

    return (
      <PopupBottom
        opacity={opacity}
        translateY={translateY}
        content={content}
        onClose={() => {
          this.hide();
        }}
        onLayout={this.onLayout}
      />
    );
  }
}


let instance = null;

export function register(props) {
  return (
    <PopupBottomContainer
      {...props}
      ref={(el) => { instance = el; }}
    />
  );
}


export function hide(options) {
  if (instance) {
    instance.hide(options);
  }
}

export function show(options) {
  if (instance) {
    instance.show(options);
  }
}

