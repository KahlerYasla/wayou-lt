import { useState } from "react";
import { FONT } from "../../constants/theme"
import { API_BASE_URL } from "../../constants";
import images from "../../constants/images";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';

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

const Login = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    if (userName === "" || password === "") {
      alert("Please fill all fields");
    } else {
      console.log("Login request sent with username: " + userName + " and password: " + password);

      axios.post(`${API_BASE_URL}/auth/login`, {
        username: userName,
        password: password,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Login Successful");

            // localStorage.setItem("token", response.data.token);

            router.push("home");
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
            console.log('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Request data:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
          }
          console.log('Config:', error.config);
          alert("Login Failed");
        });
    }
  }

  const handleGoogleLogin = () => {
    alert("Google login is not implemented yet");
  }

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
          alignItems: "center",
          padding: SIZES.medium,
          justifyContent: "center",
        }}>
          <View>

            <Image
              style={{ width: 300, height: 100, alignSelf: "flex-end", marginRight: 25 }}
              source={images.logo}
              resizeMode='contain'
            />
            <CustomFormField
              label=""
              placeholder="Email"
              onChangeText={(text) => setUserName(text)}
              otherStyles={{
                borderBottomColor: "",
                borderBottomWidth: .5,
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
              onChangeText={(text) => setPassword(text)}
              otherStyles={{
                borderBottomColor: "",
                borderBottomWidth: .5,
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
              <Link style={{ marginBottom: 30, marginTop: 15, color: "white", fontFamily: FONT.regular }} href={"./ForgetPassword1"}>Forget Password</Link>
            </View>

            <CustomButton
              title="Log in"
              textStyle={{ fontFamily: FONT.regular }}
              onPress={() => validateLogin()}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <AntDesign name="google" size={24} color="white" />
              <TouchableOpacity onPress={() => handleGoogleLogin()}
                style={{
                  justifyContent: 'center', alignItems: 'center',
                  paddingVertical: 20, paddingHorizontal: 20, borderRadius: 5,
                }}>
                <Text style={{ color: 'white', fontFamily: FONT.regular }}>Login with Google</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity onPress={() => { router.push("signUp") }} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={{ color: 'white', fontFamily: FONT.regular }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;