import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

// components
import CustomText from '../components/shared/CustomText';
import CustomButton from '../components/shared/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

// stores
import { useRouteStore } from '../stores/RouteStores';

const RouteInfo = () => {
    const routes = useRouteStore((state) => state.routes);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.innerContainer}>

                        <View style={styles.descriptionContainer}>
                            <CustomText style={styles.title}>AI Generated Trip</CustomText>

                            <ScrollView
                                horizontal
                                style={styles.horizontalContent}>
                                {/* render each card */}
                                {routes[routes.length - 1].sortedPlaceList!.map((place, index) => {
                                    return renderCard(place.name, place.id, place.rating, index);
                                })}
                            </ScrollView>

                            <CustomText style={styles.descriptionText}>
                                {/* display the description of the latest added trip here */}
                                {routes[routes.length - 1].tripDescription
                                    .replace("{", "\n")
                                    .replace("}", "\n")
                                    .replace("\"placeIdList\":", "")
                                    .replace(",\"tripText\":\"", "")
                                    .replace("Day 1", "\n\nDay 1")
                                    .replace("Day 2", "\nDay 2")
                                    .replace("Day 3", "\nDay 3")
                                    .split("\\n")
                                    .map((item, key) => {
                                        return <CustomText key={key}>{item}{"\n"}{"\n"}</CustomText>;
                                    })}
                            </CustomText>
                        </View>

                    </View>
                </ScrollView>
            </View>

            {/* floating button */}
            <View style={styles.backButtonContainer}>
                <CustomButton
                    title="<"
                    onPress={() => router.replace("routes")}
                // icon={icons.chatIcon}
                />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
    },
    outerContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        marginTop: 80,
        paddingHorizontal: 30,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderBottomWidth: 0.3,
        borderColor: "white",
        paddingBottom: 10,
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        gap: 30,
    },
    title: {
        marginTop: 10,
        color: "white",
        alignSelf: "flex-start",
        fontSize: 20,
    },
    descriptionContainer: {
        borderBottomWidth: 0.3,
        borderColor: "white",
        paddingBottom: 10,
    },
    descriptionText: {
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "white",
        marginTop: 10,
        color: "white",
        justifyContent: "center",
    },
    dayTitle: {
        marginTop: 10,
        color: "white",
        justifyContent: "center",
    },
    horizontalScroll: {
        marginTop: 10,
    },
    horizontalContent: {
        marginTop: 15,
    },
    card: {
        width: 130,
        height: 180,
        borderWidth: 1,
        marginVertical: 10,
        marginRight: 15,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 20,
        position: "relative",
    },
    cardImage: {
        flex: 1,
        borderRadius: 20,
    },
    cardText: {
        zIndex: 2,
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 12,
        position: "absolute",
        bottom: 15,
        left: 6,
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
    planContainer: {
    },
    planText: {
        marginTop: 10,
        color: "white",
        justifyContent: "center",
    },
    backButtonContainer: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
});

export default RouteInfo;

function renderCard(placeName: string, placeId: number, placeRating: number, index: number) {
    return (
        <View style={styles.card} key={index}>
            <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/201/20" + Math.floor(Math.random() * 10) }} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,.96)']}
                style={styles.gradient} />
            <CustomText style={styles.cardText}>
                {placeName}{"\n"}
                {placeId}{"\n"}
                {placeRating}
            </CustomText>
        </View>
    );
}
