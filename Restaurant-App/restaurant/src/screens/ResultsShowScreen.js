import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <ScrollView nestedScrollEnabled={true}>
        <Text style = {styles.nameStyle}>{result.name}</Text>
        <View>
          <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </View>
        
        <Text style = {styles.nameStyle}>Country :{result.location.country}</Text>
        <Text style = {styles.nameStyle}>Latitude :{result.coordinates.latitude}</Text>
        <Text style = {styles.nameStyle}>Longitude :{result.coordinates.longitude}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameStyle:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '900',
    padding: 10
  },
  image: {
    height: 150,
    width: 250,
    marginHorizontal: 80,
    marginVertical: 10,
    borderRadius: 20
  }
});

export default ResultsShowScreen;
