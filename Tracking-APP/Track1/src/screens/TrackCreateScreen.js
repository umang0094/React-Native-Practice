import '../_mockLocation'
import React,{ useContext, useCallback} from 'react';
import {  StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from './Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../Components/TrackForm';
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {
  const {state, addLocation} = useContext(LocationContext)
  const callback = useCallback(location =>{
    addLocation(location, state.recording)
  }, [state.recording])
  const [err] = useLocation(isFocused || state.recording, callback)
 
  return (
    <SafeAreaView forceInset = {{top : 'always'}}>
      <Text h2>Create A Track</Text>
      <Map/>
      {err? <Text>Please enable location services</Text> : null}
      <TrackForm/>
    </SafeAreaView>
  )
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20}/>
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
