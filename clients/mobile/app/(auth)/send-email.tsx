import { View, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

import CustomFormField from '../../components/shared/CustomFormField';
import CustomButton from '../../components/shared/CustomButton';
import { FONT, SIZES } from '../../constants';
import images from '../../constants/images';

const SendEmail = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <CustomFormField
              label=""
              placeholder="Email"
              style={styles.formField}
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomButton
              title="Send Verification Code To Email"
              textStyle={styles.buttonText}
              style={styles.button}
              onPress={() => { router.push("verify-code") }}
            />
            <Image
              style={styles.image}
              source={images.bannerLogo}
              resizeMode='contain'
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
  },
  scrollViewContent: {
    height: '100%',
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
  },
  formField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  formFieldOtherStyles: {
    borderBottomColor: "",
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  formFieldInputText: {
    color: 'white',
    fontFamily: FONT.regular,
  },
  formFieldContainer: {
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: FONT.regular,
  },
  image: {
    width: 265,
    alignSelf: "flex-end",
    marginTop: 90,
  },
});

export default SendEmail;
