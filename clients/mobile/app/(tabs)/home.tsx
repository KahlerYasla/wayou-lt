import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Modal } from "react-native";

import TinderCard from 'react-tinder-card';

import ModalContent from "../../components/home/HomeScreenModal";
import { useIsModalOpenStore } from "../../stores/BehavioursStore";
import icons from "../../constants/icons";

const Home = () => {
    const [isConfigurationModalVisible, setIsConfigurationModalVisible] = useState(false);
    const [isPlaceInfoModalVisible, setIsPlaceInfoModalVisible] = useState(false);

    const [imageUrl, setImageUrl] = useState('https://picsum.photos/800/1200');
    const [resetCard, setResetCard] = useState(false);

    const isModalOpen = useIsModalOpenStore((state) => state.isModalOpen);

    useEffect(() => {
        setIsConfigurationModalVisible(isModalOpen);
        setIsPlaceInfoModalVisible(isModalOpen);
    }, [isModalOpen]);

    // useEffect(() => {
    //     fetchImage();
    // }, []);


    // const fetchImage = async () => {
    //     try {
    //         const response = await fetch('https://picsum.photos/800/1200');
    //         if (response.ok) {
    //             console.log('Image fetched successfully!');
    //         }
    //     } catch (error) {
    //         alert('Error fetching image. Please check your internet connection.');
    //     }
    // };

    const openConfigurationModal = () => {
        setIsConfigurationModalVisible(true);
    };

    const closeConfigurationModal = () => {
        setIsConfigurationModalVisible(false);
    };

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
                        swipeThreshold={175}
                        key={resetCard ? "reset" : "notReset"}
                        preventSwipe={['down']}
                    >
                        <View style={styles.card}>
                            {imageUrl && (
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
                            )}
                        </View>
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
                <ModalContent closeModal={closeConfigurationModal} />
            </Modal>

            {/* place info modal */}
            <Modal
                animationType="fade"
                visible={isPlaceInfoModalVisible}
                onRequestClose={closeConfigurationModal}
            >
                <TouchableWithoutFeedback onPress={closeConfigurationModal}>
                    <View />
                </TouchableWithoutFeedback>
                <ModalContent closeModal={closeConfigurationModal} />
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
    },
    cardImage: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        width: '100%',
        height: '100%',
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
