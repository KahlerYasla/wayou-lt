import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { FONT } from '../constants'

const ResultOfAI = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#101114", width: "100%", height: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <View style={{
                    justifyContent: 'center', marginHorizontal: 18,
                    flex: 1, width: "100%", height: "100%"
                }}>
                    <View style={{}}>
                        <Text style={{
                            marginTop: 10, fontFamily: FONT.regular,
                            color: "white", justifyContent: 'flex-start',
                            alignSelf: "flex-start", fontSize: 20,
                            textDecorationLine: "underline"
                        }}>AI Generated Trip</Text>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: .2,
                            borderColor: "white",
                            width: "90%",
                            paddingBottom: 10,
                        }}
                    >
                        <Text style={{
                            borderLeftWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: "white", marginTop: 10,
                            fontFamily: FONT.regular, color: "white",
                            justifyContent: "center"
                        }}>
                            Description of the route will be here.
                        </Text>
                    </View>
                    <View >
                        <Text style={{
                            marginTop: 10, fontFamily: FONT.bold,
                            color: "white", justifyContent: "center"
                        }}>Day 1:</Text>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 10 }}>
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
                    <View
                        style={{
                            borderBottomWidth: .2,
                            borderColor: "white",
                            width: "90%",
                            paddingBottom: 10,
                        }}
                    >
                        <Text style={{
                            borderLeftWidth: 1,
                            borderColor: "white", marginTop: 10, fontFamily: FONT.regular,
                            color: "white", justifyContent: "center"
                        }}>
                            Plan of the day will be here.
                        </Text>
                    </View>
                </View>

                <View style={{
                    justifyContent: 'center', marginHorizontal: 18,
                    flex: 1, width: "100%", height: "100%"
                }}>
                    <View >
                        <Text style={{
                            marginTop: 10, fontFamily: FONT.bold,
                            color: "white", justifyContent: "center"
                        }}>Day 2:</Text>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 10 }}>
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
                    <View
                        style={{
                            borderBottomWidth: .2,
                            borderColor: "white",
                            width: "90%",
                            paddingBottom: 10,
                        }}
                    >
                        <Text style={{
                            borderLeftWidth: 1,
                            borderColor: "white", marginTop: 10, fontFamily: FONT.regular,
                            color: "white", justifyContent: "center"
                        }}>
                            Plan of the day will be here.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ResultOfAI