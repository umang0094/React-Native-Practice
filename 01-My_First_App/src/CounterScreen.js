import React, {useState} from "react";
import {View, Text, StyleSheet,Button} from "react-native";

const CounterScreen = () =>{

    const [counter, setCounter] = useState(0);
    return <View>
        <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
        />
        <Button
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
        />
        <Text style = {{marginTop: 40, textAlign: "center", fontSize: 30}}>Counter Count : {counter}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;