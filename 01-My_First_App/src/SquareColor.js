import React, {useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SquareAdjust from "./reusableComponent/SquareAdjust";


const Color_Increament = 10

const SquareColor = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const colorValidator= (color, change) =>{

        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }
    }

   

    return (
        <View>
            <SquareAdjust  
            onIncrease = {() => colorValidator('red', Color_Increament)}
            onDecrease = {() => colorValidator('red', -1 *Color_Increament)}
            colorName= "Red"/>
            <SquareAdjust
            onIncrease = {() => colorValidator('green', Color_Increament)}
            onDecrease = {() => colorValidator('green', -1 *Color_Increament)}
            colorName= "Green"/>
            <SquareAdjust 
            onIncrease = {() => colorValidator('blue', Color_Increament)}
            onDecrease = {() => colorValidator('blue', -1 *Color_Increament)}
            colorName= "Blue"/>

            <View style = {{
                height: 150, 
                width: 150,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                margin: 30,
                marginLeft: 130
                }}></View>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareColor;