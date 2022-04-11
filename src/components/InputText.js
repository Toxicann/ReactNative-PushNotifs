import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const InputText = () => {
  return (
    <View>
      <Text style={style.textLabel}>Name</Text>
      <TextInput style={style.input} />
    </View>
  );
};

const style = StyleSheet.create({
  textLabel: {
    color: "white",
    paddingLeft: 14,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#171717",
    height: "28%",
    width: "90%",
    borderColor: "#212121",
    borderWidth: 3,
    borderRadius: 20,
    color: "white",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default InputText;
