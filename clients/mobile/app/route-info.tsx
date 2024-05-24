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
                            <CustomText style={styles.descriptionText}>
                                {/* display the description of the latest added trip here */}
                                {routes[0].tripDescription}
                            </CustomText>
                        </View>

                        {/* day 1 */}
                        <View style={styles.container}>
                            <View>
                                <CustomText style={styles.dayTitle}>Day 1:</CustomText>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                                    <View style={styles.horizontalContent}>

                                        {/* create as many cards as the number of places in the first day */}
                                        {(routes[0].sortedPlaceList!).map(place => {
                                            return card(place.name, place.id, place.rating);
                                        })}

                                        <View style={styles.card} >
                                            <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/250/200" }} />
                                            <LinearGradient
                                                colors={['transparent', 'rgba(0,0,0,.99)']}
                                                style={styles.gradient}
                                            />
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.planContainer}>
                                <CustomText style={styles.planText}>
                                    Welcome to Miami Beach, Florida! Get ready for an exciting first day of your trip. Based on your preferences, we have put together an amazing itinerary for you. First, visit the Holocaust Memorial Miami Beach, a must-see attraction that pays tribute to the millions of lives lost during the Holocaust. Take your time to reflect and learn about this important historical event. For lunch, head to Havana 1957 Cuban Cuisine Lincoln Road. Indulge in delicious Cuban cuisine and experience the vibrant flavors of the island. Next, explore the Art Deco Historic District, known for its stunning architecture. Take a leisurely stroll and admire the beautiful buildings from the 1920s and 1930s. Afterward, relax at Lummus Park Beach, a picturesque stretch of sand with crystal-clear waters. Enjoy the sun, take a dip, or simply unwind and soak in the breathtaking views. For dinner, try La Sandwicherie Miami Beach, a local favorite known for its mouthwatering sandwiches. Grab a quick bite and satisfy your taste buds. We hope you have a fantastic first day in Miami Beach! Enjoy your trip!
                                </CustomText>
                            </View>
                        </View>

                        {/* day 2 */}
                        <View style={styles.container}>
                            <View>
                                <CustomText style={styles.dayTitle}>Day 2:</CustomText>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                                    <View style={styles.horizontalContent}>

                                        {/* Example content */}
                                        <View style={styles.card} >
                                            <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/200/200" }} />
                                            <LinearGradient
                                                colors={['transparent', 'rgba(0,0,0,.96)']}
                                                style={styles.gradient}
                                            />
                                        </View>

                                        <View style={styles.card} >
                                            <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/201/200" }} />
                                            <LinearGradient
                                                colors={['transparent', 'rgba(0,0,0,.96)']}
                                                style={styles.gradient}
                                            />
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.planContainer}>
                                <CustomText style={styles.planText}>
                                    On the second day of your trip to Miami Beach, you have an exciting itinerary ahead. Start your day by visiting Lincoln Road, a must-see attraction known for its vibrant atmosphere and variety of shops and restaurants. Enjoy exploring the unique boutiques and art galleries that line this pedestrian-friendly street. For lunch, head to CRAFT South Beach - Espanola Way, a popular eatery known for its delicious food and charming ambiance. After lunch, take a leisurely stroll along the Miami Beach Boardwalk, where you can soak in the beautiful ocean views and feel the refreshing sea breeze. For dinner, try Arkadia Grill, a fantastic eatery that offers a diverse menu with options to satisfy any craving. Finally, end your day by visiting Surfside Beach, a picturesque attraction where you can relax and unwind on the sandy shores. Enjoy the sun, surf, and breathtaking views. Have a fantastic day!
                                </CustomText>
                            </View>
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
        flexDirection: 'row',
        gap: 15,
    },
    card: {
        width: 130,
        height: 180,
        borderWidth: 1,
        marginVertical: 10,
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

function card(placeName: string, placeId: number, placeRating: number) {
    return <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: "https://picsum.photos/201/202" }} />
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,.96)']}
            style={styles.gradient} />
        <CustomText style={styles.cardText}>
            {placeName}{"\n"}
            {placeId}{"\n"}
            {placeRating}
        </CustomText>
    </View>;
}

