import React from 'react';
import AnimatedPopupBottomContainer from './AnimatedPopupBottomContainer';

let singleInstance = null;

function createInstance(instance) {
  singleInstance = instance;
}

class AnimatedPopupBottomApi extends React.Component {
  state = {
    visible: false,
    onShowEnd: () => {},
    onHideEnd: () => {},
    duration: 300,
    content: null
  };

  show(options) {
    this.setState({ ...options, visible: true });
  }

  hide(options) {
    this.setState({ ...options, visible: false });
  }

  render() {
    const { content, ...rest } = this.state;

    return (
      <AnimatedPopupBottomContainer {...rest}>
        {content}
      </AnimatedPopupBottomContainer>
    );
  }
}

export function register() {
  if (singleInstance) return singleInstance;
  return (<AnimatedPopupBottomApi ref={createInstance} />);
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
