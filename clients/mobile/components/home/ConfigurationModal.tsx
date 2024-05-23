import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { Entypo } from '@expo/vector-icons';

import RNPickerSelect from 'react-native-picker-select';

import { useConfigurationStore } from "../../stores/ConfigurationStores";
import { useIsModalOpen } from "../../stores/BehavioursStores";

import icons from "../../constants/icons";

import CustomButton from "../shared/CustomButton";
import CustomFormField from "../shared/CustomFormField";
import CustomText from "../shared/CustomText";

interface ModalContentProps {
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const configuration = useConfigurationStore((state) => state.configuration);
  const saveConfiguration = useConfigurationStore((state) => state.saveConfiguration);
  const loadConfiguration = useConfigurationStore((state) => state.loadConfiguration);

  const setIsModalOpen = useIsModalOpen((state) => state.setIsModalOpen);

  const openSecondModal = () => {
    setIsSecondModalVisible(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.viewContent}>

        <View style={styles.header}>
          <Image style={styles.icon} source={icons.configurationIcon} />
          <CustomText style={styles.headerText} boldness="bold">
            Configurations
          </CustomText>
        </View>

        <View style={{ height: 50 }} />

        <View style={styles.section}>
          <CustomText style={styles.label}>Selected Deck</CustomText>
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
          <CustomText style={styles.label}>Tags (or)</CustomText>
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
          <CustomText style={styles.label}>Min Price</CustomText>
          <CustomText style={styles.label}>Max Price</CustomText>
          <CustomText style={styles.label}>
            <View style={{ width: 30 }} />
            Origin
          </CustomText>
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
          <CustomText style={styles.label}>Keyword (Space Between Each)</CustomText>
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
              <CustomText>Kapat</CustomText>
            </TouchableOpacity>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex: 1,
  },
  viewContent: {
    backgroundColor: 'black',
    height: '100%',
    padding: 30,
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
  },
  saveButton: {
    width: "100%",
  },
});

export default ModalContent;
