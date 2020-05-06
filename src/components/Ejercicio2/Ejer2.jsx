import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Container, Card, Question, Button, ButtonTxt, Column } from './style';

export default ({ pregunta, preguntas, correct, incorrect, navigation, capitalize, ranNum }) => {
  // console.log(shuffle(pregunta[0].answers), "n00ds0jhb")

  // function shuffle(array) {
  //   array.sort(() => Math.florr(Math.random() * 3));
  // }

  return (
    <Container>
      <ImageBackground
        style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../../../assets/triviaFondo.png')}>
        <Card>

          {pregunta.length ? (
            <View style={{ justifyContent: 'center' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Question>{capitalize(pregunta[0].question)}</Question>
              </View>
              <View>
                {(pregunta[0].answers).map((respuesta, index) => {
                  return (
                    <View key={index}>
                      <Button onPress={() => {
                        respuesta.isCorrect ?
                          (correct(pregunta)) : (incorrect)
                      }}>
                        <ButtonTxt>{capitalize(respuesta.answer)}</ButtonTxt>
                      </Button>
                    </View>)
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
