import { useState } from "react";
import { FONT } from "../../constants/theme"
import images from "../../constants/images";


import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from "react-native";


import { Link, Stack, router, useRouter } from "expo-router";

import { COLORS, SIZES } from "../../constants";
import CustomButton from "../../components/CustomButton";
import CustomFormField from "../../components/CustomFormField";

const loginToHome = () => {
  router.push("home")
}

const Login = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#101114" }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{ height: '100%' }}>
        <View style={{
            flex: 1,
            alignItems:"center",
            padding: SIZES.medium,
            justifyContent: "center",
          }}>
         <View>

          <Image
            style={{ width: 300, height: 100, alignSelf:"flex-end", marginRight:25}}
            source={images.logo}
            resizeMode='contain'
          />
          <CustomFormField
            label=""
            placeholder="Email"
            otherStyles={{
              borderBottomColor: "",
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
            }}
            inputTextStyle={{
              color: 'rgba(255, 255, 255, 0.2)',
              fontFamily: FONT.regular
            }}
            containerStyle={{
              marginBottom: 0,
            }}
          ></CustomFormField>
              
          <CustomFormField
            label=""
            placeholder="Password"
            otherStyles={{
              borderBottomColor: "",
              borderBottomWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)', // Beyazın %20'si
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
            keyboardType={"visible-password"}
          ></CustomFormField>

          <View style={{ alignItems: "flex-end" }}>
            <Link style={{ marginBottom: 16, color: "white", fontFamily: FONT.regular }} href={"./ForgetPassword1"}>Forget Password</Link>
          </View>

          <CustomButton
            title="Log in"
            textStyle={{ fontFamily: FONT.regular }}
            onPress={() => loginToHome()}
          />
        </View>
        </View>
          <View style={{  justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
            <TouchableOpacity onPress={() => { router.push("signUp") }} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 20 }}>
              <Text style={{ color: 'white', fontFamily: FONT.regular }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;