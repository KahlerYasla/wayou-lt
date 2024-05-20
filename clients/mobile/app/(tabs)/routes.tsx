import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, SIZES } from "../../constants";
import CustomButton from "../../components/shared/CustomButton";
import images from "../../constants/images";

const Routes = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101114" }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}  >
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Text style={{ alignSelf: "flex-start", fontFamily: FONT.regular, color: "white", marginBottom: 10, fontSize: 20 }}>Listing My Routes</Text>
                    <View style={{
                        borderColor: "white", borderLeftWidth: 2, padding: 10,
                        shadowColor: "black", // iOS için gölge rengi
                        shadowOffset: { width: 0, height: 2 }, // iOS için gölge ofseti
                        shadowOpacity: 1, // iOS için gölge opaklığı
                        shadowRadius: 10, // iOS için gölge yarıçapı
                        elevation: 10, // Android için gölge
                    }}>
                        <Text style={{ alignSelf: "center", fontFamily: FONT.regular, color: "white" }}>Profile Card</Text>
                        <View>


                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View>
                                    <Image style={{ width: 120, height: 120 }} source={images.algotur} resizeMode="contain">

                                    </Image>
                                    <Text style={{ fontFamily: FONT.regular, alignSelf: "center", borderRadius: 10, color: "white", height: 25 }}>Some Deck</Text>
                                </View>
                                <View style={{ padding: 20, justifyContent: "center" }}>
                                    <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", height: 25 }}>Creator : ALGOTUR</Text>
                                    <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", margin: 10, height: 25 }}>Starts: 10/12/24 12:PM</Text>
                                    <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", height: 25 }}>From : Kadiköy - Istanbul</Text>
                                    <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", height: 25 }}>Estimated Need : 100-200$</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <CustomButton title="Edit The Route" buttonStyle={{
                                    backgroundColor: "#000",
                                    borderRadius: 20,
                                    width: "100%",
                                }}
                                    textStyle={{ fontFamily: FONT.regular, }}></CustomButton>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
                                <Text style={{ fontSize: 18, color: "white", margin: 5, backgroundColor: "blue", borderRadius: 10, height: 35, padding: 5 }}>Tag 1</Text>
                                <Text style={{ fontSize: 18, color: "white", margin: 5, backgroundColor: "blue", borderRadius: 10, height: 35, padding: 5 }}>Tag 2</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <View style={{ margin: 10 }}>
                        <CustomButton title="Create Deck" onPress={() => router.push("addDeck")}>

                        </CustomButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Routes;