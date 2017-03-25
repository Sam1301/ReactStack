import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Header text={'TechStack'} />
    </Provider>
  );
};

export default App;
