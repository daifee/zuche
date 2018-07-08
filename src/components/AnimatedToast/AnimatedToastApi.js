import React from 'react';
import AnimatedToastContainer from './AnimatedToastContainer';


type TYPE = 'loading' | 'success' | 'error' | 'warning' | 'info';
type CONTENT = string;
type OPTIONS = {
  duration: number,
  onShowEnd: () => {},
  onHideEnd: () => {}
};


let singleInstance = null;


function createInstance(instance) {
  singleInstance = instance;
}

class AnimatedToastApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      type: 'info',
      content: '',
      onShowEnd: () => {},
      onHideEnd: () => {}
    };
  }

  componentWillUnmount() {
    singleInstance = null;
  }

  show(type, content, options) {
    this.setState({
      ...options, type, content, visible: true
    });
  }

  hide(options) {
    this.setState({
      ...options, visible: false
    });
  }

  render() {
    return (
      <AnimatedToastContainer {...this.state} />
    );
  }
}

export function register() {
  return (<AnimatedToastApi ref={createInstance} />);
}

export function hide(options: OPTIONS) {
  if (singleInstance) {
    singleInstance.hide(options);
  }
}

export function show(type: TYPE, content: CONTENT, options: OPTIONS) {
  if (singleInstance) {
    singleInstance.show(type, content, options);
  }

  return hide;
}

export function loading(content: CONTENT = '加载中...', options: OPTIONS) {
  return show('loading', content, options);
}

export function success(content: CONTENT, options: OPTIONS) {
  return show('success', content, options);
}

export function error(content: CONTENT, options: OPTIONS) {
  return show('error', content, options);
}

export function warning(content: CONTENT, options: OPTIONS) {
  return show('warning', content, options);
}

export function info(content: CONTENT, options: OPTIONS) {
  return show('info', content, options);
}

