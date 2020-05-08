import React, { useState, useEffect } from "react";
import configureStore from "./redux/index";
import * as Font from "expo-font";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Ejer1Container from "./src/components/Ejercicio1/Ejer1Container";
import Ejer2Container from "./src/components/Ejercicio2/Ejer2Container";
import Points from "./src/components/Points/Points";
import SplashContainer from "./src/components/Splash/SplashContainer";
import Navbar from "./src/components/Navbar/Navbar";
import MenuContainer from "./src/components/Menu/MenuContainer";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const store = configureStore();
const Stack = createStackNavigator();

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashContainer}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuContainer}
            options={{
              gestureEnabled: false,
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            name="Ejer1"
            component={Ejer1Container}
            options={{
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            name="Ejer2"
            component={Ejer2Container}
            options={{
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            name="Points"
            component={Points}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              header: () => <Navbar />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
