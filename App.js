import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Michroma_400Regular } from "@expo-google-fonts/michroma";
import AppLoading from "expo-app-loading";

import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import Notification from "./src/screens/Notification";
// import { Provider } from "react-native/Libraries/Text/TextAncestor";
// import { store } from "./src/state/store";

const MyTheme = {
  ...DefaultTheme.dark,
  colors: {
    ...DefaultTheme.dark.colors,
    card: "#101010",
    text: "white",
    background: "#101010",
    primary: "white",
  },
};

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsloaded] = useFonts({
    Michroma_400Regular,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Notification"
          screenOptions={{
            headerStyle: {
              elevation: 5,
            },
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Michroma_400Regular",
            },
          }}
        >
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              title: "Notifs",
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Log in",
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: "Sign up",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default () => {
  return <App />;
};
