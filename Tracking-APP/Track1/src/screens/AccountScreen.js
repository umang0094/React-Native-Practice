import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../Components/Spacer';
import { Context as AuthContext } from '../Context/AuthContext';
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = () => {
  const {signout} = useContext(AuthContext)

  return <SafeAreaView forceInset = {{top: 'always'}}>
    <Text style={{ fontSize: 48 }}>AccountScreen</Text>
    <Spacer>
      <Button  title = 'Sign Out'  onPress={signout}/>
    </Spacer>
  </SafeAreaView>
};
AccountScreen.navigationOptions = {
  title: 'Setting',
  tabBarIcon: <FontAwesome name='gear' size={20}/>
}
const styles = StyleSheet.create({});

export default AccountScreen;
