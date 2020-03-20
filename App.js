import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './src/utils/reducers/index';
import AppContainer from './src/navigations/AppNavigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
