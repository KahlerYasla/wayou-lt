import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import CustomButton from "./CustomButton";
import Images from "../constants/images";
import { Image } from "react-native";
import images from "../constants/images";
import CustomFormField from "./CustomFormField";
import RNPickerSelect from 'react-native-picker-select';
import { router } from "expo-router";



interface ModalContentProps {
    closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {

    const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

    const openSecondModal = () => {
        setIsSecondModalVisible(true);
    };

    const closeSecondModal = () => {
        setIsSecondModalVisible(false);
    };

    return (
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',width: "100%",height: "100%"}}>
            <View style={{ flex:1,flexDirection: 'row' ,justifyContent:"flex-start",alignItems:"flex-start" ,padding:SIZES.medium,marginBottom:16}}>
                    <Image style ={{width :25,height:25}}source={require("../assets/images/burgerMenu.png")}></Image>
                    <Text style={{marginLeft:10,fontFamily:FONT.regular ,fontSize:25,height:50,color:"white"}}>Confugurations</Text>
            </View>
            <View style ={{flex:1,alignItems:"center"}}>
                <Text style ={{color:"white",height:22,fontFamily:FONT.regular}}>Selected Deck</Text>
                <RNPickerSelect 
                placeholder={{ label: "Default Deck", value: null ,}} // Placeholder öğesi
                style={{
                    inputIOS: { color: 'white', textAlign: 'center' }, // iOS için giriş stili ve metni ortalamak için textAlign
                    inputAndroid: {color: 'white', textAlign: 'center',justifyContent:"center" }, // Android için giriş stili ve metni ortalamak için textAlign
                    iconContainer: { position: 'absolute', right: 0} // ikon container stili
                }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                    />   
            </View> 
            <View style ={{flex:1,alignItems:"center"}}>
                <Text style ={{color:"white",height:22,fontFamily:FONT.regular}}>Tags (or)</Text>
                <CustomFormField 
                placeholder="Tags" 
                placeholderTextColor={"gray"}
                label=""
                otherStyles={{
                    borderBottomColor: "",
                    borderBottomWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
                    width: "80%",
                    marginTop:1,
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
            <View style ={{height:20,marginBottom:0,flexDirection: 'row' ,flex:1,alignItems:"center",justifyContent:"space-around"}}>
                <Text style ={{color:"white",height:22,fontFamily:FONT.regular}}>Min Price</Text>
                <Text style ={{color:"white",height:22,fontFamily:FONT.regular}}>Max Price</Text>
                <Text style={{ color: "white", height: 22, fontFamily: FONT.regular }}>Origin</Text>
            </View>
            <View style ={{height:20,marginTop:0,flexDirection: 'row' ,flex:1,alignItems:"center",justifyContent:"space-around"}}>
                <CustomFormField
                placeholder="Keywords" 
                placeholderTextColor={"gray"}
                label=""
                otherStyles={{
                    borderBottomColor: "",
                    borderBottomWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
                    width: "20%",
                    marginTop:1,
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
                placeholder="Keywords" 
                placeholderTextColor={"gray"}
                label=""
                otherStyles={{
                    borderBottomColor: "",
                    borderBottomWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
                    width: "20%",
                    marginTop:1,
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
                router.push("MapSelection");
                closeModal();
                 }}>
                <Image
                    style ={{width :25,height:25}}source={require("../assets/images/LocationPinIcon.png")}
                ></Image>
                </TouchableOpacity>
            </View>   
            <View style ={{flex:1,alignItems:"center"}}>
                <Text style ={{color:"white",height:22,fontFamily:FONT.regular,marginBottom:5}}>Keyword (Space Between Each)</Text>
                <CustomFormField 
                placeholder="Keywords" 
                placeholderTextColor={"gray"}
                label=""
                otherStyles={{
                    borderBottomColor: "",
                    borderBottomWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
                    width: "80%",
                    marginTop:1,
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
            <View style ={{flex:1,alignItems:"center"}}>
                <CustomButton title="Save" onPress={closeModal}></CustomButton>
            </View>
            
             {/* İkinci modalın içeriği */}
             {isSecondModalVisible && (
                <View>
                    <TouchableOpacity onPress={closeSecondModal}>
                        <Text>Kapat</Text>
                    </TouchableOpacity>
                    {/* İkinci modalın içeriği */}
                </View>
            )}
            
        </View>
        
    );
};

export default ModalContent;
