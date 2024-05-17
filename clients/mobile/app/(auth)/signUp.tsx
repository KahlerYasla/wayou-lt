import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFormField from "../../components/CustomFormField";
import { FONT, SIZES } from "../../constants";
import CustomButton from "../../components/CustomButton";
import images from "../../constants/images";

const signUp = () => {
  return (

    <SafeAreaView style={{ flex : 1, backgroundColor : "#101114" }}>
      <ScrollView  showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{ height: '100%' }}>
      <View
      style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
        <View
        style={{
          
          flex: 1,
          padding: SIZES.medium,
          justifyContent : "center",
        }}
        >
          <CustomFormField 
            label="" 
            placeholder="Username"
            otherStyles={{
                borderBottomColor:"",
                borderBottomWidth:1,
                borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
              }}
              inputTextStyle={{
                color: 'rgba(255, 255, 255, 0.2)',
                fontFamily:FONT.regular
              }}
              containerStyle={{
                marginBottom: 16,
              }}
            ></CustomFormField>
            <CustomFormField 
            label="" 
            placeholder="Email"
            otherStyles={{
                borderBottomColor:"",
                borderBottomWidth:1,
                borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
              }}
              inputTextStyle={{
                color: 'rgba(255, 255, 255, 0.2)',
                fontFamily:FONT.regular
              }}
              containerStyle={{
                marginBottom: 16,
              }}
            ></CustomFormField>
            <CustomFormField 
            label="" 
            placeholder="Password"
            otherStyles={{
                borderBottomColor:"",
                borderBottomWidth:1,
                borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
              }}
              inputTextStyle={{
                color: 'rgba(255, 255, 255, 0.2)',
                fontFamily:FONT.regular
              }}
              containerStyle={{
                marginBottom: 16,
              }}
            ></CustomFormField>

        <CustomFormField 
            label="" 
            placeholder="Repait Password"
            otherStyles={{
                borderBottomColor:"",
                borderBottomWidth:1,
                borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
              }}
              inputTextStyle={{
                color: 'rgba(255, 255, 255, 0.2)',
                fontFamily:FONT.regular
              }}
              containerStyle={{
                marginBottom: 16,
              }}
            ></CustomFormField>

            <CustomButton 
            title="Sign Up" 
            textStyle={{fontFamily:FONT.regular}}
            onPress={() => {""}}
            />
          <Image
            style={{ width: 300, height: 100, alignSelf:"flex-end", marginRight:25,marginTop:25}}
            source={images.logo}
            resizeMode='contain'
          />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default signUp;
