import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';
// import { View, Text } from 'react-native';

import store from './store';

// import { PopupBottom } from './components/Popup';
// import { AnimatedPopupBottomContainer } from './components/AnimatedPopup';

// class Demo extends React.Component {
//   state = {
//     visible: true
//   };

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   render() {
//     const { visible } = this.state;

//     return (
//       <AnimatedPopupBottomContainer visible={visible}>
//         <View>
//           <Text>wrere{Date.now()}</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//           <Text>wrere</Text>
//         </View>
//       </AnimatedPopupBottomContainer>
//     );
//   }
// }

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <AppNavigation />
      </React.Fragment>
    </Provider>
  );
}


export default App;
