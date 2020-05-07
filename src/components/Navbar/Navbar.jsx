import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { Background } from "./style";

export default NavbarContainer = ({ navigation, cancel = false }) => {
  return (
    <Background>
      <Image
        style={{
          resizeMode: "contain",
          width: 180,
          marginTop: 15,
        }}
        source={require("../../../assets/trivia-linea.png")}
      />
    </Background>
  );
};
