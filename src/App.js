import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './AppNavigation';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
