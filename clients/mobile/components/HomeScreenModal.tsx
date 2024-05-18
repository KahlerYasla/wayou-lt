import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import CustomButton from "./CustomButton";
import Images from "../constants/images";
import { Image } from "react-native";
import images from "../constants/images";
import CustomFormField from "./CustomFormField";
import RNPickerSelect from 'react-native-picker-select';
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { useConfigurationStore } from "../stores/ConfigurationStore";
import { useIsModalOpenStore } from "../stores/BehavioursStore";

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
    <SafeAreaView style={{
      backgroundColor: 'rgba(0, 0, 0, 1)', flex: 1, paddingTop: 60,
      paddingHorizontal: 20
    }}>
      <View style={{
        flexDirection: 'row', justifyContent: "flex-start",
        alignItems: "flex-start", marginBottom: 50,
      }}>
        <Image style={{ width: 25, height: 25 }}
          source={require("../assets/images/burgerMenu.png")}>
        </Image>
        <Text style={{
          marginLeft: 10, fontFamily: FONT.regular, fontSize: 16,
          marginTop: 4, height: 25, textAlignVertical: "bottom", color: "white"
        }}>
          Configurations
        </Text>
      </View>
      <View style={{
        alignItems: "flex-start",
        flexDirection: 'column', justifyContent: "space-between", marginBottom: 50
      }}>
        <Text style={{ color: "white", height: 30, fontFamily: FONT.regular }}>Selected Deck</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", gap: 10, alignItems: "center" }}>
          <RNPickerSelect
            placeholder={{ label: "Default Deck", value: null, }} // Placeholder
            style={{
              inputIOS: { color: 'white', textAlign: 'left' }, // iOS için giriş stili ve metni ortalamak için textAlign
              inputAndroid: { color: 'white', textAlign: 'left', justifyContent: "center" }, // Android için giriş stili ve metni ortalamak için textAlign
              iconContainer: { position: 'absolute', right: 0 } // ikon container stili
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
          <Entypo name="chevron-down" size={24} color="white" style={{ position: 'absolute', right: -30 }} />
        </View>
      </View>
      <View style={{
        alignItems: "flex-start",
        marginBottom: 50
      }}>
        <Text style={{ color: "white", height: 22, fontFamily: FONT.regular }}>Tags (or)</Text>
        <CustomFormField
          placeholder="Tags"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={{
            borderBottomColor: "",
            borderBottomWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
            width: "100%",
            marginTop: 1,
          }}
          inputTextStyle={{
            color: 'rgba(255, 255, 255, 0.2)',
            fontFamily: FONT.regular
          }}
          labelStyle={{
            margin: 0,
            fontSize: 0,
          }}
        >
        </CustomFormField>
      </View>
      <View style={{
        marginTop: 0, flexDirection: 'row',
        alignItems: "center", justifyContent: "flex-start", gap: 60
      }}>
        <Text style={{ color: "white", height: 22, fontFamily: FONT.regular }}>Min Price</Text>
        <Text style={{ color: "white", height: 22, fontFamily: FONT.regular }}>Max Price</Text>
        <Text style={{ color: "white", height: 22, fontFamily: FONT.regular }}>Origin</Text>
      </View>
      <View style={{
        marginTop: 0, flexDirection: 'row', marginBottom: 50,
        alignItems: "center", justifyContent: "flex-start", gap: 45
      }}>
        <CustomFormField
          placeholder="$ 0"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={{
            borderBottomColor: "",
            borderBottomWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
            width: "20%",
            marginTop: 1,
          }}
          inputTextStyle={{
            color: 'rgba(255, 255, 255, 0.2)',
            fontFamily: FONT.regular
          }}
          labelStyle={{
            margin: 0,
            fontSize: 0,
          }}
        ></CustomFormField>
        <CustomFormField
          placeholder="$ 0"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={{
            borderBottomColor: "",
            borderBottomWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
            width: "20%",
            marginTop: 1,
          }}
          inputTextStyle={{
            color: 'rgba(255, 255, 255, 0.2)',
            fontFamily: FONT.regular
          }}
          labelStyle={{
            margin: 0,
            fontSize: 0,
          }}
        ></CustomFormField>
        <TouchableOpacity onPress={() => {
          setIsModalOpen(true);
          router.push("MapSelection");
        }}>
          <View style={{ borderColor: "white", borderWidth: 1, borderRadius: 10, width: 45, height: 45, justifyContent: "center", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{}} source={require("../assets/images/LocationPinIcon.png")}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{
          color: "white", height: 22, fontFamily: FONT.regular,
          marginBottom: 0
        }}>Keyword (Space Between Each)</Text>
        <CustomFormField
          placeholder="Keywords"
          placeholderTextColor={"gray"}
          label=""
          otherStyles={{
            borderBottomColor: "",
            borderBottomWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
            width: "100%",
            marginTop: 1,
          }}
          inputTextStyle={{
            color: 'rgba(255, 255, 255, 0.2)',
            fontFamily: FONT.regular
          }}
          labelStyle={{
            margin: 0,
            fontSize: 0,
          }}
        >

        </CustomFormField>
      </View>
      <View style={{
        flex: 1, alignItems: "center",
        justifyContent: "flex-end", marginBottom: 80,
      }}>
        <CustomButton
          title="Save"
          onPress={() => {
            saveConfiguration(configuration);
            closeModal();
          }}
          style={{
            width: "100%",
          }}
        ></CustomButton>
      </View>

      {/* İkinci modalın içeriği */}
      {
        isSecondModalVisible && (
          <View>
            <TouchableOpacity onPress={closeSecondModal}>
              <Text>Kapat</Text>
            </TouchableOpacity>
            {/* İkinci modalın içeriği */}
          </View>
        )
      }

    </SafeAreaView >

  );
};

export default ModalContent;
