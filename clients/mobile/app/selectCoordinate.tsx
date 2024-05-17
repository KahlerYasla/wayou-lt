import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FONT } from '../constants';

interface Coordinate {
  latitude: number;
  longitude: number;
}

export default function App() {
  const [coordinate, setCoordinate] = useState<Coordinate | null>(null);

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    setCoordinate(coordinate);
  };

  const takeCoordinate =() => {
    console.log("takecoordinate")
    console.log(coordinate)
  }
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        onPress={handleMapPress}
        initialRegion={{
          latitude: 41.0423,
          longitude: 29.0137,
          latitudeDelta:  0.0421,
          longitudeDelta:  0.0421,
        }}
      >
        {coordinate && <Marker coordinate={coordinate} />}
      </MapView>
      {coordinate && (
        <View style={styles.coordinateContainer}>
          <Text style={styles.coordinateText}>
            Latitude: {coordinate.latitude.toFixed(6)}
          </Text>
          <Text style={styles.coordinateText}>
            Longitude: {coordinate.longitude.toFixed(6)}
          </Text>
        </View>
      )}
      <View style={{position:'absolute',left:"35%",bottom:10}}>
        <TouchableOpacity onPress={takeCoordinate}>
        <Text style={{backgroundColor:"blue",fontSize:30,borderRadius:10,fontFamily:FONT.regular}}>CONFİRM </Text>
        </TouchableOpacity>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  coordinateContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 8,
  },
  coordinateText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
