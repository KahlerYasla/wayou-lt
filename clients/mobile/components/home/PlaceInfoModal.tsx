import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { AntDesign, MaterialCommunityIcons, FontAwesome, Fontisto, Entypo } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

import CustomText from '../shared/CustomText';
import CustomButton from '../shared/CustomButton';

const infoSections = [
    {
        icon: <AntDesign name="infocirlceo" size={20} color="white" />,
        CustomText: 'Restored 14th-century museum and former prison overlooking the Bosphorus with a top-floor restaurant. See More',
    },
    {
        icon: <MaterialCommunityIcons name="web" size={20} color="white" />,
        CustomText: 'www.bomontigreenmuesum.com',
    },
    {
        icon: <FontAwesome name="phone" size={20} color="white" />,
        CustomText: '0212 667 66 31',
    },
    {
        icon: <Fontisto name="dollar" size={20} color="white" />,
        CustomText: 'Between: $100 - $200 See All Prices',
    },
    {
        icon: <Entypo name="back-in-time" size={20} color="white" />,
        CustomText: 'Open Between: 06:00 AM - 02:00 AM See All',
    },
];

interface ModalContentProps {
    closeModal: () => void;
}

const PlaceInfoModal: React.FC<ModalContentProps> = ({ closeModal }) => {
    const centerCoordinate = {
        latitude: 41.0423,
        longitude: 29.0137,
    };

    const [center, setCenter] = useState(centerCoordinate);

    return (
        <SafeAreaView style={styles.safeArea}>

            <ScrollView style={styles.scrollView}>

                <View style={styles.container}>
                    <CustomText style={styles.headerText}>
                        <CustomText boldness='bold'>Green Museum </CustomText>
                        <CustomText style={styles.highlightText}>Museum</CustomText>
                        <CustomText> | </CustomText>
                        <CustomText style={styles.subduedText}>Besiktas</CustomText>
                        <CustomText> 9.1/10</CustomText>
                    </CustomText>
                </View>

                {/* <View>
                    <CustomText style={styles.latestStoriesText}>Latest Stories :</CustomText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        <View style={styles.storyContainer}>
                            <View style={[styles.storyBox, styles.redBox]} />
                            <View style={[styles.storyBox, styles.greenBox]} />
                            <View style={[styles.storyBox, styles.blueBox]} />
                            <View style={[styles.storyBox, styles.yellowBox]} />
                            <View style={[styles.storyBox, styles.purpleBox]} />
                        </View>
                    </ScrollView>
                </View> */}

                {/* info section */}
                {infoSections.map((section, index) => (
                    <View
                        key={index}
                        style={styles.infoSection}>
                        <View style={styles.infoTextContainer}>
                            <CustomText style={styles.infoText}>{section.CustomText}</CustomText>
                        </View>
                    </View>
                ))}

                {/* map */}
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_DEFAULT}
                        initialRegion={{
                            latitude: centerCoordinate.latitude,
                            longitude: centerCoordinate.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={center}
                            title={"Green Museum"}
                            description={"Museum"}
                        />
                    </MapView>
                </View>

                <CustomButton
                    title="Close"
                    onPress={closeModal}
                    style={{ marginTop: 20 }}
                />

            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
    },
    scrollView: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 30,
    },
    container: {
        flex: 1,
    },
    headerText: {
        marginTop: 20,
        color: "white",
        justifyContent: "center",
    },
    highlightText: {
        color: "tomato",
    },
    subduedText: {
        color: "rgba(255,255,255,0.5)",
    },
    latestStoriesText: {
        marginTop: 20,
        color: "white",
        justifyContent: "center",
    },
    horizontalScroll: {
    },
    storyContainer: {
        flexDirection: 'row',
    },
    storyBox: {
        width: 120,
        height: 120,
        marginRight: 10,
    },
    infoSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        width: "100%",
        paddingVertical: 20,
        borderBottomWidth: 0.4,
        borderColor: "rgba(255, 255, 255, 0.3)",
    },
    iconContainer: {
        margin: 10,
        justifyContent: 'center',
    },
    infoTextContainer: {
        justifyContent: 'center',
    },
    infoText: {
        color: "white",
    },
    mapContainer: {
        flex: 1,
        width: "100%",
        height: 300,
        marginTop: 20,
        borderRadius: 30,
        borderWidth: 0.3,
        borderColor: "white",
        overflow: 'hidden',
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default PlaceInfoModal;
