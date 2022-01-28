import React, { Components } from "react";
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native'

const HomeScreen = (props) => {
    // console.log(props)
      return (

    <View style = {{marginVertical:20}}>
      <Text style = {styles.TextStyle}>Home Screen Layout </Text>
      <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Components")}
          title='Go to ComponentScreen'
          />
       </View>
       <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("ListTutorial")}
          title='Go to ListScreen'
          />
       </View>
       <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Image")}
          title='Go to ImageScreen'
          />
        </View>
        <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Counter")}
          title='Go to CounterScreen'
          />
        </View>
        <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("randomColor")}
          title='Go to RandomColorScreen'
          />
        </View>
        <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Square")}
          title='Go to SquareColorScreen'
          />
        </View>
        <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Text")}
          title='Go to InputTextScreen'
          />
        </View>
        <View style = {styles.Space}>
          <Button 
          onPress={()=> props.navigation.navigate("Box")}
          title='Go to BoxLayoutScreen'
          />
        </View>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("ListTutorial")}>
        <Text>Go to ListScreen (Using TouchableOpacity)</Text>
      </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
    TextStyle:{
        fontSize : 30,
        textAlign: "center",
        marginBottom: 30
    },
    
    Space: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
        
    }
})
export default HomeScreen;