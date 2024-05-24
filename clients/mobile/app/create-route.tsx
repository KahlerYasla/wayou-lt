import React from 'react';
import { View, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

// components
import CustomButton from '../components/shared/CustomButton';
import CustomText from '../components/shared/CustomText';
import CustomFormField from '../components/shared/CustomFormField';

// constants
import icons from '../constants/icons';

// stores
import { useRouteStore } from '../stores/RouteStores';

const CreateRoute = () => {

  const generateRoute = useRouteStore((state) => state.generateRoute);

  const handleCreateRoute = async () => {
    try {
      // Call generateRoute function and wait for its response
      await generateRoute(2);
      // After generateRoute completes successfully, navigate to "route-info" screen
      router.replace("route-info");
    } catch (error) {
      console.error("Error generating route:", error);
    }
  };

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
                value: "default"
              }}
              onValueChange={(value) => console.log(value)}
              items={[]}
            />

          </View>

          <View style={styles.section}>

            <CustomText style={styles.label}>Who Are You Going With:</CustomText>

            <RNPickerSelect
              placeholder={{
                label: "Alone",
                value: "alone"
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Partner', value: 'partner' },
                { label: 'Group', value: 'group' },
              ]}
            />

          </View>

          <View style={styles.section}>

            <CustomText style={styles.label}>Pick The Near Start Point:</CustomText>

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

          {/* <CustomDatePicker /> */}

          {/* how many days will you be on the trip */}
          <View style={styles.section}>
            <CustomFormField
              placeholder="Enter Number of Days"
              keyboardType="numeric"
              label="How Many Days:"
            />
          </View>

          <View style={styles.buttonContainer}>

            {/* <CustomButton
              title='Create Yourself'
              onPress={() => router.push("select-origin")}
              style={styles.button}
            /> */}

            <CustomButton
              title='Create Using AI'
              onPress={handleCreateRoute}
              style={styles.button}
            />

          </View>

        </View>
      </ScrollView>

      {/* floating button */}
      <View style={styles.backButtonContainer}>
        <CustomButton
          title="<"
          onPress={() => router.replace("routes")}
        // icon={icons.chatIcon}
        />
      </View>

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
    paddingVertical: 60,
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
  backButtonContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 10,
  },
});

export default CreateRoute;
