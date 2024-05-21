import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

import CustomButton from "../../components/shared/CustomButton";
import CustomText from "../../components/shared/CustomText";

import images from "../../constants/images";
import icons from "../../constants/icons";

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
                    <View style={styles.profileCard}>
                        <View>
                            <View style={styles.cardContent}>
                                <View>
                                    <Image style={styles.image} source={images.card3} resizeMode="cover" />
                                    <CustomText style={styles.deckText}>Default Deck</CustomText>
                                </View>
                                <View style={styles.infoContainer}>
                                    <CustomText style={styles.infoText}>Creator: KahlerYasla</CustomText>
                                    <CustomText style={styles.infoText}>Starts: 10/12/24 12:PM</CustomText>
                                    <CustomText style={styles.infoText}>From : Kadiköy - Istanbul</CustomText>
                                    <CustomText style={styles.infoText}>Estimated Need : 100-200$</CustomText>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* sepeareted by a view temporary */}
                    <View style={{
                        margin: 10,
                        height: 0,
                        borderWidth: .4,
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                    }} />

                    {/* card 2 */}
                    <View style={styles.profileCard}>
                        <View>
                            <View style={styles.cardContent}>
                                <View>
                                    <Image style={styles.image} source={images.card5} resizeMode="cover" />
                                    <CustomText style={styles.deckText}>Default Deck</CustomText>
                                </View>
                                <View style={styles.infoContainer}>
                                    <CustomText style={styles.infoText}>Creator: KahlerYasla</CustomText>
                                    <CustomText style={styles.infoText}>Starts: 10/12/24 12:PM</CustomText>
                                    <CustomText style={styles.infoText}>From : Kadiköy - Istanbul</CustomText>
                                    <CustomText style={styles.infoText}>Estimated Need : 100-200$</CustomText>
                                </View>
                            </View>
                        </View>
                    </View>

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
        padding: 10,
    },
    title: {
        alignSelf: "flex-start",
        color: "white",
        marginBottom: 10,
        fontSize: 14,
    },
    profileCard: {
        padding: 10,
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
        padding: 20,
    },
    infoText: {
        alignSelf: "flex-start",
        borderRadius: 10,
        color: "white",
        margin: 10,
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
    editButtonText: {
    },
    tagContainer: {
        flex: 1,
    },
    tags: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
    },
    tag: {
        fontSize: 18,
        color: "white",
        margin: 5,
        backgroundColor: "blue",
        borderRadius: 10,
        height: 35,
        padding: 5,
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
