import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import { Container, Title, Credits, Btn, ButtonText } from "./style";

export default ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
        source={require("../../../assets/triviaFondo.png")}
      >
        <View style={{ alignItems: "center" }}>
          <Btn onPress={() => navigation.navigate("Ejer2")}>
            <ButtonText>Jugar</ButtonText>
          </Btn>
          <Btn onPress={() => navigation.navigate("Ejer1")}>
            <ButtonText>Ver preguntas</ButtonText>
          </Btn>
        </View>
        {/* <View
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: 50,
          }}
        >
          <Credits>diseño y programación</Credits>
          <Credits style={{ marginBottom: 5, fontWeight: "bold" }}>
            CANDELARIA ESPECHE
          </Credits>
          <Credits>música</Credits>
          <Credits style={{ fontWeight: "bold" }}>FRANCISCO ESPECHE</Credits>
        </View> */}
      </ImageBackground>
    </Container>
  );
};
