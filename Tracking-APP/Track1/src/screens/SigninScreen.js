import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../Context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage } = useContext(AuthContext)
 

  return <View style = {styles.container}>
    <NavigationEvents 
      onWillBlur={clearErrorMessage}
    />
        <AuthForm 
          headerText= 'Sign In For Tracker'
          errorMessage = {state.errorMessage}
          submitButtonText= 'Sign In'
          onSubmit={signin}
        />
        <NavLink
          routeName= 'Signup'
          text = ' Do not  have an account? Sign Up instead'
        />     
</View>
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SigninScreen;
