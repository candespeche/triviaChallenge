import React from "react";
import { View, ImageBackground } from "react-native";
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
import { connect } from "react-redux";
import { fetchQuiz } from "../../../redux/actions/quiz";

const Points = ({ route, navigation, preguntasQuiz }) => {
  const points = route.params.points;
  const correctas = route.params.corr;
  const incorrectas = route.params.incorr;
  handlePress = () => {
    preguntasQuiz();
    navigation.navigate("Menu");
  };
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
          <Btn onPress={() => handlePress()}>
            <ButtonText>Menú principal</ButtonText>
          </Btn>
        </View>
      </ImageBackground>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    preguntasQuiz: () => dispatch(fetchQuiz()),
  };
};

export default connect(null, mapDispatchToProps)(Points);
