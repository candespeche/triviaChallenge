import React, { useEffect, useState } from "react";
import { fetchQuiz, newQuestions } from "../../../redux/actions/quiz";
import { connect } from "react-redux";
import Ejer2 from "./Ejer2";

const Ejer2Container = ({ quiz, actualizarPreguntas, navigation }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [pregunta, setPregunta] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    if (preguntas.length === 0) {
      console.log([correctas, incorrectas, "hdjhjds"]);
      setEndGame(true);
      setRespuestas([correctas, incorrectas]);
      //console.log(incorrectas, correctas);
    }
    if (quiz.quiz.length) {
      setPreguntas(quiz.quiz);
      setPregunta([quiz.quiz[Math.floor(Math.random() * preguntas.length)]]);

      //console.log(preguntas.length, "LENGTH");
    } else console.log("Ya no hay mas");
  }, [preguntas]);

  const clean = (answer) => {
    const index = preguntas.indexOf(answer[0]);
    if (index > -1) {
      setPreguntas(preguntas.splice(index, 1));
      if (preguntas.length == 0) {
        setTimeout(() => {
          console.log([correctas, incorrectas], "iflength");
          navigation.navigate("Points", {
            points: puntos,
            incorr: incorrectas,
            corr: correctas,
            endGame: endGame,
            respuestas: respuestas,
          });
        }, 2000);
      }
      actualizarPreguntas(preguntas);
    } else {
      navigation.navigate("Points", {
        points: puntos,
        incorr: incorrectas,
        corr: correctas,
        endGame: endGame,
        respuestas: respuestas,
      });
    }
  };
  const Prueba = (value) => {
    setCorrectas((value) => value + 1);
  };

  const Prueba2 = (value) => {
    setIncorrectas((value) => value + 1);
  };
  const correct = (pregun) => {
    // setCorrectas(correctas === 0 ? correctas + 2 : correctas + 1);

    //setCorrectas(prevState => prevState + 1);

    const correct = correctas + 1;
    setCorrectas(correct);
    console.log(correctas);

    setPuntos(puntos + 10);
    clean(pregun);
  };

  const incorrect = (pregun) => {
    // setIncorrectas(incorrectas === 0 ? incorrectas + 2 : incorrectas + 1);
    const incorrect = incorrectas + 1;
    setIncorrectas(incorrect);
    console.log(incorrectas);
    setPuntos(puntos - 3);
    clean(pregun);
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
