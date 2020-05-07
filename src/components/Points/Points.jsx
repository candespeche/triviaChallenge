import React, { Component, useEffect } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  Container,
  Pointstxt,
  Number,
  Btn,
  Hr,
  Answers,
  ButtonText,
  Circle,
  Circle2,
} from "./style";
export default ({ route, navigation }) => {
  const points = route.params.points;
  const correctas = route.params.corr;
  const incorrectas = route.params.incorr;
  const endGame = route.params.endGame;
  const respuestas = route.params.respuestas;

  useEffect(() => {
    console.log(endGame, "ENDGAME");
    console.log(respuestas, "points respuestas");
    //console.log("correctas: ", correctas, "incorrectas: ", incorrectas);
  }, []);

  return (
    <Container>
      <ImageBackground
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../../assets/triviaFondo.png")}
      >
        <View
          style={{
            position: "absolute",
            bottom: 230,
          }}
        >
          <Circle2>
            <Circle>
              <Number style={{ fontSize: 90 }}>
                {points < 0 ? "000" : points}
              </Number>
              <Pointstxt>PUNTOS</Pointstxt>
              <Hr></Hr>
              <Answers>Correctas: {correctas}</Answers>
              <Answers>Incorrectas: {incorrectas}</Answers>
            </Circle>
          </Circle2>
        </View>
        <View style={{ position: "absolute", bottom: 70 }}>
          <Btn onPress={() => navigation.navigate("Menu")}>
            <ButtonText>Menú principal</ButtonText>
          </Btn>
        </View>
      </ImageBackground>
    </Container>
  );
};
