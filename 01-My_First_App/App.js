import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BoxLayoutScreen from "./src/BoxLayoutScreen";
import ComponentScreen from "./src/ComponentScreen";
import CounterScreen from "./src/CounterScreen";
import HomeScreen from "./src/HomeScreen";
import ImageScreen from "./src/ImageScreen";
import ListScreen from "./src/ListScreen"
import RandomColor from "./src/RandomColor";
import SquareColor from "./src/SquareColor";
import TextScreen from "./src/TextScreen";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ListTutorial: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    randomColor: RandomColor,
    Square: SquareColor,
    Text: TextScreen,
    Box: BoxLayoutScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

// import React from 'react'
// import {View, Text, StyleSheet, Button , TouchableOpacity} from 'react-native'
// const App = ()=>{



// }



// export default App