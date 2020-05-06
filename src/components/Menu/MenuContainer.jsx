import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Menu from './Menu';
import Splash from '../Splash/Splash.jsx';
import { connect } from 'react-redux';
import { fetchQuiz } from '../../../redux/actions/quiz';

// import {Sound} from 'react-native-sound';

const MenuContainer = ({ navigation, preguntasQuiz }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    preguntasQuiz();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // useEffect(() => {
  //   // music = new Sound('triviaChallenge.mp3', Sound.MAIN_BUNDLE, (error) => {
  //   //   if (error) {
  //   //     console.log('failed to load the sound', error);
  //   //     return;
  //   //   }
  //   // });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? <Splash /> : <Menu navigation={navigation} />}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    quiz: state.quiz,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    preguntasQuiz: () => dispatch(fetchQuiz()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

// export default connect(null, null)(MenuContainer);
