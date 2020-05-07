import React from "react";
import configureStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Ejer1Container from "./src/components/Ejercicio1/Ejer1Container";
import Ejer2Container from "./src/components/Ejercicio2/Ejer2Container";
import Points from "./src/components/Points/Points";
import Navbar from "./src/components/Navbar/Navbar";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import MenuContainer from "./src/components/Menu/MenuContainer";
const store = configureStore();
const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={MenuContainer}
            screenOptions={() => ({ gestureEnabled: false })}
            options={{
              header: () => <Navbar hide={true} cancel={false} />,
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
