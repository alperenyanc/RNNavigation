import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'






export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Detail:{
    screen: DetailScreen
  },  
  Home: {
    screen: HomeScreen,
  },
 
},
// you can change initial Route name. example 'Home'
{initialRouteName:'Detail'});


const AppContainer = createAppContainer(AppNavigator);

