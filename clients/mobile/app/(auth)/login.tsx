import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import axios from "axios";

// components
import CustomButton from "../../components/shared/CustomButton";
import CustomFormField from "../../components/shared/CustomFormField";

// constants
import { FONT } from "../../constants";
import { API_BASE_URL } from "../../constants";
import images from "../../constants/images";
import icons from "../../constants/icons";

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

            router.push("home");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Login Failed");
        });
    }
  }

  const handleGoogleLogin = () => {
    alert("Google login is not implemented yet");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Image source={images.bannerLogo} style={styles.logo} />
            <View style={{ height: 10 }} />
            <CustomFormField
              label=""
              placeholder="Email or Username"
              onChangeText={(text) => setUserName(text)}
              inputTextStyle={styles.inputText}
              containerStyle={styles.inputContainer}
            />
            <View style={{ height: 20 }} />
            <CustomFormField
              label=""
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              otherStyles={{ marginTop: 1 }}
              inputTextStyle={styles.inputText}
              keyboardType={"visible-password"}
              containerStyle={styles.inputContainer}
            />
            <View style={{ height: 20 }} />
            <View style={styles.forgetPassword}>
              <Link style={styles.forgetPasswordLink} href={"send-email"}>
                Forget Password
              </Link>
            </View>
            <View style={{ height: 20 }} />
            <CustomButton
              title="Log in"
              onPress={() => validateLogin()}
              style={{ width: "80%", maxWidth: 400 }}
            />
            <View style={{ height: 10 }} />
            <View style={styles.googleLogin}>
              <Image source={icons.googleIcon} style={{ width: 20, height: 20, marginRight: 0 }} />
              <TouchableOpacity onPress={() => handleGoogleLogin()} style={styles.googleLoginButton}>
                <Text style={styles.googleLoginText}>
                  Login with Google
                </Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.signUp}>
            <TouchableOpacity onPress={() => { router.push("register") }} style={styles.signUpButton}>
              <Text style={styles.signUpText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 265,
    marginRight: "10%",
    alignSelf: "flex-end",
  },
  inputText: {
  },
  inputContainer: {
    marginBottom: 0,
    width: "80%",
    maxWidth: 400,
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    marginRight: "10%"
  },
  forgetPasswordLink: {
    color: "white",
    fontFamily: FONT.bold,
  },
  hiddenLabel: {
    margin: 0,
    fontSize: 0,
  },
  googleLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  googleLoginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  googleLoginText: {
    fontFamily: FONT.bold,
    color: 'white',
  },
  signUp: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signUpText: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: 14
  },
});

export default Login;
