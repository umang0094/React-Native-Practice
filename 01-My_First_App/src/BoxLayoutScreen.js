import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxLayoutScreen = () => {
    return (
        <View>
            <Text style={styles.TextStyle}>APP</Text>
            <View style = {styles.ViewParent}>
                <View style = {styles.VeiwOneStyle}></View>
                <View style = {styles.VeiwTwoStyle}></View>
                <View style = {styles.VeiwThreeStyle}></View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 20,
        borderColor: 'black',
        borderWidth:3,
        padding: 10,
        textAlign: 'center',
        fontWeight: '900'
    },
    ViewParent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    VeiwOneStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    VeiwTwoStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },
    VeiwThreeStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
})

export default BoxLayoutScreen;