import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, SIZES } from "../../constants";
import images from "../../constants/images";
import CustomButton from "../../components/shared/CustomButton";

const Profile = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const items = [
        { id: '1', color: 'red', name: 'Item 1' },
        { id: '2', color: 'green', name: 'Item 2' },
        { id: '3', color: 'blue', name: 'Item 3' },
        { id: '4', color: 'yellow', name: 'Item 4' },
        { id: '5', color: 'purple', name: 'Item 5' },
        { id: '6', color: 'orange', name: 'Item 6' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.profileCard}>
                        <Text style={styles.profileCardTitle}>Profile Card</Text>
                        <View style={styles.profileDetails}>
                            <Image style={styles.profileImage} source={images.logo} resizeMode="contain" />
                            <View style={styles.profileInfo}>
                                <Text style={styles.profileText}>Username : KahlerYasla</Text>
                                <Text style={[styles.profileText, styles.profileInfoMargin]}>Created 6 Routes/3 Cards</Text>
                                <Text style={styles.profileText}>345 Followers/123 Following</Text>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <CustomButton
                                title="Change Password"
                                style={styles.button}
                                textStyle={styles.buttonText}
                                onPress={() => { router.push("change-pwd") }}
                            />
                            <CustomButton
                                title="Register a Card"
                                style={styles.button}
                                textStyle={styles.buttonText}
                                onPress={() => { router.push("change-pwd") }}
                            />
                        </View>
                    </View>
                    <View style={styles.storiesContainer}>
                        <Text style={styles.storiesTitle}>Stories</Text>
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
                    <View style={styles.decksContainer}>
                        <Text style={styles.decksTitle}>Listing Public Decks</Text>
                        <FlatList
                            data={items}
                            renderItem={({ item }) => (
                                <View style={styles.deckItem}>
                                    <View style={[styles.deckColor, { backgroundColor: item.color }]} />
                                    <Text style={styles.deckText}>{item.name}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            numColumns={3}
                            contentContainerStyle={styles.decksList}
                        />
                    </View>
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
        padding: SIZES.medium,
    },
    profileCard: {
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
    },
    profileCardTitle: {
        alignSelf: "center",
        fontFamily: FONT.regular,
        color: "white",
    },
    profileDetails: {
        flex: 1,
        flexDirection: "row",
    },
    profileImage: {
        width: 120,
        height: 120,
    },
    profileInfo: {
        padding: 20,
        justifyContent: "center",
    },
    profileText: {
        fontFamily: FONT.regular,
        alignSelf: "center",
        backgroundColor: "#121316",
        borderRadius: 10,
        color: "white",
        height: 25,
        paddingHorizontal: 10,
        textAlignVertical: "center",
    },
    profileInfoMargin: {
        marginVertical: 10,
    },
    buttonsContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#101114",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontFamily: FONT.regular,
    },
    storiesContainer: {
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
    },
    storiesTitle: {
        alignSelf: "flex-start",
        fontFamily: FONT.regular,
        color: "white",
    },
    storiesScroll: {
        marginTop: 20,
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
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
    },
    decksTitle: {
        alignSelf: "flex-start",
        fontFamily: FONT.regular,
        color: "white",
        marginBottom: 10,
    },
    decksList: {
        alignItems: 'center',
    },
    deckItem: {
        width: 100,
        margin: 5,
        alignItems: 'center',
    },
    deckColor: {
        height: 100,
        width: '100%',
    },
    deckText: {
        color: 'white',
        marginTop: 5,
        fontFamily: FONT.regular,
    },
});

export default Profile;
