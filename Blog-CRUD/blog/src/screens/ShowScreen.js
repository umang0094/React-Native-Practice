import React,{useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {state} = useContext(Context)

    const BlogPost = state.find(
        BlogPost => BlogPost.id === id
        )
    return(
        <View>
            
            <Text style = {styles.titleStyle}>{BlogPost.title}</Text>
            <Text style = {styles.contentStyle}>{BlogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    
    return {
        headerRight:() => ( <TouchableOpacity 
        onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}
        >
            <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
        )}
}
const styles = StyleSheet.create({
    titleStyle:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 15,
    },
    contentStyle:{
        fontSize:20,
        marginHorizontal: 10,
        marginTop: 15,
        borderWidth:2,
        borderColor: '#36aeff',
        padding: 10
    }
})

export default ShowScreen;