/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import LoginView from './src/Login/LoginView';
import AccountView from "./src/Account/AccountView";
import SettingView from './src/Settitng/SettingView';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginView />
      <AccountView />
      <SettingView />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
})
export default App;
