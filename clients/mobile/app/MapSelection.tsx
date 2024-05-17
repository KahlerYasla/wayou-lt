import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FONT } from '../constants';

export default function App() {
  const [circleRadius, setCircleRadius] = useState(100); // Başlangıç yarıçapı

  // Orta Noktanın Koordinatları
  const centerCoordinate = {
    latitude: 41.0423,
    longitude: 29.0137,
  };
  
  const [center,setCenter] = useState(centerCoordinate)

  return (
    <View style={styles.container}>
      <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: centerCoordinate.latitude,
              longitude: centerCoordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(region) => {
              setCenter({
                latitude: region.latitude,
                longitude: region.longitude,
              });
            }}
          >
            <Circle
              center={center}
              radius={circleRadius}
              fillColor="rgba(0, 0, 0, 0.5)"
              strokeColor="black"
            />
          </MapView>
      
          <View style={{ position:'absolute',bottom:70,flex:1,flexDirection:'row',left:"10%", padding:10}}>
      <TouchableOpacity
        style={{
          marginRight:5,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          padding: 10,
          borderRadius: 8,
          }}
        onPress={() => ""}
      >
        <Text style={{
         fontFamily:FONT.regular,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}
         >Mark As Origin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
         marginLeft:5,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}
        onPress={() => ""}
      >
        <Text style={{
          
         fontFamily:FONT.regular,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}>Clear The Mark</Text>
      </TouchableOpacity>
      </View>
                
      <View style={{ position:'absolute',bottom:0,flex:1,flexDirection:'row',left:"15%", padding:10}}>
      <TouchableOpacity
        style={{
          marginRight:5,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          padding: 10,
          borderRadius: 8,
          }}
        onPress={() => setCircleRadius(circleRadius + 100)}
      >
        <Text style={{
         fontFamily:FONT.regular,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}
         >+</Text>
      </TouchableOpacity>
      <Text style={{backgroundColor:"black",alignSelf:'center',justifyContent:'center',padding:20,borderRadius:8,fontFamily:FONT.regular,color:"white"}}>Radius : {circleRadius} m</Text>
      <TouchableOpacity
        style={{
          marginLeft:5,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}
        onPress={() => setCircleRadius(circleRadius - 100)}
      >
        <Text style={{
          
         fontFamily:FONT.regular,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         padding: 10,
         borderRadius: 8,
         }}>-</Text>
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
  button: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
