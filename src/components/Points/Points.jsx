import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Container, Title, Number, Btn, ButtonText } from "./style";
export default ({ points }) => {
  console.log(points, "puntos");
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
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{points}</Text>
          </View>
          {/* <Image
            style={{
              resizeMode: "contain",
              width: "90%",
              opacity: 20,
              marginLeft: 10,
            }}
            source={require("../../../assets/points-06.png")}
          /> */}
        </View>
        <View style={{ alignItems: "center" }}>
          <Btn onPress={() => navigation.navigate("Menu")}>
            <ButtonText>Menu</ButtonText>
          </Btn>
        </View>
      </ImageBackground>
    </Container>
  );
};
