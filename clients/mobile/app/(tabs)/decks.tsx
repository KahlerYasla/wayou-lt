import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

// components
import CustomText from "../../components/shared/CustomText";
import CustomButton from "../../components/shared/CustomButton";

// stores
import { useRouteStore } from "../../stores/RouteStores";

const Decks = () => {
    const router = useRouter();

    const routes = useRouteStore((state) => state.routes);

    // Mock data for decks
    const decks = [
        { id: 1, title: "Default Deck" },
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
                        <TouchableOpacity
                            key={deck.id}
                            style={styles.deckContainer}

                            // list all places of the deck pressed
                            onPress={() =>
                                Alert.alert(
                                    "List of places from this deck:",
                                    routes.map((route, index) => {
                                        return route.sortedPlaceList!.map((place, index) => {
                                            return place.name;
                                        });
                                    }).join("\n "),
                                    [
                                        {
                                            text: "Done",
                                            onPress: () => console.log("Done Pressed"),
                                            style: "default"
                                        },
                                    ],
                                )}>

                            <View style={styles.innerDeckContainer}>

                                {/* Render three cards for each deck */}
                                <View style={[styles.card, styles.firstCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/100/140" }} />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,.96)']}
                                        style={styles.gradient}
                                    />
                                </View>
                                <View style={[styles.card, styles.secondCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/110/141" }} />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,.96)']}
                                        style={styles.gradient}
                                    />
                                </View>
                                <View style={[styles.card, styles.thirdCard]} >
                                    <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/110/200" }} />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,.96)']}
                                        style={styles.gradient}
                                    />
                                </View>

                            </View>

                            <View style={styles.innerDeckContainer}>
                                <CustomText style={styles.deckTitle}>{deck.title}</CustomText>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>

            {/* floating button */}
            <View style={styles.createButtonContainer}>
                <CustomButton
                    title="Create Deck"

                    // get the new deck's name
                    onPress={() => Alert.prompt(
                        "Enter new deck's name",
                        "",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "OK",
                                onPress: newDeckName => console.log("New dekc's name: " + newDeckName)
                            }
                        ],
                        "plain-text"
                    )}

                />
            </View>

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
    createButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        padding: 10,
    },
});

export default Decks;
