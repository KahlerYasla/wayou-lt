import { View, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

import CustomFormField from '../../components/shared/CustomFormField';
import CustomButton from '../../components/shared/CustomButton';

import images from '../../constants/images';

const NewPWD = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.viewContent}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <CustomFormField
              label=""
              placeholder="New Password"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomFormField
              label=""
              placeholder="Repeat New Password"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomButton
              title="Apply New Password"
              textStyle={styles.buttonText}
              onPress={() => {
                alert("Password Changed Successfully!");
                router.replace("login");
              }}
            />
            <Image
              style={styles.logo}
              source={images.bannerLogo}
              resizeMode='contain'
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  viewContent: {
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
    borderBottomColor: "",
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', // 20% white
  },
  formFieldInputText: {
    color: 'rgba(255, 255, 255, 0.2)',
  },
  formFieldContainer: {
    marginBottom: 16,
  },
  buttonText: {
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: "flex-end",
    marginRight: 25,
    marginTop: 75,
  },
});

export default NewPWD;
