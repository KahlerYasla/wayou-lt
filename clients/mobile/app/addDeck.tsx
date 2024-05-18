import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { FONT } from '../constants';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import CustomDatePicker from '../components/route-screen-components/CustomDatePicker';


const addDeck = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101114", width: "100%", height: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{ height: '100%' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginTop: 10, fontFamily: FONT.regular, color: "white", justifyContent: 'center', alignSelf: "center", }}>Select a Deck</Text>
                        <RNPickerSelect
                            placeholder={{ label: "Default Deck", value: null, }} // Placeholder öğesi
                            style={{
                                inputIOS: { color: 'white', textAlign: 'center' }, // iOS için giriş stili ve metni ortalamak için textAlign
                                inputAndroid: { color: 'white', textAlign: 'center', justifyContent: "center" }, // Android için giriş stili ve metni ortalamak için textAlign
                                iconContainer: { position: 'absolute', right: 0 } // ikon container stili
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginTop: 10, fontFamily: FONT.regular, color: "white", justifyContent: 'center', alignSelf: "center", }}>Who Are You Going With</Text>
                        <RNPickerSelect
                            placeholder={{ label: "Alone", value: null, }}
                            style={{
                                inputIOS: { color: 'white', textAlign: 'center' },
                                inputAndroid: { color: 'white', textAlign: 'center', justifyContent: "center" },
                                iconContainer: { position: 'absolute', right: 0 }
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Alone', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginTop: 10, fontFamily: FONT.regular, color: "white", justifyContent: 'center', alignSelf: "center", }}>Pick The Start Point</Text>
                        <TouchableOpacity onPress={() => {
                            router.push("selectCoordinate")
                        }}>
                            <View style={{ marginTop: 10, alignItems: "center" }}>
                                <View style={{ borderColor: "white", borderWidth: 1, borderRadius: 10, width: 45, height: 45, justifyContent: "center", alignItems: "center" }}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ alignSelf: 'center' }} source={require("../assets/images/LocationPinIcon.png")}
                                    ></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <CustomDatePicker />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <CustomButton title='Create Yourself'
                            buttonStyle={{ borderRadius: 10, margin: 5, padding: 3, width: "80%" }}
                            onPress={() => router.push("selectCoordinate")}
                        ></CustomButton>
                        <CustomButton title='Create Using AI'
                            onPress={() => router.push("ResultOfAI")}
                            buttonStyle={{ borderRadius: 10, margin: 5, padding: 3, width: "80%" }}
                        ></CustomButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default addDeck