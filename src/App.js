import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';

import store from './store';

import { PopupBottom } from './components/Popup';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <AppNavigation />
        {PopupBottom.register()}
      </React.Fragment>
    </Provider>
  );
}


export default App;
