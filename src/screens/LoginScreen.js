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
      <Button title="Login" />
    </View>
  );
};

const style = StyleSheet.create({
  scaffold: {
    marginTop: 8,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  textDesc: {
    color: "#b3b3b3",
    paddingLeft: 10,
  },
  cardRow: {
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    // height: "10%",
    // width: "45%",
  },
  input: {
    // alignItems: "stretch",
    // justifyContent: "flex-start",
    marginVertical: 20,
  },
});

export default LoginScreen;
