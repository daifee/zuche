import React from 'react';
import { AnimatedPopupBottomContainer } from '../AnimatedPopup';
import DatePicker from './DatePicker';


export { DatePicker };


export default class AnimatedDatePicker extends React.Component {
  show() {
    // todo
  }

  hide() {
    // todo
  }
  render() {
    return (
      <AnimatedPopupBottomContainer>
        <DatePicker />
      </AnimatedPopupBottomContainer>
    );
  }
}

