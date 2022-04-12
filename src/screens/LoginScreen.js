import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";

import CardButton from "../components/cardButton";
import InputText from "../components/InputText";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={style.scaffold}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ alignSelf: "center", marginBottom: 15 }}
      />
      <Text style={style.textDesc}>
        Log in with one of the following options.
      </Text>
      <View style={style.cardRow}>
        <CardButton iconName="google" />
        <CardButton iconName="facebook" />
      </View>
      <View style={style.input}>
        <InputText title="Email" placeholder="Enter Email" />
        <InputText title="Password" placeholder="Enter Password" />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={{ fontSize: 20, color: "white" }}>Log in</Text>
      </TouchableOpacity>
      <View style={style.text}>
        <Text style={style.textDesc}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={style.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  scaffold: {
    marginTop: 10,
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  textDesc: {
    color: "#b3b3b3",
    paddingLeft: 10,
  },

  cardRow: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  input: {
    marginVertical: 20,
  },

  text: {
    flexDirection: "row",
    marginTop: 10,
  },

  signup: {
    paddingLeft: 5,
    color: "white",
  },

  button: {
    borderRadius: 20,
    backgroundColor: "#8c10ab",
    height: 65,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
