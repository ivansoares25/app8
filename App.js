import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './source/components/Routes';
import reducers from './source/reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
