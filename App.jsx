/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {registerRootComponent} from 'expo';
import React from 'react';
import AppNavigator from './src/navigations/Navigator';


class App extends React.Component {
  render() {
    return (<AppNavigator/>);
  }
}

registerRootComponent(App);


