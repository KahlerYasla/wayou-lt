import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { router } from 'expo-router';

import { FONT } from '../constants';

import CustomButton from '../components/shared/CustomButton';
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

  const takeCoordinate = () => {
    console.log("takeCoordinate() and here are the y,x:")
    console.log(coordinate!.latitude + ',' + coordinate!.longitude)

    router.replace("home");
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 41.0423,
          longitude: 29.0137,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
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

      <View style={{
        position: 'absolute',
        right: 16,
        bottom: 16,
      }}>
        <CustomButton
          onPress={takeCoordinate}
          title='confirm'
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            borderWidth: .3,
            borderColor: 'white',
          }}
        />
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    borderRadius: 8,
  },
  coordinateText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 'bold',
  },
});
