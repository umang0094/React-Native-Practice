import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text style = {styles.TextStyle}>Enter Your Name:</Text>
            <TextInput 
            style = {styles.TextInputStyle}
            autoCapitalize="none"
            autoCorrect = {false}
            value = {name}
            onChangeText={(enterName) => setName(enterName)}
            />
            <Text style = {styles.TextStyle}>Warm Welcome To {name} </Text>

            <Text style = {styles.TextStyle}>Enter Your Password:</Text>
            <TextInput 
            style = {styles.TextInputStyle}
            autoCapitalize="none"
            autoCorrect = {false}
            value = {password}
            onChangeText={(enterName) => setPassword(enterName)}
            />
            {password.length < 5 ? <Text>Password Must be Longer Than 5 Character</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    TextInputStyle:{
        margin:20,
        borderColor: 'black',
        borderWidth: 1
    },
    TextStyle:{
        marginTop:20,
        marginLeft:20,
        fontSize: 20
    }
})

export default TextScreen;