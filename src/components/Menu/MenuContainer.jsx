import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Menu from "./Menu";
import { connect } from "react-redux";
import { fetchQuiz } from "../../../redux/actions/quiz";

// import {Sound} from 'react-native-sound';

const MenuContainer = ({ navigation, preguntasQuiz }) => {
  useEffect(() => {
    preguntasQuiz();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Menu navigation={navigation} />
    </View>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
