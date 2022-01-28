import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  // createBottomTabNavigator,
  // createStackNavigator
} from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { View, Text, StyleSheet } from "react-native";
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Singup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)