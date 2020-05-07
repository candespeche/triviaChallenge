import React, { Component } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { Background } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default ({ cancel = false, navigation }) => {
  return (
    <Background>
      {cancel ? (
        <AntDesign
          onPress={() => console.log("back")}
          style={{
            position: "absolute",
            left: 20,
            top: 30,
          }}
          name="close"
          color="#000"
          size={25}
          onPress={() => navigation.navigate("Menu")}
        />
      ) : null}

      <View>
        <Image
          style={{
            resizeMode: "contain",
            width: 180,
            marginTop: 15,
          }}
          source={require("../../../assets/trivia-linea.png")}
        />
      </View>
    </Background>
  );
};
