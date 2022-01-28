import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import { HeaderHeightContext } from "react-navigation-stack";

const RandomColor = () =>{

    const [colors, setColors] = useState([])
    console.log(colors)
    return <View>
        <Button 
        title="Add a Random Color"
        onPress={() => setColors([...colors,randomrgb()])}/>

        <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
           return <View style = { { marginLeft: 150, marginTop: 20, height: 100, width: 100, backgroundColor: item}}></View>}
        } />
        
    </View>
}

const randomrgb = () => {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({});

export default RandomColor;