import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';
// import { View, Text } from 'react-native';

import store from './store';

// import { PopupBottom } from './components/Popup';
// import { AnimatedPopupBottomContainer } from './components/AnimatedPopup';
import { AnimatedDatePickerApi } from './components/AnimatedDatePicker';


// class Demo extends React.Component {
//   state = {
//     visible: true,
//     date: new Date()
//   };

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   render() {
//     const { visible, date } = this.state;

//     return (
//       <AnimatedDatePickerContainer
//         date={date}
//         visible={visible}
//         onCancel={() => {
//           console.log('cancel');
//         }}
//         onConfirm={(date) => {
//           this.setState({ date: date, visible: false });
//         }}
//       />
//     );
//   }
// }

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <AppNavigation />
        {AnimatedDatePickerApi.register()}
      </React.Fragment>
    </Provider>
  );
}


export default App;
