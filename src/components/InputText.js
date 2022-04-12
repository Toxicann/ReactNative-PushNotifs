import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const InputText = (props) => {
  const [focusColor, setFocusColor] = useState("#212121");
  return (
    <View>
      <Text style={style.textLabel}>{props.title}</Text>
      <TextInput
        style={[style.input, { borderColor: focusColor }]}
        onFocus={() => setFocusColor("#8c10ab")}
        onBlur={() => setFocusColor("#212121")}
        autoFocus={false}
        autoCapitalize="none"
        autoCorrect={false}
        blurOnSubmit={true}
        placeholder={props.placeholder}
        placeholderTextColor="#b3b3b3"
      />
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
    height: 65,
    borderWidth: 3,
    borderRadius: 20,
    color: "white",
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    fontSize: 18,
  },
});

export default InputText;
