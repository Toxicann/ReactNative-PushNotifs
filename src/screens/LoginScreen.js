import React, { useEffect, useState, useRef } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";

import CardButton from "../components/cardButton";
import InputText from "../components/InputText";
import api from "../api/api";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: false,
  }),
});

const LoginScreen = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [notificationData, setNotificationData] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification.request.content.data);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(() => {
        console.log(notification.login);
        if (notification.login == "Login Failed!") {
          navigation.navigate("Signup");
        }
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
        <InputText
          title="Email"
          placeholder="Enter Email"
          onSubmit={(data) => {
            setEmail(data);
          }}
          secureText={false}
        />
        <InputText
          title="Password"
          placeholder="Enter Password"
          onSubmit={(data) => {
            setPassword(data);
          }}
          secureText={true}
        />
      </View>
      <TouchableOpacity
        style={style.button}
        onPressOut={async () => {
          await api.get("/credits").then((response) => {
            const user = response.data.find((user) => user.email == email);
            if (user.email === email && user.password === password) {
              setNotificationData("Login Success!");
              console.log(notificationData);
            } else {
              setNotificationData("Login Failed!");
              console.log(notificationData);
            }
            sendPushNotification(expoPushToken, notificationData);
          });
        }}
      >
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

const sendPushNotification = async (expoPushToken, notificationData) => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();

  const message = {
    to: expoPushToken,
    sound: "default",
    title: notificationData,
    body: `Date is: ${date}/${month}/${year} & Time is: ${hours}h: ${min}m: ${sec}s`,
    data: { login: notificationData },
    android: {
      channelId: "push-notifs",
    },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
    return null;
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("push-notifs", {
      name: "push-notifs",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#00000000",
      sound: true,
    });
  }
  return token;
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
