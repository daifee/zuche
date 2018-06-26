import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';

import store from './store';

import { AnimatedDatePickerApi } from './components/AnimatedDatePicker';


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppNavigation persistenceKey="cache-route" />
      </Provider>
      {AnimatedDatePickerApi.register()}
    </React.Fragment>
  );
}


export default App;
