import React from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView>

                {/* Map through decks and render each deck */}
                {decks.map((deck) => (
                    <View key={deck.id} style={styles.deckContainer}>

                        <CustomText style={styles.deckTitle}>{deck.title}</CustomText>

                        <View style={styles.cardContainer}>

                            {/* Render three cards for each deck */}
                            <View style={[styles.card, styles.firstCard]} />
                            <View style={[styles.card, styles.secondCard]} />
                            <View style={[styles.card, styles.thirdCard]} />

                        </View>

                    </View>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    deckContainer: {
        marginBottom: 12,
    },
    deckTitle: {
        color: "white",
        backgroundColor: "blue",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 12,
        paddingLeft: 12,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: 2,
        height: 2,
        borderRadius: 20,
        position: "relative",
    },
    firstCard: {
        backgroundColor: "white",
        height: 200,
        width: 150,
        zIndex: 3,
        left: 20,
    },
    secondCard: {
        backgroundColor: "darkgray",
        height: 180,
        width: 130,
        zIndex: 2,
        marginLeft: 2,
        left: 10,
    },
    thirdCard: {
        backgroundColor: "gray",
        height: 160,
        width: 110,
        zIndex: 1,
        marginLeft: 2,
        left: 0,
    },
});

export default Decks;
