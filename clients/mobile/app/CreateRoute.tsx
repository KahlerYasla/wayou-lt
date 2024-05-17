import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { FONT } from '../constants';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';

const CreateRoute = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#101114", width:"100%",height:"100%"}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{ height: '100%' }}>

        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateRoute