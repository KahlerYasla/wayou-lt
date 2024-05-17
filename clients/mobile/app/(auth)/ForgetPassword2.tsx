import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import CustomFormField from '../../components/CustomFormField'
import { FONT, SIZES } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { useRef } from 'react';
import images from '../../constants/images'




const ForgetPassword2 = () => {
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

export default ForgetPassword2