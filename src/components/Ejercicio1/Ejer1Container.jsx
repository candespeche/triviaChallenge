import React, { useEffect } from "react";
import Ejer1 from "./Ejer1";
import { fetchQuiz } from "../../../redux/actions/quiz";
import { connect } from "react-redux";

const Ejer1Container = ({ quiz, preguntasQuiz }) => {
  useEffect(() => {
    preguntasQuiz();
  }, []);

  return <Ejer1 quiz={quiz} />;
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
