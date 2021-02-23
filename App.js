/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {registerRootComponent} from 'expo';
import React from 'react';
import AppNavigator from './src/navigations/Navigator';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
class App extends React.Component {
    
  render() {
      
    return (   <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>);
  }
}

registerRootComponent(App);


