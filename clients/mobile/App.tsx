import React, { useRef } from "react";
import { StyleSheet, View, Animated, Text, PanResponder } from "react-native";
import FadeInView from "./components/home-screen-components/FadeInView";

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create(
      {
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: () => {
          pan.extractOffset();
        },
      },
    ),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }], }}
        {...panResponder.panHandlers}>
        <View style={{ backgroundColor: 'yellow', height: 50, width: 50 }} >
          <Text>
            Drag This!
          </Text>
        </View>
      </Animated.View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});