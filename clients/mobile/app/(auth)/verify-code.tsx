import { View, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

import CustomButton from '../../components/shared/CustomButton';
import CustomFormField from '../../components/shared/CustomFormField';

import images from '../../constants/images';

const VerifyCode = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <CustomFormField
              label=""
              placeholder="Verification Code"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomButton
              title="Verify Code"
              onPress={() => {
                alert("Code Verified Successfully!");
                router.push("new-pwd");
              }}
            />
            <Image
              style={styles.logo}
              source={images.bannerLogo}
              resizeMode="contain"
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
  },
  scrollViewContent: {
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  formFieldOtherStyles: {
    width: 300,
  },
  formFieldInputText: {
    color: "white",
  },
  formFieldContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: "flex-end",
    marginRight: 25,
    marginTop: 75,
  },
});

export default VerifyCode;
