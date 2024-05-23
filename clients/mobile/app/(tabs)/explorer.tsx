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

                    <CustomText style={styles.subtitle}>Discover new places from our Community</CustomText>
                    <CustomText style={styles.subtitle}>
                        This feature will be available as soon as we have big enough community. Keep in touch! Here is the gang behind this project:
                    </CustomText>

                    <View style={styles.profile}>
                        <Image style={styles.image} source={images.profileImage} resizeMode="cover" />

                        <View style={styles.profileInfo}>
                            <CustomText style={styles.title}>Berkay Aslan</CustomText>
                            <CustomText style={styles.title}>Full Stack Developer</CustomText>
                            <CustomText style={styles.title}>GitHub: @KahlerYasla</CustomText>
                        </View>
                    </View>

                    <View style={styles.profile}>
                        <Image style={styles.image} source={images.taha} resizeMode="cover" />

                        <View style={styles.profileInfo}>
                            <CustomText style={styles.title}>Taha Apak</CustomText>
                            <CustomText style={styles.title}>Data & AI Developer</CustomText>
                            <CustomText style={styles.title}>GitHub: @Kebab-kun</CustomText>
                        </View>
                    </View>

                    <View style={styles.profile}>
                        <Image style={styles.image} source={images.sinanur} resizeMode="cover" />

                        <View style={styles.profileInfo}>
                            <CustomText style={styles.title}>Sinaur</CustomText>
                            <CustomText style={styles.title}>AI Developer</CustomText>
                            <CustomText style={styles.title}>GitHub: @supaCoolSinanur</CustomText>
                        </View>
                    </View>

                    <CustomButton
                        title="Buy me a coffee"
                        style={styles.button}
                        onPress={() => router.push("decks")}
                    />

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
    profile: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    profileInfo: {
        flex: 1,
        justifyContent: "center",
        gap: 10,
    },
    button: {
    },
    image: {
        width: "40%",
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
