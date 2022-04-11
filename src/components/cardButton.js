import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CardButton = (props) => {
  return (
    <TouchableOpacity style={style.card}>
      <FontAwesome name={props.iconName} size={28} color="white" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: "#171717",
    height: 70,
    width: "45%",
    borderColor: "#212121",
    borderWidth: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
});

export default CardButton;
