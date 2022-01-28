import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const SquareAdjust = (props) => {
    return (
        <View style = {styles.Margin}>
            <Text style = {styles.TextStyle}>{props.colorName}</Text>
            <Button 
            onPress={() => props.onIncrease()}
            title = {`Increase ${props.colorName}`} />
            <Button 
            onPress={() => props.onDecrease()}
            title = {`Decrease ${props.colorName}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    Margin:{
        margin: 20
    },
    TextStyle:{
        fontSize: 30
    }
});

export default SquareAdjust;