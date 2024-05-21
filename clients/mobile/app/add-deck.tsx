import React from 'react';
import { View, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

import CustomButton from '../components/shared/CustomButton';
import CustomDatePicker from '../components/route/CustomDatePicker';
import CustomText from '../components/shared/CustomText';

import { FONT } from '../constants';
import icons from '../constants/icons';

const AddDeckScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.section}>
                        <CustomText style={styles.label}>Select a Deck</CustomText>
                        <RNPickerSelect
                            placeholder={{ label: "Default Deck", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                    <View style={styles.section}>
                        <CustomText style={styles.label}>Who Are You Going With</CustomText>
                        <RNPickerSelect
                            placeholder={{ label: "Alone", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Alone', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                    <View style={styles.section}>
                        <CustomText style={styles.label}>Pick The Start Point</CustomText>
                        <TouchableOpacity onPress={() => router.push("select-origin")}>
                            <View style={styles.iconContainer}>
                                <Image
                                    resizeMode="contain"
                                    style={styles.icon}
                                    source={icons.crossIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <CustomDatePicker />
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            title='Create Yourself'
                            style={styles.button}
                            onPress={() => router.push("select-origin")}
                        />
                        <CustomButton
                            title='Create Using AI'
                            onPress={() => router.push("route-info")}
                            style={styles.button}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
    },
    scrollViewContent: {
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    section: {
        flex: 1,
        marginVertical: 10,
    },
    label: {
        color: "white",
        textAlign: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        marginTop: 10,
        alignItems: "center",
    },
    icon: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,
        margin: 5,
        padding: 3,
        width: "80%",
    },
});

const pickerSelectStyles = {
    inputIOS: {
        color: 'white',
        textAlign: 'center',
    },
    inputAndroid: {
        color: 'white',
        textAlign: 'center',
        justifyContent: "center",
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
    },
};

export default AddDeckScreen;
