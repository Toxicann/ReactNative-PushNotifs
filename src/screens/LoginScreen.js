import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import CardButton from "../components/cardButton";
import InputText from "../components/InputText";

const LoginScreen = () => {
  return (
    <View style={style.scaffold}>
      <Text style={style.textDesc}>
        Log in with one of the following options.
      </Text>
      <View style={style.cardRow}>
        <CardButton iconName="google" />
        <CardButton iconName="facebook" />
      </View>
      <View style={style.input}>
        <InputText title="Name" />
        <InputText title="Password" />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={style.text}>
        <Text style={style.textDesc}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={style.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  scaffold: {
    marginTop: 60,
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  textDesc: {
    color: "#b3b3b3",
    paddingLeft: 10,
  },

  cardRow: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  input: {
    marginVertical: 30,
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
    height: 70,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
