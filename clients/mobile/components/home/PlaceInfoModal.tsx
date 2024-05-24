import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// third party
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

// components
import CustomText from '../shared/CustomText';
import CustomButton from '../shared/CustomButton';

// stores
import { usePlaceStore } from '../../stores/PlaceStores';

interface ModalContentProps {
    closeModal: () => void;
}

const PlaceInfoModal: React.FC<ModalContentProps> = ({ closeModal }) => {

    const places = usePlaceStore((state) => state.places);
    const placeIndex = usePlaceStore((state) => state.placeIndex);

    const centerCoordinate = {
        latitude: places[placeIndex].placeYX.split(',')[0],
        longitude: places[placeIndex].placeYX.split(',')[1],
    };

    const infoSections = [
        {
            CustomText: places[placeIndex].description,
        },
        {
            CustomText: places[placeIndex].website,
        },
    ];

    const [center, setCenter] = useState(centerCoordinate);

    return (
        <SafeAreaView style={styles.safeArea}>

            <ScrollView style={styles.scrollView}>

                <View style={styles.container}>
                    <CustomText style={styles.headerText}>
                        <CustomText boldness='bold'>
                            {places[placeIndex].name}
                            {"\n"}
                        </CustomText>
                        <CustomText style={styles.highlightText}>
                            {places[placeIndex].placeYX}
                            {"\n"}
                        </CustomText>
                        <CustomText style={styles.subduedText}>
                            Rating: {places[placeIndex].rating}/5
                        </CustomText>
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
        width: 380,
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
