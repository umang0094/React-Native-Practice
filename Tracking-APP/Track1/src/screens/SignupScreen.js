import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../Context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext)
 

  return <View style = {styles.container}>
    <NavigationEvents 
      onWillBlur={clearErrorMessage}
    />
        <AuthForm 
          headerText= 'Sign Up For Tracker'
          errorMessage = {state.errorMessage}
          submitButtonText= 'Sign Up'
          onSubmit={signup}
        />
        <NavLink
          routeName= 'Signin'
          text = ' Already have an account? Sign in instead'
        />

      
</View>
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
