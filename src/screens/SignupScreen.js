import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import CardButton from "../components/cardButton";
import InputText from "../components/InputText";
import api from "../api/api";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.scaffold}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ alignSelf: "center", marginBottom: 15 }}
      />
      <Text style={style.textDesc}>
        Sign up with one of the following options.
      </Text>
      <View style={style.cardRow}>
        <CardButton iconName="google" />
        <CardButton iconName="facebook" />
      </View>
      <View style={style.input}>
        <InputText
          title="Name"
          placeholder="Enter Name"
          onSubmit={(data) => {
            setUsername(data);
          }}
        />
        <InputText
          title="Email"
          placeholder="Enter Email"
          onSubmit={(data) => {
            setEmail(data);
          }}
        />
        <InputText
          title="Password"
          placeholder="Enter Password"
          onSubmit={(data) => {
            setPassword(data);
          }}
        />
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={async () => {
          await api.post("/credits", {
            username,
            email,
            password,
          });
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Sign up</Text>
      </TouchableOpacity>
      <View style={style.text}>
        <Text style={style.textDesc}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={style.signup}>Log in</Text>
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
    marginVertical: 20,
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

export default SignupScreen;
