import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Container, Card, Question, Button, ButtonTxt, Column } from "./style";

export default ({
  pregunta,
  preguntas,
  correct,
  incorrect,
  navigation,
  capitalize,
  ranNum,
}) => {
  const [pressStatus, setPressStatus] = useState(false);
  const [shuffled, setShuffled] = useState([]);

  console.log(pregunta);

  // function shuffle(array) {
  //   return array.sort(() => Math.random() - 0.5));
  // }
  // const shuffled = shuffle(pregunta[0].answers);
  // console.log(shuffled);
  const correcta = (press) => {
    setTimeout(() => {
      correct(press);
      setPressStatus(false);
    }, 2000);
  };
  const incorrecta = (press) => {
    setTimeout(() => {
      incorrect(press);
      setPressStatus(false);
    }, 2000);
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
                          style={
                            pressStatus
                              ? respuesta.isCorrect
                                ? styles.correctBtn
                                : styles.incorrectBtn
                              : null
                          }
                          onPress={() => {
                            setPressStatus(true);
                            respuesta.isCorrect
                              ? correcta(pregunta)
                              : incorrecta(pregunta);
                          }}
                        >
                          <ButtonTxt
                            style={
                              pressStatus
                                ? respuesta.isCorrect
                                  ? styles.correctTxt
                                  : styles.incorrectTxt
                                : null
                            }
                          >
                            {capitalize(respuesta.answer)}
                          </ButtonTxt>
                        </Button>
                      </View>
                    );
                  })}
              </View>
            </View>
          ) : (
            <Text>Cargando</Text>
          )}
        </Card>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  correctBtn: {
    backgroundColor: "#55962D",
  },
  incorrectBtn: {
    backgroundColor: "#EA3D3D",
  },
  correctTxt: {
    color: "#fff",
  },
  incorrectTxt: {
    color: "#fff",
  },
});
