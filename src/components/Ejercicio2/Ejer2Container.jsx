import React, { useEffect, useState } from "react";
import { fetchQuiz, newQuestions } from "../../../redux/actions/quiz";
import { connect } from "react-redux";
import Ejer2 from "./Ejer2";

const Ejer2Container = ({
  quiz,
  actualizarPreguntas,
  navigation,
  preguntasQuiz,
}) => {
  const [preguntas, setPreguntas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [pregunta, setPregunta] = useState([]);

  useEffect(() => {
    console.log(quiz.quiz, "QUIZ");
    if (quiz.quiz.length) {
      setPreguntas(quiz.quiz);
      setPregunta([quiz.quiz[Math.floor(Math.random() * preguntas.length)]]);
    } else {
      console.log(quiz.quiz, "Ya no hay mas");
    }
  }, [preguntas, quiz]);

  const clean = (answer) => {
    const index = preguntas.indexOf(answer[0]);
    if (index > -1) {
      setPreguntas(preguntas.splice(index, 1));
      if (preguntas.length == 0) {
        setTimeout(() => {
          navigation.navigate("Points", {
            points: puntos,
            incorr: incorrectas,
            corr: correctas,
          });
        }, 2000);
      }
      actualizarPreguntas(preguntas);
    } else {
      setTimeout(() => {
        navigation.navigate("Points", {
          points: puntos,
          incorr: incorrectas,
          corr: correctas,
        });
      }, 2000);
    }
  };
  const handleCorrect = () => {
    setCorrectas((value) => value + 1);
  };

  const handleIncorrect = () => {
    setIncorrectas((value) => value + 1);
  };

  const handlePuntos = () => {
    setPuntos((value) => value + 10);
  };

  return (
    <Ejer2
      preguntas={preguntas}
      clean={clean}
      pregunta={pregunta}
      handleCorrect={handleCorrect}
      handleIncorrect={handleIncorrect}
      handlePuntos={handlePuntos}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    quiz: state.quiz,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    preguntasQuiz: () => dispatch(fetchQuiz()),
    actualizarPreguntas: (questions) => dispatch(newQuestions(questions)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ejer2Container);
