import { Stack } from "expo-router";
import { View } from "react-native";

const Layout = () => {
  return (

    <Stack screenOptions={{
      headerShown: false,
      navigationBarHidden: false,
    }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="send-email" />
      <Stack.Screen name="verify-code" />
      <Stack.Screen name="new-pwd" />
    </Stack>

  );
};

export default Layout;
