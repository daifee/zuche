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
    children, translateY, opacity, onClose, onChildrenWrapperLayout
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
        onLayout={onChildrenWrapperLayout}
      >
        {children}
      </Animated.View>
    </PopupMask>
  );
}

PopupBottom.propTypes = {
  // AnimatedInterpolation
  // eslint-disable-next-line
  opacity: PropTypes.object.isRequired,
  // AnimatedInterpolation
  // eslint-disable-next-line
  translateY: PropTypes.object.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onChildrenWrapperLayout: PropTypes.func
};


export class PopupBottomContainer extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    children: PopupBottom.propTypes.children,
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
      children: props.children
    };
  }

  onChildrenWrapperLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;

    if (this.state.height === 0) {
      this.setState({ height: layout.height });
    }
  };

  show(options: SHOW_OPTIONS = {}) {
    const {
      duration, content, callback
    } = options;
    const { animation, visible } = this.state;

    if (visible) return;

    this.setState({ height: 0, children: content, visible: true }, () => {
      Animated.timing(animation, {
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
    const { animation, visible } = this.state;

    if (!visible) return;

    Animated.timing(animation, {
      toValue: 0,
      duration: duration || DURATION
    }).start(() => {
      this.setState({ visible: false }, callback);
    });
  }

  render() {
    const {
      visible, animation, height, children
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
        onClose={() => {
          this.hide();
        }}
        onChildrenWrapperLayout={this.onChildrenWrapperLayout}
      >
        {children}
      </PopupBottom>
    );
  }
}


let singleInstance = null;

export function register(props) {
  return (
    <PopupBottomContainer
      {...props}
      ref={(el) => { singleInstance = el; }}
    />
  );
}


export function hide(options: HIDE_OPTIONS) {
  if (singleInstance) {
    singleInstance.hide(options);
  }
}

export function show(options: SHOW_OPTIONS) {
  if (singleInstance) {
    singleInstance.show(options);
  }
}

