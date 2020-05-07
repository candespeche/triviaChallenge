import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import style from './style';
import Ejer1 from './Ejer1';
import { fetchQuiz } from '../../../redux/actions/quiz';
import { connect } from 'react-redux';

const Ejer1Container = ({ quiz, navigation, preguntasQuiz }) => {
  useEffect(() => {
    preguntasQuiz();
  }, []);

  const correct = (answers) => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].isCorrect) {
        return answers[i].answer;
      }
    }
  };

  const capitalize = (text) => {
    let arr = [];

    for (let i = 0; i < text.length; i++) {
      if (text[i - 1] === '¿' || i === 0) {
        arr.push(text[i]);
      } else {
        arr.push(text[i].toLowerCase());
      }
    }
    return arr;
  };

  return <Ejer1 quiz={quiz} correct={correct} capitalize={capitalize} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    quiz: state.quiz,
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    preguntasQuiz: () => dispatch(fetchQuiz()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ejer1Container);
