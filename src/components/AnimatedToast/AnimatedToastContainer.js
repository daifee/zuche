import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import AnimatedToast from './AnimatedToast';


export default class AnimatedToastContainer extends React.Component {
  static propTypes = {
    ...AnimatedToast.propTypes,
    visible: PropTypes.bool,
    duration: PropTypes.number,
    onShowEnd: PropTypes.func,
    onHideEnd: PropTypes.func,
    // 没用属性
    opacity: PropTypes.bool
  };

  static defaultProps = {
    visible: true,
    duration: 500
  };


  constructor(props) {
    super(props);
    const value = props.visible ? 1 : 0;
    this.state = {
      visible: props.visible,
      animationRef: new Animated.Value(value)
    };
  }

  componentDidMount() {
    // this.timingShow(this.props);
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

  timingShow(props) {
    const { duration, onShowEnd } = props;

    this.setState({ visible: true }, () => {
      Animated.timing(this.state.animationRef, {
        toValue: 1,
        duration: duration
      }).start((params) => {
        if (onShowEnd) {
          onShowEnd(params);
        }
      });
    });
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
    const { visible, animationRef } = this.state;
    if (!visible) return null;

    const opacityRef = animationRef.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (<AnimatedToast {...this.props} opacity={opacityRef} />);
  }
}
