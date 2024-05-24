import { useFonts } from "expo-font";
import { Redirect } from "expo-router";

export default function Index() {
    const [fontsLoaded] = useFonts({
        UbuntuMonoRegular: require("../assets/fonts/UbuntuMono-Regular.ttf"),
        UbuntuMonoBold: require("../assets/fonts/UbuntuMono-Bold.ttf"),
        UbuntuMonoItalic: require("../assets/fonts/UbuntuMono-Italic.ttf"),
        UbuntuMonoBoldItalic: require("../assets/fonts/UbuntuMono-BoldItalic.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Redirect href="/routes" />
    );
}