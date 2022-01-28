import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === id
    )


    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content)
    return (
        <View>
            <Text style = {styles.textStyle}>Edit Title:</Text>
            <TextInput 
            style = {styles.inputStyle}
            value = {title}
            onChangeText={(text) => setTitle(text)}
            />
            <Text style = {styles.textStyle}>Edit Content:</Text>
            <TextInput 
            style = {styles.inputStyle}
            value = {content}
            onChangeText={(text) => setContent(text)}
            />
            <View style = {styles.buttonStyle}>
                <Button 
                title="Update BlogPost" 
                onPress ={() => editBlogPost(id, title, content, () => navigation.navigate('Index'))} />
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

export default EditScreen;