import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SIZES } from "../../constants";
import { Modal } from "react-native";
import ModalContent from "../../components/home/HomeScreenModal";
import TinderCard from 'react-tinder-card';
import { useIsModalOpenStore } from "../../stores/BehavioursStore";
import images from "../../constants/images";

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    type Direction = 'up' | 'down' | 'left' | 'right';
    type MyIdentifier = string;
    const [resetCard, setResetCard] = useState(false);

    const isModalOpen = useIsModalOpenStore((state) => state.isModalOpen);

    // Kart dizisi ve mevcut kart indeksi
    const cardArray = [images.card1, images.card2, images.card3, images.card4, images.card5]; // Gerekli tüm kartları buraya ekleyin
    const [cardIndex, setCardIndex] = useState(0);

    useEffect(() => {

        setIsModalVisible(isModalOpen);
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const onSwipe = (direction: Direction) => {
        console.log('You swiped: ' + direction);
        if (direction === "up") {
            router.push("CardInfos");
        } else if (direction === "right" || direction === "left") {
            // Mevcut kart indeksini artır
            if (cardIndex < cardArray.length - 1) {

                if (direction === "right" || direction === "left") {
                    setCardIndex(cardIndex + 1);
                    setResetCard(true)
                }
            } else {
                setCardIndex(0); // Döngüsel olarak tekrar başa dön
                setResetCard(true)
            }
        }
    };

    const handleCardReset = () => {
        setResetCard(false); // Kartı sıfırla
        setCardIndex(prevIndex => (prevIndex + 1) % cardArray.length); // Bir sonraki kartı göster
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101114" }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: '100%', padding: 15 }}>
                <View style={{ flex: 1, padding: 0, paddingRight: 0 }}>
                    <TinderCard
                        onSwipe={onSwipe}
                        key={resetCard ? "reset" : "notReset"}
                        onCardLeftScreen={handleCardReset}
                        preventSwipe={['down']}
                    >
                        <View style={{ backgroundColor: 'white', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                resizeMode="cover"
                                source={cardArray[cardIndex]}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                    </TinderCard>
                    <TouchableOpacity onPress={openModal} style={{
                        top: 150, position: "absolute", marginEnd: 0, paddingEnd: 0,
                        justifyContent: "center", alignItems: "center",
                        backgroundColor: 'rgba(19, 16, 20, 0.8)', right: -20,
                        borderBottomLeftRadius: 20, borderTopLeftRadius: 20,
                        width: 50, height: 50
                    }}>
                        <View style={{ position: "absolute", marginEnd: 0, paddingEnd: 0, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(19, 16, 20, 0.8)', alignSelf: "flex-end", borderBottomLeftRadius: 20, borderTopLeftRadius: 20, width: 50, height: 50 }}>
                            <Image
                                style={{}}
                                source={images.bannerLogo}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

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

        </SafeAreaView >
    );
};

export default Home;
