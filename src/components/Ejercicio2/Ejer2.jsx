import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
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
  //let pressStatus = false;

  const correcta = (press) => {
    setTimeout(() => {
      correct(press);
      //pressStatus = false;
      setPressStatus(false);
    }, 1500);
  };
  const incorrecta = (press) => {
    setTimeout(() => {
      incorrect(press);
      //pressStatus = false;
      setPressStatus(false);
    }, 1500);
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
                          disabled={pressStatus}
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
            <ActivityIndicator color={"#cecece"} size={"large"} />
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
