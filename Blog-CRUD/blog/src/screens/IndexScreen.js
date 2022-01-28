import React,{useContext} from "react";
import { View, Text, StyleSheet,FlatList, Button, TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'


const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return (
        
        <View>
            
            {/* <Button  title="Add Blog " onPress={ addBlogPost}/> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('Create') }>
                <Feather name="plus" style = {{fontSize: 30,}} />
            </TouchableOpacity> */}
            <FlatList 
            data = {state}
            keyExtractor={(blogpost) => blogpost.title}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style = {styles.viewStyle}>
                        <Text style = {styles.titleStyle}>{item.title}</Text>
                        <TouchableOpacity>
                            <Feather name="trash" style = {styles.iconStyle} onPress={() => deleteBlogPost(item.id)} />
                        </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
            }}/>
        </View>
        
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:() =>  (
          <TouchableOpacity onPress={() => navigation.navigate('Create') }>
            <Feather name="plus" size={30} style = {styles.iconStyle}/>
          </TouchableOpacity>
        )
      };
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop : 20,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10
    },
    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#36aeff'
    },
    iconStyle:{
        fontSize: 25,
        marginRight:10
    }
})


export default IndexScreen;