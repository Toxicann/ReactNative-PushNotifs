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
      <InputText />
      <InputText />
      <InputText />
    </View>
  );
};

const style = StyleSheet.create({
  scaffold: {
    justifyContent: "space-around",
    marginTop: 8,
    flex: 1,
    // flexWrap: "wrap",
  },
  textDesc: {
    color: "#b3b3b3",
    paddingLeft: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    // width: "45%",
  },
  input: {
    flexWrap: "nowrap",
  },
});

export default LoginScreen;
