import React from 'react';
import { View, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

import CustomButton from '../components/shared/CustomButton';
import CustomDatePicker from '../components/route/CustomDatePicker';
import CustomText from '../components/shared/CustomText';

import icons from '../constants/icons';

const CreateRoute = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>

          <View style={styles.section}>

            <CustomText style={styles.label}>Select a Deck to Create From:</CustomText>

            {/* RN picker  */}
            <RNPickerSelect
              placeholder={{
                label: "Default Deck",
                value: null
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />

          </View>

          <View style={styles.section}>
            <CustomText style={styles.label}>Who Are You Going With:</CustomText>
            <RNPickerSelect
              placeholder={{ label: "Alone", value: null }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Alone', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>

          <View style={styles.section}>

            <CustomText style={styles.label}>Pick The Start Point:</CustomText>

            <TouchableOpacity onPress={() => router.push("select-origin")}>
              <View style={styles.iconContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.icon}
                  source={icons.crossIcon}
                />
              </View>
            </TouchableOpacity>

          </View>

          <CustomDatePicker />

          <View style={styles.buttonContainer}>
            <CustomButton
              title='Create Yourself'
              onPress={() => router.push("select-origin")}
              style={styles.button}
            />
            <CustomButton
              title='Create Using AI'
              onPress={() => router.push("route-info")}
              style={styles.button}
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
    padding: 30,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  section: {
    marginVertical: 20,
  },
  label: {
    color: "white",
    textAlign: 'left',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: "black",
    width: 24,
    alignItems: "flex-end",
  },
  icon: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
    width: '100%',
  },

  // date picker styles
  inputIOS: {
    color: 'white',
    textAlign: 'center',
  },
  inputAndroid: {
    color: 'white',
    textAlign: 'center',
    justifyContent: "center",
  },
});

export default CreateRoute;
