import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword1" options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword2" options={{ headerShown: false }} />
    </Stack>
    <StatusBar backgroundColor="#000" style="light" />
    
    </>
  );
};

export default Layout;
