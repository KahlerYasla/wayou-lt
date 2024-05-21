import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Modal } from "react-native";

import TinderCard from 'react-tinder-card';

import ModalContent from "../../components/home/HomeScreenModal";
import { useIsModalOpenStore } from "../../stores/BehavioursStore";
import icons from "../../constants/icons";

const Home = () => {
    const router = useRouter();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [imageUrl, setImageUrl] = useState('');
    const [resetCard, setResetCard] = useState(false);

    const isModalOpen = useIsModalOpenStore((state) => state.isModalOpen);

    useEffect(() => {
        setIsModalVisible(isModalOpen);
    }, [isModalOpen]);

    useEffect(() => {
        fetchImage();
    }, []);

    useEffect(() => {
        if (imageUrl) {
            setResetCard(true);
        }
    }, [imageUrl]);

    const fetchImage = async () => {
        try {
            const response = await fetch('https://picsum.photos/800/1200');
            if (response.ok) {
                console.log('Image fetched successfully!');
                setImageUrl(response.url);
            }
        } catch (error) {
            alert('Error fetching image. Please check your internet connection.');
        }
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const onSwipe = (direction: 'left' | 'right' | 'up' | 'down') => {
        console.log('You swiped: ' + direction);
        if (direction === "up") {
            router.push("card-info");
        } else if (direction === "right" || direction === "left") {
            fetchImage(); // Fetch a new image on swipe
        }
    };

    const handleCardReset = () => {
        setResetCard(false);
    };

    return (
        <SafeAreaView style={styles.safeArea}>

            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>

                    {/* tinder card */}
                    <TinderCard
                        onSwipe={onSwipe}
                        key={resetCard ? "reset" : "notReset"}
                        onCardLeftScreen={handleCardReset}
                        preventSwipe={['down']}
                    >
                        <View style={styles.card}>
                            {imageUrl && (
                                <Image
                                    resizeMode="cover"
                                    source={{ uri: imageUrl }}
                                    style={styles.cardImage}
                                />
                            )}
                        </View>
                    </TinderCard>

                </View>

                {/* modal button */}
                <TouchableOpacity onPress={openModal} style={styles.modalButton}>
                    <View style={styles.modalButtonContent}>
                        <Image
                            style={styles.modalButtonImage}
                            source={icons.configurationIcon}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

            </ScrollView>

            {/* modal */}
            <Modal
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View />
                </TouchableWithoutFeedback>
                <ModalContent closeModal={closeModal} />
            </Modal>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "black",
    },
    scrollViewContent: {
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
