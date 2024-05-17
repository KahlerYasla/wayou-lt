import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import CustomFormField from '../../components/CustomFormField'
import { FONT, SIZES } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import images from '../../constants/images'

const ForgetPassword3 = () => {
  return (
    
    <SafeAreaView style={{ flex : 1, backgroundColor : "#101114" }}>
    <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{ height: '100%' }}>
      <View   style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
      <View
      style={{
        flex: 1,
        padding: SIZES.medium,
        justifyContent : "center",
      }}
      >
      <CustomFormField 
            label="" 
            placeholder="New Password"
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
            placeholder="Repeat New Password"
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
            title="Send Verifacition Code To Email" 
            textStyle={{fontFamily:FONT.regular}}
            onPress={() => {router.push("ForgetPassword2")}}
            />
             <Image
            style={{ width: 300, height: 100, alignSelf:"flex-end", marginRight:25,marginTop:75}}
            source={images.logo}
            resizeMode='contain'
          />
      </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword3