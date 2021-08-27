/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './src/Reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './src/Sagas';
import loginSaga from './src/Login/LoginSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
class NewApp extends Component {
  render() {
    return (
      // 挂载store,让app内部所有组件都可以使用
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => NewApp);
