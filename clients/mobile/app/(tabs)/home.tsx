import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, SIZES } from "../../constants";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { Modal } from "react-native";
import ModalContent from "../../components/HomeScreenModal";
import CustomButton from "../../components/CustomButton";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101114" }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: '100%' }}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        paddingRight:0,
                    }}>
                    <View>
                        <CustomButton textStyle={{color:"white"}} onPress={()=>router.push("CardInfos")} title="go card infos"></CustomButton>
                    </View>
                <TouchableOpacity onPress={openModal} style={{top:150,position :"absolute",marginEnd:0, paddingEnd:0, justifyContent:"center",alignItems:"center",backgroundColor:'rgba(19, 16, 20, 0.8)',alignSelf:"flex-end",borderBottomLeftRadius:20,borderTopLeftRadius:20, width:50,height:50,}}>
                    <View style={{position :"absolute",marginEnd:0, paddingEnd:0, justifyContent:"center",alignItems:"center",backgroundColor:'rgba(19, 16, 20, 0.8)',alignSelf:"flex-end",borderBottomLeftRadius:20,borderTopLeftRadius:20, width:50,height:50,}}>
                    <Image
                        style ={{}}
                            source={require("../../assets/images/burgerMenu.png")}
                        />
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View/>
                </TouchableWithoutFeedback>
                <ModalContent closeModal={closeModal} />
            </Modal>
        </SafeAreaView>
    );
};

export default Home;