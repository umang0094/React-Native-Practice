import React, {useContext, useState} from "react";
import { View, Text,TextInput, StyleSheet,Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) =>{

    const {addBlogPost} = useContext(Context)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <View>
            <Text style = {styles.textStyle}>Enter Title:</Text>
            <TextInput 
            style = {styles.inputStyle}
            value = {title}
            onChangeText={(text) => setTitle(text)}
            />
            <Text style = {styles.textStyle}>Enter Content:</Text>
            <TextInput 
            style = {styles.inputStyle}
            value = {content}
            onChangeText={(text) => setContent(text)}
            />
            <View style = {styles.buttonStyle}>
            <Button title="Add BlogPost" onPress={() => addBlogPost(title,content, () => navigation.navigate('Index'))} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        marginLeft: 10,
        marginTop:10,
        color: '#36aeff'
    },
    inputStyle:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 10,
    },
    buttonStyle:{
        margin: 30,
        fontSize: 20
    }
})


export default CreateScreen;