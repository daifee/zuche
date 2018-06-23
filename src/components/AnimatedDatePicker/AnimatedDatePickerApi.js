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
  }

  componentWillUnmount() {
    singleInstance = null;
  }

  show(options) {
    this.setState({ ...options, visible: true });
  }

  hide(options) {
    this.setState({ ...options, visible: false });
  }

  render() {
    return (<AnimatedDatePickerContainer {...this.state} />);
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
