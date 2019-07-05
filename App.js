import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Routes from './source/components/Routes';
import reducers from './source/reducers';

export default class App extends Component {

  componentDidMount() {
      // Your web app's Firebase configuration
      let firebaseConfig = {
        apiKey: "AIzaSyDJ_Qf0kVKvUocrLadfNIzt06t25CKqYOM",
        authDomain: "whatsapp-clone-8a0a3.firebaseapp.com",
        databaseURL: "https://whatsapp-clone-8a0a3.firebaseio.com",
        projectId: "whatsapp-clone-8a0a3",
        storageBucket: "",
        messagingSenderId: "511040691388",
        appId: "1:511040691388:web:302809630b138add"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
