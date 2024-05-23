import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

// components
import CustomButton from "../../components/shared/CustomButton";
import CustomFormField from "../../components/shared/CustomFormField";
import CustomText from "../../components/shared/CustomText";

// constants
import { FONT } from "../../constants";
import images from "../../constants/images";
import icons from "../../constants/icons";

// stores
import { useAuthCredentials } from "../../stores/AuthStores";

const Login = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // stores
  const authCredentials = useAuthCredentials((state) => state);
  const requestLogin = useAuthCredentials((state) => state.requestLogin);

  useEffect(() => {
    // if user is already logged in, redirect to home page
    if (authCredentials.token) {
      console.log("User is already logged in with credentials: ", authCredentials);
      router.push("home");
    }
    else {
      console.log("First login proccess!");
    }
  }, []);

  // ===============================================================================
  const validateLogin = () => {
    if (userName === "" || password === "") {
      alert("Please fill all fields");
    } else {
      requestLogin(userName, password).then((success: boolean) => {
        if (success) {
          console.warn("Login successful\n");
          router.push("home");
        } else {
          console.warn("Login failed\n");
        }
      });
    }
  };

  // ===============================================================================
  const handleGoogleLogin = () => {
    alert("Google login is not implemented yet");
  }

  // ===============================================================================
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
              <CustomText style={styles.forgetPasswordLink} onPress={() => { router.push("send-email") }}>
                Forgot Password?
              </CustomText>
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
  inputText: {},
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
