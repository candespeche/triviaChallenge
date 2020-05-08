import React from "react";
import { View, ActivityIndicator } from "react-native";
import { capitalize, correct } from "../../utils.js";
import { ScrollView } from "react-native-gesture-handler";
import {
  Container,
  Circle,
  Quiz,
  Hr,
  Number,
  QandA,
  Question,
  Answer,
} from "./style";

export default ({ quiz }) => {
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
                    <View style={{ marginBottom: 35 }}></View>
                  ) : (
                    <Hr></Hr>
                  )}
                </QandA>
              </Quiz>
            );
          })
        ) : (
          <ActivityIndicator color={"#cecece"} size={"large"} />
        )}
      </Container>
    </ScrollView>
  );
};
