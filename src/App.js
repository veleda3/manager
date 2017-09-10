import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBY3ycnhKJeZv-MBqBlpt8U6K6YCjQZWjQ',
      authDomain: 'employee-management-aa3f3.firebaseapp.com',
      databaseURL: 'https://employee-management-aa3f3.firebaseio.com',
      projectId: 'employee-management-aa3f3',
      storageBucket: '',
      messagingSenderId: '162734149306'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
