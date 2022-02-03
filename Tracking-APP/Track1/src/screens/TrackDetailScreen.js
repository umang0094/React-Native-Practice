import React, {useContext} from 'react';
import {StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../Context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {

  const {state} =useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const initialCoords = track.locations[0].coords

  const track = state.find(track => track._id ===_id)
    return <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
      style = {styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
};

const styles = StyleSheet.create({
  map:{
    height:300
  }
});

export default TrackDetailScreen;
