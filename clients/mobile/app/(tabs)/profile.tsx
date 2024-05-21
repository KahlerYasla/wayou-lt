import { useState } from "react";
import { SafeAreaView, View, Image, FlatList, StyleSheet, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { FONT, SIZES } from "../../constants";
import images from "../../constants/images";
import CustomButton from "../../components/shared/CustomButton";
import CustomText from "../../components/shared/CustomText";

const Profile = () => {
    const router = useRouter();

    const items = [
        { id: '1', color: 'red', name: 'Item 1' },
        { id: '2', color: 'green', name: 'Item 2' },
        { id: '3', color: 'blue', name: 'Item 3' },
        { id: '4', color: 'yellow', name: 'Item 4' },
        { id: '5', color: 'purple', name: 'Item 5' },
        { id: '6', color: 'orange', name: 'Item 6' },
    ];

    const renderProfile = () => (
        <View style={styles.profileCard}>
            <View style={styles.profileDetails}>
                <Image style={styles.profileImage} source={images.profileImage} resizeMode="cover" />
                <View style={styles.profileInfo}>
                    <CustomText style={styles.profileText}>Username: KahlerYasla</CustomText>
                    <CustomText style={[styles.profileText, styles.profileInfoMargin]}>Created 6 Routes & 3 Cards</CustomText>
                    <CustomText style={styles.profileText}>345 Followers & 123 Following</CustomText>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <CustomButton
                    title="Change Password"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() => { router.push("new-pwd") }}
                />
                <CustomButton
                    title="Register a Card"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() => { alert("Register a Card is not implemented yet") }}
                />
            </View>
        </View>
    );

    const renderStories = () => (
        <View style={styles.storiesContainer}>
            <CustomText style={styles.storiesTitle}>Stories</CustomText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
                <View style={styles.stories}>
                    <View style={[styles.story, { backgroundColor: 'red' }]} />
                    <View style={[styles.story, { backgroundColor: 'green' }]} />
                    <View style={[styles.story, { backgroundColor: 'blue' }]} />
                    <View style={[styles.story, { backgroundColor: 'yellow' }]} />
                    <View style={[styles.story, { backgroundColor: 'purple' }]} />
                </View>
            </ScrollView>
        </View>
    );

    const renderDecks = () => (
        <View style={styles.decksContainer}>
            <CustomText style={styles.decksTitle}>
                Listing Public Decks
            </CustomText>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.deckItem}>
                        <View style={[styles.deckColor, { backgroundColor: item.color }]} />
                        <CustomText style={styles.deckText}>{item.name}</CustomText>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={4}
                columnWrapperStyle={styles.columnWrapper} // Adding this to adjust column styling
                style={styles.decksList}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            {renderProfile()}
                            {/* {renderStories()} */}
                            {/* {renderDecks()} */}
                        </>
                    )}
                    data={items}
                    renderItem={null} // Empty render item since the actual items are rendered in separate sections
                    keyExtractor={(item, index) => index.toString()}
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
    profileCard: {
        borderRadius: 20,
    },
    profileCardTitle: {
        alignSelf: "center",
        color: "white",
    },
    profileDetails: {
        flex: 1,
        flexDirection: "row",
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
    },
    profileInfo: {
        padding: 20,
        justifyContent: "center",
    },
    profileText: {
        alignSelf: "flex-start",
        borderRadius: 10,
        color: "white",
        paddingHorizontal: 0,
        textAlignVertical: "center",
    },
    profileInfoMargin: {
        marginVertical: 10,
    },
    buttonsContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: '48%',
    },
    buttonText: {
        color: "white",
    },
    storiesContainer: {
        borderRadius: 20,
        paddingVertical: 10,
        marginTop: 10,
    },
    storiesTitle: {
        alignSelf: "flex-start",
        color: "white",
    },
    storiesScroll: {
        marginTop: 10,
    },
    stories: {
        flexDirection: 'row',
    },
    story: {
        width: 120,
        height: 120,
        marginRight: 10,
    },
    decksContainer: {
        borderRadius: 20,
        paddingVertical: 10,
    },
    decksTitle: {
        alignSelf: "flex-start",
        color: "white",
        marginBottom: 10,
    },
    decksList: {
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    deckItem: {
        width: '23%', // Adjust to fit 4 columns with spacing
        alignItems: 'center',
        marginBottom: 10, // Optional: add vertical spacing between rows
    },
    deckColor: {
        height: 100,
        width: '100%',
    },
    deckText: {
        color: 'white',
        marginTop: 10,
    },
});

export default Profile;
