import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomFormField from '../../components/CustomFormField'
import { FONT, SIZES } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const ForgetPassword1 = () => {
  return (
    
    <SafeAreaView style={{ flex : 1, backgroundColor : "#101114" }}>
    <ScrollView>
      <View
      style={{
        flex: 1,
        padding: SIZES.medium,
        justifyContent : "center",
      }}
      >
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

             <CustomButton 
            title="Send Verifacition Code To Email" 
            textStyle={{fontFamily:FONT.regular}}
            onPress={() => {router.push("ForgetPassword2")}}
            />

      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword1