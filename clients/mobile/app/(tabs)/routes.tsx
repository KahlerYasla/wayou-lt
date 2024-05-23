import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

import CustomButton from "../../components/shared/CustomButton";
import CustomText from "../../components/shared/CustomText";

import icons from "../../constants/icons";
import { LinearGradient } from "expo-linear-gradient";

const Routes = () => {
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

                    <CustomText style={styles.title}>Listing My Routes:</CustomText>

                    {/* card 1 */}
                    <TouchableOpacity
                        onPress={() => router.push("route-info")}
                        style={styles.profileCard}>
                        <View style={styles.cardContent}>
                            <View style={styles.deckOuter}>

                                <View style={styles.deck}>
                                    {/* Render three cards for each deck */}
                                    <View style={[styles.card, styles.firstCard]} >
                                        <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/300/300" }} />
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0,0,0,.96)']}
                                            style={styles.gradient}
                                        />
                                    </View>
                                    <View style={[styles.card, styles.secondCard]} >
                                        <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/301/301" }} />
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0,0,0,.96)']}
                                            style={styles.gradient}
                                        />
                                    </View>
                                    <View style={[styles.card, styles.thirdCard]} >
                                        <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/303/303" }} />
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0,0,0,.96)']}
                                            style={styles.gradient}
                                        />
                                    </View>
                                </View>

                                <CustomText style={styles.deckText}>Default Deck</CustomText>

                            </View>

                            <View style={styles.infoContainer}>
                                <CustomText style={styles.infoHeader}>Default Route</CustomText>
                                <CustomText style={styles.infoText}>Creator: KahlerYasla</CustomText>
                                <CustomText style={styles.infoText}>Created: 19/05/24 12:PM</CustomText>
                                {/* <CustomText style={styles.infoText}>Starts: 10/12/24 12:PM</CustomText>
                                <CustomText style={styles.infoText}>From: Kadiköy - Istanbul</CustomText>
                                <CustomText style={styles.infoText}>Estimated Need: 100-200$</CustomText> */}
                            </View>

                        </View>
                    </TouchableOpacity>

                    {/* sepeareted by a view temporary */}
                    <View style={{
                        margin: 10,
                        height: 0,
                        borderWidth: .4,
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                    }} />

                </View>
            </ScrollView>

            {/* floating button */}
            <View style={styles.createButtonContainer}>
                <CustomButton
                    title="Create Route"
                    onPress={() => router.push("create-route")}
                // icon={icons.chatIcon}
                />
            </View>

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
    },
    title: {
        alignSelf: "flex-start",
        color: "white",
        marginBottom: 10,
        fontSize: 14,
    },
    profileCard: {
        paddingVertical: 10,
    },
    deck: {
        flexDirection: "row",
        width: "50%",
        marginBottom: 7,
    },
    deckOuter: {
        flexDirection: "column",
        width: "40%",
    },
    cardTitle: {
        alignSelf: "center",
        color: "white",
    },
    cardContent: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: 120,
        height: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
    },
    deckText: {
        marginTop: 10,
        alignSelf: "center",
        color: "white",
    },
    infoContainer: {
        padding: 15,
    },
    infoHeader: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,
    },
    infoText: {
        alignSelf: "flex-start",
        borderRadius: 10,
        color: "white",
        margin: 10,
    },
    cardImage: {
        flex: 1,
        borderRadius: 20,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        zIndex: 2,
        borderRadius: 20,
    },
    card: {
        width: 110,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 20,
        position: "relative",
        height: 170,
    },
    firstCard: {
        zIndex: 1,
    },
    secondCard: {
        zIndex: 2,
        right: 100,
    },
    thirdCard: {
        zIndex: 3,
        right: 193,
    },
    buttonContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editButton: {
        backgroundColor: "#000000",
        borderRadius: 20,
        width: "100%",
    },
    createButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        padding: 10,
    },
});

export default Routes;
