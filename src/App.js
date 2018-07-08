import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';

import store from './store';

import { AnimatedDatePickerApi } from './components/AnimatedDatePicker';
import { register as registerAnimatedToast } from './components/AnimatedToast';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppNavigation persistenceKey="cache-route" />
      </Provider>
      {AnimatedDatePickerApi.register()}
      {registerAnimatedToast()}
    </React.Fragment>
  );
}


export default App;
