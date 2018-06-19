import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import { AnimatedPopupBottomContainer } from '../AnimatedPopup';


export default class AnimatedDatePickerContainer extends React.Component {
  static propTypes = {
    ...DatePicker.propTypes,
    animatedPopupBottomContainerProps: PropTypes.shape({
      ...AnimatedPopupBottomContainer.propTypes
    }),
    visible: PropTypes.bool,
    onDateChange: PropTypes.func
  };

  static defaultProps = {
    visible: true
  };

  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    };
  }

  onDateChange = (date) => {
    this.setState({ date: date });
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  onConfirm = () => {
    if (this.props.onConfirm) {
      this.props.onConfirm(this.state.date);
    }
  };

  render() {
    const { date } = this.state;
    const { animatedPopupBottomContainerProps, visible, ...rest } = this.props;

    return (
      <AnimatedPopupBottomContainer
        {...animatedPopupBottomContainerProps}
        visible={visible}
        animatedMaskProps={{
          opacity: 0.3,
          onPress: this.onCancel
        }}
      >
        <DatePicker
          {...rest}
          date={date}
          onDateChange={this.onDateChange}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
      </AnimatedPopupBottomContainer>
    );
  }
}

