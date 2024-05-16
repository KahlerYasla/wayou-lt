import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomFormField from '../../components/CustomFormField'
import { FONT, SIZES } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { useRef } from 'react';




const ForgetPassword2 = () => {
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
      

      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword2