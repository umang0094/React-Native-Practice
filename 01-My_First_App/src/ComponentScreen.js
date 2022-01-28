import React from "react";
import {Text, StyleSheet} from 'react-native'

const ComponentScreen = () =>{
    return <Text style = {styles.TextStyle}>Hello Umang</Text>
}

const styles = StyleSheet.create({
    TextStyle:{
        fontSize : 30
    },
    centerText: {
        textAlign: "center"
    }
})
export default ComponentScreen;