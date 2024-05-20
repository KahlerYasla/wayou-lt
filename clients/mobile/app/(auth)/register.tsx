import { View, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFormField from "../../components/shared/CustomFormField";
import { FONT, SIZES } from "../../constants";
import CustomButton from "../../components/shared/CustomButton";
import images from "../../constants/images";

const Register = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <CustomFormField
              label=""
              placeholder="Username"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomFormField
              label=""
              placeholder="Email"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomFormField
              label=""
              placeholder="Password"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomFormField
              label=""
              placeholder="Repeat Password"
              otherStyles={styles.formFieldOtherStyles}
              inputTextStyle={styles.formFieldInputText}
              containerStyle={styles.formFieldContainer}
            />
            <CustomButton
              title="Sign Up"
              textStyle={styles.buttonText}
              onPress={() => { "" }}
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
    backgroundColor: "#000000",
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
    width: "80%",
    justifyContent: "center",
  },
  formFieldOtherStyles: {
    borderBottomColor: "",
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  formFieldInputText: {
    color: 'rgba(255, 255, 255, 0.2)',
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
    height: 100,
    alignSelf: "flex-end",
    marginTop: 25,
  },
});

export default Register;
