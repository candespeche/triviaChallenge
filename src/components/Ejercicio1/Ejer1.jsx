import React from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Circle,
  Quiz,
  Hr,
  Number,
  QandA,
  Question,
  Answer,
} from './style';
import {ScrollView} from 'react-native-gesture-handler';

export default ({state, quiz, navigation, capitalize, correct}) => {
  return (
    <ScrollView>
      <Container>
        {quiz.quiz ? (
          quiz.quiz.map((question, index) => {
            return (
              <Quiz key={question.number}>
                <Circle>
                  <Number>{question.number}</Number>
                </Circle>
                <QandA>
                  <Question>{capitalize(question.question)}</Question>
                  <Answer>
                    Respuesta: {capitalize(correct(question.answers))}
                  </Answer>
                  {index === 9 ? (
                    <View style={{marginBottom: 35}}></View>
                  ) : (
                    <Hr></Hr>
                  )}
                </QandA>
              </Quiz>
            );
          })
        ) : (
          <Text>Cargando</Text>
        )}
      </Container>
    </ScrollView>
  );
};
