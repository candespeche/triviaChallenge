import React, { useEffect, useState } from "react";
import { fetchQuiz, newQuestions } from "../../../redux/actions/quiz";
import { connect } from "react-redux";
import Ejer2 from "./Ejer2";

const Ejer2Container = ({ quiz, actualizarPreguntas, navigation }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [pregunta, setPregunta] = useState([]);

  useEffect(() => {
    if (quiz.quiz.length) {
      setPreguntas(quiz.quiz);
      setPregunta([quiz.quiz[Math.floor(Math.random() * preguntas.length)]]);
    } else console.log("Ya no hay mas");
  }, [preguntas]);

  const clean = (answer) => {
    const index = preguntas.indexOf(answer[0]);
    if (index > -1) {
      setPreguntas(preguntas.splice(index, 1));
      if (preguntas.length == 0) {
        navigation.navigate("Points", { points: puntos });
      }
      actualizarPreguntas(preguntas);
    } else {
      navigation.navigate("Points", { points: puntos });
    }
  };

  const correct = (pregun) => {
    setPuntos(puntos + 10);
    clean(pregun);
  };

  const incorrect = (pregun) => {
    setPuntos(puntos - 5);
    clean(pregun);
    console.log(preguntas, "INCORRECT");
  };

  const capitalize = (text) => {
    let arr = [];

    for (let i = 0; i < text.length; i++) {
      if (text[i - 1] === "¿" || i === 0) {
        arr.push(text[i]);
      } else {
        arr.push(text[i].toLowerCase());
      }
    }
    return arr;
  };

  // const ranNum = (arr) => {
  //   return pregunta.answers;
  // };

  return (
    <Ejer2
      preguntas={preguntas}
      correct={correct}
      incorrect={incorrect}
      capitalize={capitalize}
      pregunta={pregunta}
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

// console.log(state.quiz.quiz, 'averrrrr');
//useEffect -> cuando se monta lleno el estado local (setState) con las 10 preguntas y las guarda en
//let diez = con las 10 preguntas
//estado local con puntaje
//funcionPregunta = saca una pregunta de let diez y la setea en setPregunta.  filter saca la pregunta q se usó. y hace Math random de las 10 preguntas
//en la respuesta correctas se suman puntos al estado local y ejecuta nuevamente
//(return if existe pregunta.length, la renderiza y que let preguntas sin la que se renderizó. Sino va a puntaje)

// const [pregunta , setPregunta] = useState([])
// const [puntos , setPuntos]= useState(0)
// let questions = []
// useEffect {
//traeme las 10 preguntas al estado global (o buscarlas en prop.state.preguntas)y guardarlas en let questions;
//  functionPreguna(); mathRandom de las preguntas q esten en let question , filter de questions[el numero random] y por ultimo devuelve la pregunta filtrada y se setea en setPregunta
//}
