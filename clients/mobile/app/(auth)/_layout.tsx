import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
};

const Layout = () => {
    // const [fontsLoaded] = useFonts({
    //     UbuntuMonoRegular: require("../assets/fonts/UbuntuMono-Regular.ttf"),
    //     UbuntuMonoBold: require("../assets/fonts/UbuntuMono-Bold.ttf"),
    //     UbuntuMonoItalic: require("../assets/fonts/UbuntuMono-Italic.ttf"),
    //     UbuntuMonoBoldItalic: require("../assets/fonts/UbuntuMono-BoldItalic.ttf"),
    // });

    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
        <Stack />
    )
};

export default Layout;