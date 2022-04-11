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
        autoCapitalize={false}
        autoCorrect={false}
        blurOnSubmit={true}
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
    height: 70,
    borderWidth: 3,
    borderRadius: 20,
    color: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    fontSize: 18,
    fon,
  },
});

export default InputText;
