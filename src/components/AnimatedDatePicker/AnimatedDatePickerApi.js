import React from 'react';
import AnimatedDatePickerContainer from './AnimatedDatePickerContainer';


let singleInstance = null;

function createInstance(instance) {
  singleInstance = instance;
}

class AnimatedDatePickerApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      visible: false,
      onCancel: () => {
        this.hide();
      }
    };

    this.refContainer = null;
    this.createRefContainer = (instance) => {
      this.refContainer = instance;
    };
  }

  componentWillUnmount() {
    singleInstance = null;
  }

  show(options) {
    if (options.date && this.refContainer) {
      this.refContainer.setDate(options.date);
    }
    this.setState({ ...options, visible: true });
  }

  hide(options) {
    this.setState({ ...options, visible: false });
  }

  render() {
    const { onCancel, onConfirm, ...rest } = this.state;
    return (
      <AnimatedDatePickerContainer
        {...rest}
        ref={this.createRefContainer}
        onCancel={() => {
          if (onCancel) {
            onCancel();
          }
          this.hide();
        }}
        onConfirm={(date) => {
          if (onConfirm) {
            onConfirm(date);
          }
          this.hide();
        }}
      />
    );
  }
}

export function register() {
  return (<AnimatedDatePickerApi ref={createInstance} />);
}

export function show(options) {
  if (singleInstance) {
    singleInstance.show(options);
  }
}


export function hide(options) {
  if (singleInstance) {
    singleInstance.hide(options);
  }
}
