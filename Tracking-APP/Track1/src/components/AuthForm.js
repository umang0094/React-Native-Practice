import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input , Button} from 'react-native-elements'
import Spacer from './Spacer'


const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <>
  <Spacer>
      <Text h3>{headerText}</Text>
      <Input 
        label ='Email'
        value = {email}
        onChangeText = {setEmail}
        autoCapitalize = 'none'
        autoCorrect = {false}
      />
      <Input 
        secureTextEntry
        label = 'Password'
        value = {password}
        onChangeText = {setPassword}
        autoCapitalize = 'none'
        autoCorrect = {false}
      />
      {errorMessage ? <Text style = {styles.errorMessage}>{errorMessage}</Text> : null}
      <Button 
        title={submitButtonText}
        onPress={() => onSubmit({email,password})}
        />
      </Spacer>
      
</>
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  errorMessage:{
    margin: 12,
    fontSize: 18,
    color: 'red'
  },
  TextStyle:{
    marginTop: 20,
    fontSize: 18,
    color: 'blue'
  }
});

export default AuthForm;