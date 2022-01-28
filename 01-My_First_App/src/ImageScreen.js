import React from "react";
import {View, Text, StyleSheet,Image} from "react-native";
import ImageDetail from "./reusableComponent/ImageDetail";

const ImageScreen = () =>{
    return <View style = {styles.CenterStyle}>
        <ImageDetail imageTitle='forest' imageSource = {require("../assests/forest.jpg")}  score = {4}/>
        <ImageDetail imageTitle='beach' imageSource ={require("../assests/beach.jpg")} score = {7}/>
        <ImageDetail imageTitle='mountain' imageSource = {require("../assests/mountain.jpg")} score = {6}/>
    </View>
}

const styles = StyleSheet.create({
    CenterStyle:{
        margin: 80,
        marginLeft: 100
    }
});

export default ImageScreen;