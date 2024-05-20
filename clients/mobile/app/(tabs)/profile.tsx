import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, Image, BackHandler, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, SIZES } from "../../constants";
import images from "../../constants/images";
import CustomButton from "../../components/shared/CustomButton";

const Profile = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    const items = [
        { id: '1', color: 'red', name: 'Item 1' },
        { id: '2', color: 'green', name: 'Item 2' },
        { id: '3', color: 'blue', name: 'Item 3' },
        { id: '4', color: 'yellow', name: 'Item 4' },
        { id: '5', color: 'purple', name: 'Item 5' },
        { id: '6', color: 'orange', name: 'Item 6' },
        // Daha fazla örnek veri ekleyebilirsiniz
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101114" }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}>

                    <View style={{ borderRadius: 10, borderColor: "white", borderWidth: 1, padding: 10 }}>
                        <Text style={{ alignSelf: "center", fontFamily: FONT.regular, color: "white" }}>Profile Card</Text>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Image style={{ width: 120, height: 120 }} source={images.algotur} resizeMode="contain">

                            </Image>
                            <View style={{ padding: 20, justifyContent: "center" }}>
                                <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", height: 25 }}>Username : ALGOTUR</Text>
                                <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", margin: 10, height: 25 }}>Created 6 Routes/3 Cards</Text>
                                <Text style={{ fontFamily: FONT.regular, alignSelf: "center", backgroundColor: "#121316", borderRadius: 10, color: "white", height: 25 }}>345 Followers/123 Following</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                            <CustomButton title="Change Password" buttonStyle={{
                                backgroundColor: "#101114",
                                borderColor: "white",
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                                textStyle={{ fontFamily: FONT.regular, }}></CustomButton>
                            <CustomButton title="Create a Card" buttonStyle={{
                                backgroundColor: "#101114",
                                borderColor: "white",
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                                textStyle={{ fontFamily: FONT.regular, }}></CustomButton>
                        </View>
                    </View>
                    <View style={{ borderRadius: 10, borderColor: "white", borderWidth: 1, padding: 10, marginTop: 10 }}>
                        <Text style={{ alignSelf: "flex-start", fontFamily: FONT.regular, color: "white" }}>Stories</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                {/* Örnek içerik */}
                                <View style={{ width: 120, height: 120, backgroundColor: 'red', marginRight: 10 }} />
                                <View style={{ width: 120, height: 120, backgroundColor: 'green', marginRight: 10 }} />
                                <View style={{ width: 120, height: 120, backgroundColor: 'blue', marginRight: 10 }} />
                                <View style={{ width: 120, height: 120, backgroundColor: 'yellow', marginRight: 10 }} />
                                <View style={{ width: 120, height: 120, backgroundColor: 'purple', marginRight: 10 }} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ borderRadius: 10, borderColor: "white", borderWidth: 1, padding: 10, marginTop: 10 }}>
                        <Text style={{ alignSelf: "flex-start", fontFamily: FONT.regular, color: "white", marginBottom: 10 }}>Listing Public Decks</Text>
                        <FlatList
                            data={items}
                            renderItem={({ item }) => (
                                <View style={{ width: 100, margin: 5, alignItems: 'center' }}>
                                    <View style={{ height: 100, width: '100%', backgroundColor: item.color }} />
                                    <Text style={{ color: 'white', marginTop: 5, fontFamily: FONT.regular }}>{item.name}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            numColumns={3} // Kaç sütun olacağını belirler
                            contentContainerStyle={{ alignItems: 'center' }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

