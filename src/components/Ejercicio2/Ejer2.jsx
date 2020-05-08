import React from "react";
import { View, ImageBackground, Alert, ActivityIndicator } from "react-native";
import { Container, Card, Question, Button, ButtonTxt } from "./style";
import { capitalize } from "../../utils.js";

export default ({
  pregunta,
  handleCorrect,
  handleIncorrect,
  handlePuntos,
  clean,
}) => {
  const handlePress = (respuesta) => {
    if (respuesta.isCorrect) {
      handleCorrect();
      handlePuntos();
    } else {
      handleIncorrect();
    }
    clean(pregunta);
  };

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
        <Card>
          {pregunta.length ? (
            <View style={{ justifyContent: "center" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Question>{capitalize(pregunta[0].question)}</Question>
              </View>
              <View>
                {pregunta[0].answers
                  .sort(() => Math.random() - 0.5)
                  .map((respuesta, index) => {
                    return (
                      <View key={index}>
                        <Button
                          onPress={() => {
                            respuesta.isCorrect
                              ? Alert.alert("¡Correcto!", "Sumaste 10 puntos", [
                                  {
                                    text: "Siguiente",
                                    onPress: () => {
                                      handlePress(respuesta);
                                    },
                                  },
                                ])
                              : Alert.alert("¡Oops!", `Respuesta incorrecta`, [
                                  {
                                    text: "Siguiente",
                                    onPress: () => handlePress(respuesta),
                                  },
                                ]);
                          }}
                        >
                          <ButtonTxt>{capitalize(respuesta.answer)}</ButtonTxt>
                        </Button>
                      </View>
                    );
                  })}
              </View>
            </View>
          ) : (
            <ActivityIndicator color={"#cecece"} size={"large"} />
          )}
        </Card>
      </ImageBackground>
    </Container>
  );
};
