import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import configureStore from './redux/index';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/components/Menu/MenuContainer';
import { Provider } from 'react-redux';
import Ejer1Container from './src/components/Ejercicio1/Ejer1Container';
import Ejer2Container from './src/components/Ejercicio2/Ejer2Container';
import Points from './src/components/Points/Points';
import NavbarContainer from './src/components/Navbar/NavbarContainer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
const store = configureStore();
const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            screenOptions={() => ({ gestureEnabled: false })}
            options={{ header: () => <NavbarContainer hide={true} cancel={false} /> }}
          />
          <Stack.Screen
            name="Ejer1"
            component={Ejer1Container}
            options={{
              header: () => <NavbarContainer cancel={true} />,
            }}
          />
          <Stack.Screen
            name="Ejer2"
            component={Ejer2Container}
            options={{
              header: () => <NavbarContainer cancel={true} />,
            }}
          />
          <Stack.Screen
            name="Points"
            component={Points}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              header: () => <NavbarContainer cancel={true} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
