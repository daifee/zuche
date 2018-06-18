import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import AnimatedPopupBottom from './AnimatedPopupBottom';
import AnimatedMask from '../AnimatedMask';

export default class AnimatedPopupBottomContainer extends React.Component {
  static propTypes = {
    ...AnimatedPopupBottom.propTypes,

    animatedMaskProps: PropTypes.shape({
      ...AnimatedMask.propTypes,
      opacity: PropTypes.number
    }),

    visible: PropTypes.bool,
    duration: PropTypes.number,
    onShowEnd: PropTypes.func,
    onHideEnd: PropTypes.func,
    // ignore this prop 由state.height计算得到
    // eslint-disable-next-line
    translateY: PropTypes.any
  };

  static defaultProps = {
    visible: true,
    duration: 300,
    animatedMaskProps: {
      opacity: 0.3
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
      animationRef: new Animated.Value(0),
      height: 0 // 高度
    };
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = this.props;

    if (visible !== nextProps.visible) {
      if (nextProps.visible) {
        this.timingShow(nextProps);
      } else {
        this.timingHide(nextProps);
      }
    }
  }

  onLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    const { duration, onShowEnd } = this.props;

    if (this.state.height === 0) {
      this.setState({ height: layout.height }, () => {
        Animated.timing(this.state.animationRef, {
          toValue: 1,
          duration: duration
        }).start((params) => {
          if (onShowEnd) onShowEnd(params);
        });
      });
    }
  };


  timingShow() {
    // 因为需要自适应 所以将动画延后到 onLayout执行
    this.setState({ visible: true, height: 0 });
  }

  timingHide(props) {
    const { duration, onHideEnd } = props;
    Animated.timing(this.state.animationRef, {
      toValue: 0,
      duration: duration
    }).start((params) => {
      this.setState({ visible: false }, () => {
        if (onHideEnd) onHideEnd(params);
      });
    });
  }

  render() {
    const { visible, animationRef, height } = this.state;
    const { animatedMaskProps, translateY, ...rest } = this.props;
    let { opacity } = animatedMaskProps;

    if (!visible) return null;
    // fix
    if (height === 0) {
      opacity = 0;
    }

    const opacityRef = animationRef.interpolate({
      inputRange: [0, 1],
      outputRange: [0, opacity]
    });

    const translateYRef = animationRef.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    });

    return (
      <AnimatedPopupBottom
        {...rest}
        animatedMaskProps={{
          ...animatedMaskProps,
          opacity: opacityRef
        }}
        translateY={translateYRef}
        onLayout={this.onLayout}
      />
    );
  }
}
