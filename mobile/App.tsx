import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/MainScreen/HomeScreen';

const picsumUrl = 'https://picsum.photos/200/300';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 50,
    flex: 1,
    backgroundColor: '#101114',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    color: '#fff',
  },
  scrollView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
});
