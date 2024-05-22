import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../../constants";
import CustomText from "../../components/shared/CustomText";

const Decks = () => {
    const router = useRouter();

    // Mock data for decks
    const decks = [
        { id: 1, title: "Deck 1" },
        { id: 2, title: "Deck 2" },
        { id: 3, title: "Deck 3" },
        { id: 4, title: "Deck 4" },
        { id: 5, title: "Deck 5" },
    ];

    return (
        <SafeAreaView
            style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView style={styles.scrollView}>

                <View style={styles.container}>
                    {/* Map through decks and render each deck */}
                    {decks.map((deck) => (
                        <View key={deck.id} style={styles.deckContainer}>

                            <View style={styles.innerDeckContainer}>

                                {/* Render three cards for each deck */}
                                <View style={[styles.card, styles.firstCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/90/140" }}></Image>
                                </View>
                                <View style={[styles.card, styles.secondCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/90/140" }}></Image>
                                </View>
                                <View style={[styles.card, styles.thirdCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/90/140" }}></Image>
                                </View>

                            </View>

                            <View style={styles.innerDeckContainer}>
                                <CustomText style={styles.deckTitle}>{deck.title}</CustomText>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'black',
    },
    scrollView: {
        width: "100%",
        height: "100%",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 30,
        gap: 20,
    },
    deckContainer: {
        width: "29%",
    },
    innerDeckContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    deckTitle: {
        color: "white",
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 25,
    },
    cardImage: {
        flex: 1,
        borderRadius: 20,
    },
    card: {
        width: "90%",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 20,
        position: "relative",
    },
    firstCard: {
        height: "100%",
        zIndex: 1,
    },
    secondCard: {
        height: "100%",
        zIndex: 2,
        right: 90,
    },
    thirdCard: {
        height: 140,
        zIndex: 3,
        right: 180,
    },
});

export default Decks;
