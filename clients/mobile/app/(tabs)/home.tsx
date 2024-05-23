import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import TinderCard from 'react-tinder-card';

import ConfigurationModal from "../../components/home/ConfigurationModal";
import PlaceInfoModal from "../../components/home/PlaceInfoModal";

import { useIsModalOpen } from "../../stores/BehavioursStores";

import icons from "../../constants/icons";
import CustomText from "../../components/shared/CustomText";

const Home = () => {
    const [isConfigurationModalVisible, setIsConfigurationModalVisible] = useState(false);
    const [isPlaceInfoModalVisible, setIsPlaceInfoModalVisible] = useState(false);

    const [imageUrl, setImageUrl] = useState('https://picsum.photos/800/1200');
    const [resetCard, setResetCard] = useState(false);

    const isModalOpen = useIsModalOpen((state) => state.isModalOpen);

    useEffect(() => {
        setIsConfigurationModalVisible(isModalOpen);
        setIsPlaceInfoModalVisible(isModalOpen);
    }, [isModalOpen]);

    const openConfigurationModal = () => {
        setIsConfigurationModalVisible(true);
    };

    const closeConfigurationModal = () => {
        setIsConfigurationModalVisible(false);
    };

    const closePlaceModal = () => {
        setIsPlaceInfoModalVisible(false);
    }

    const onSwipeDone = (direction: 'left' | 'right' | 'up' | 'down') => {
        console.log('You swiped: ' + direction);
        if (direction === "up") {
            setIsPlaceInfoModalVisible(true);
            setResetCard(!resetCard);
        } else if (direction === "right" || direction === "left") {
            setTimeout(() => {
                setImageUrl('https://picsum.photos/800/130' + Math.floor(Math.random() * 10));
                setResetCard(!resetCard);
            },
                600);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <View style={styles.viewContent}>
                <View style={styles.container}>

                    {/* tinder card */}
                    <TinderCard
                        onSwipeRequirementFulfilled={onSwipeDone}
                        swipeRequirementType="position"
                        swipeThreshold={100}
                        key={resetCard ? "reset" : "notReset"}
                        preventSwipe={['down']}
                    >
                        {imageUrl &&
                            (
                                <View style={styles.card}>
                                    <Image
                                        loadingIndicatorSource={icons.chatIcon}
                                        onLoad={() => console.log('Image loaded')}
                                        onLoadStart={() => console.log('Image loading')}
                                        onError={() => console.log('Image loading error')}
                                        onProgress={() => console.log('Image loading progress')}
                                        resizeMode="cover"
                                        source={{ uri: imageUrl }}
                                        style={styles.cardImage}
                                    />
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.85)']}
                                        style={styles.gradient}
                                    />
                                    <CustomText style={styles.cardText}>
                                        Green Museum{"\n"}{"\n"}
                                        Museum | Besiktas{"\n"}{"\n"}
                                        9.1 / 10
                                    </CustomText>
                                </View>
                            )}
                    </TinderCard>

                </View>

                {/* modal button */}
                <TouchableOpacity onPress={openConfigurationModal} style={styles.modalButton}>
                    <View style={styles.modalButtonContent}>
                        <Image
                            style={styles.modalButtonImage}
                            source={icons.configurationIcon}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

            </View>

            {/* configuration modal */}
            <Modal
                animationType="fade"
                visible={isConfigurationModalVisible}
                onRequestClose={closeConfigurationModal}
            >
                <TouchableWithoutFeedback onPress={closeConfigurationModal}>
                    <View />
                </TouchableWithoutFeedback>
                <ConfigurationModal closeModal={closeConfigurationModal} />
            </Modal>

            {/* place info modal */}
            <Modal
                animationType="fade"
                visible={isPlaceInfoModalVisible}
                onRequestClose={closePlaceModal}
            >
                <TouchableWithoutFeedback onPress={closePlaceModal}>
                    <View />
                </TouchableWithoutFeedback>
                <PlaceInfoModal closeModal={closePlaceModal} />
            </Modal>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "black",
    },
    viewContent: {
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    container: {
        flex: 1,
        padding: 0,
        paddingRight: 0,
    },
    card: {
        backgroundColor: 'black',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // added to position the gradient properly
    },
    cardImage: {
        zIndex: 1,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        zIndex: 2,
        borderRadius: 10,
    },
    cardText: {
        position: 'absolute',
        zIndex: 3,
        color: 'white',
        left: 20,
        bottom: 50,
    },
    modalButton: {
        top: 150,
        position: "absolute",
        marginEnd: 0,
        paddingEnd: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#151515',
        right: 0,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        width: 40,
        height: 40,
    },
    modalButtonContent: {
        position: "absolute",
        marginEnd: 0,
        paddingEnd: 0,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        width: 40,
        height: 40,
    },
    modalButtonImage: {
        width: 17,
        height: 17,
    },
});

export default Home;
