import React from "react";
import { View, ImageBackground } from "react-native";
import { Container, Btn, ButtonText } from "./style";

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
      </ImageBackground>
    </Container>
  );
};
