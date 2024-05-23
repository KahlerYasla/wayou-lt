import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView, View, Image, StyleSheet, ScrollView } from "react-native";

// constants
import images from "../../constants/images";
import icons from "../../constants/icons";

// components
import CustomButton from "../../components/shared/CustomButton";
import CustomText from "../../components/shared/CustomText";

const Explorer = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <CustomText style={styles.title}>Explorer</CustomText>

                    <CustomText style={styles.subtitle}>Discover new places from our Community</CustomText>
                    <CustomText style={styles.subtitle}>
                        This feature will be available as soon as we have big enough community
                    </CustomText>

                    <Image style={styles.image} source={images.profileImage} resizeMode="cover" />

                    <CustomButton
                        title="Buy me a coffee"
                        style={styles.button}
                        onPress={() => router.push("decks")}
                    />

                    <Image style={styles.icon} source={icons.coffeeIcon} resizeMode="cover" />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "black",
    },
    container: {
        flex: 1,
        padding: 30,
        gap: 30,
    },
    title: {
        textAlign: "left",
        color: "white",
    },
    subtitle: {
        textAlign: "left",
        color: "white",
    },
    button: {
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    icon: {
        width: 24,
        height: 24,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
});

export default Explorer;
