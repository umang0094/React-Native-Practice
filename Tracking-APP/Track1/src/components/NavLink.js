import React from 'react';
import { Text, StyleSheet , TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';


const NavLink = ({navigation, text, routeName}) => {
  
  return<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
          <Text style = {styles.TextStyle}>{text}</Text>
        </TouchableOpacity>     
};

const styles = StyleSheet.create({
TextStyle:{
    marginTop: 20,
    fontSize: 18,
    color: 'blue'
  }
});

export default withNavigation(NavLink);