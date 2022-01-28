import React from "react";
import {View, Text, StyleSheet,Image} from "react-native";

const ImageDetail = (props) =>{
    return <View>
        <Image source={props.imageSource}/>
        <Text>Image Name ={props.imageTitle}</Text>
        <Text>Image Quality = {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ImageDetail;