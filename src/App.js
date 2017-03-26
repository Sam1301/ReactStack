import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import { Header } from './components/common';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header text={'TechStack'} />
      <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
