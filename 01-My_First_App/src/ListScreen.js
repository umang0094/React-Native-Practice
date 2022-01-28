import React from "react";
import { FlatList,Text, StyleSheet } from "react-native";

const ListScreen = () => {
  
  const friends = [
    { name: "umang", age: 20},
    { name: "rahul", age: 21},
    { name: "rohan", age: 30},
    { name: "tapu", age: 25},
    { name: "bhide", age: 32},
  ]
    return (
        
//   Simple Text and View documentation
//     <View style= {styles.colorStyle}>
//       <Text style = {styles.TextSize}>Getting Started With React Native</Text>
//       <Text style = {{fontSize: 20}}>My Name is {name}</Text>
//     </View>

    // FlatList to display list of items
    < FlatList 
    keyExtractor={(friend) => friend.name}
    data = {friends}
    renderItem={(e) => {
      return (<Text style = {styles.TextSize}
      >{e.item.name} -Age {e.item.age}</Text>)
    }}/>
    )
}
const styles = StyleSheet.create({
  TextSize:{
    fontSize: 40,
    textAlign: 'center',
    marginVertical:80
  }
})

export default ListScreen;