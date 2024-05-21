import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FONT } from "../../constants";
import CustomButton from "../shared/CustomButton";
import CustomFormField from "../shared/CustomFormField";
import RNPickerSelect from 'react-native-picker-select';
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { useConfigurationStore } from "../../stores/ConfigurationStore";
import { useIsModalOpenStore } from "../../stores/BehavioursStore";
import icons from "../../constants/icons";
import CustomText from "../shared/CustomText";

interface ModalContentProps {
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const configuration = useConfigurationStore((state) => state.configuration);
  const saveConfiguration = useConfigurationStore((state) => state.saveConfiguration);
  const loadConfiguration = useConfigurationStore((state) => state.loadConfiguration);

  const setIsModalOpen = useIsModalOpenStore((state) => state.setIsModalOpen);

  const openSecondModal = () => {
    setIsSecondModalVisible(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.header}>
        <Image style={styles.icon} source={icons.configurationIcon} />
        <CustomText style={styles.headerText} boldness="bold">
          Configurations
        </CustomText>
      </View>

      <View style={{ height: 50 }} />

      <View style={styles.section}>
        <Text style={styles.label}>Selected Deck</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{ label: "Default Deck", value: null }}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
              iconContainer: styles.pickerIconContainer,
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
          <Entypo name="chevron-down" size={20} color="white" style={styles.pickerIcon} />
        </View>
      </View>

      <View style={{ height: 50 }} />

      <View style={styles.section}>
        <Text style={styles.label}>Tags (or)</Text>
        <CustomFormField
          placeholder="Tags"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={styles.inputField}
          inputTextStyle={styles.inputText}
          labelStyle={styles.hiddenLabel}
        />
      </View>

      <View style={{ height: 50 }} />

      <View style={styles.row}>
        <Text style={styles.label}>Min Price</Text>
        <Text style={styles.label}>Max Price</Text>
        <Text style={styles.label}>
          <View style={{ width: 30 }} />
          Origin
        </Text>
      </View>
      <View style={styles.row}>
        <CustomFormField
          placeholder="$ 0"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={styles.priceField}
          inputTextStyle={styles.inputText}
          labelStyle={styles.hiddenLabel}
        />
        <CustomFormField
          placeholder="$ 0"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={styles.priceField}
          inputTextStyle={styles.inputText}
          labelStyle={styles.hiddenLabel}
        />
        <TouchableOpacity onPress={() => {
          setIsModalOpen(true);
          router.push("map-selection");
        }}>
          <View style={styles.iconButton}>
            <Image resizeMode="contain" style={styles.iconImage} source={icons.crossIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50 }} />

      <View style={styles.section}>
        <Text style={styles.label}>Keyword (Space Between Each)</Text>
        <CustomFormField
          placeholder="Keywords"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={styles.inputField}
          inputTextStyle={styles.inputText}
          labelStyle={styles.hiddenLabel}
        />
      </View>
      <View style={styles.saveButtonContainer}>
        <CustomButton
          title="Save"
          onPress={() => {
            saveConfiguration(configuration);
            closeModal();
          }}
          style={styles.saveButton}
        />
      </View>

      {isSecondModalVisible && (
        <View>
          <TouchableOpacity onPress={closeSecondModal}>
            <Text>Kapat</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: 3,
    height: 25,
    textAlignVertical: "bottom",
    color: "white",
  },
  section: {
    alignItems: "flex-start",
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    height: 30,
    fontFamily: FONT.regular,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerInput: {
    color: 'white',
    textAlign: 'left',
  },
  pickerIconContainer: {
    position: 'absolute',
    right: 0,
  },
  pickerIcon: {
    position: 'absolute',
    right: -30,
  },
  inputField: {
    borderBottomColor: "",
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: "100%",
    marginTop: 1,
  },
  inputText: {
    color: 'rgba(255, 255, 255, 0.2)',
    fontFamily: FONT.regular,
  },
  hiddenLabel: {
    margin: 0,
    fontSize: 0,
  },
  row: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 50,
  },
  priceField: {
    borderBottomColor: "",
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: "20%",
    marginTop: 1,
  },
  iconButton: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 15,
    height: 15,
  },
  saveButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 80,
  },
  saveButton: {
    width: "100%",
  },
});

export default ModalContent;
