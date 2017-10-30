/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import MainScreen from './containers/MainScreen';

export default class App extends PureComponent<{}> {
  render() {
    const store = configureStore();
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
