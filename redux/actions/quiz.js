import axios from 'axios';

export const fetchQuiz = () => (dispatch) => {
  return axios
    .get(
      'http://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/test?limit=10&page=1',
    )
    .then((data) => {
      return dispatch({
        type: "FETCH_QUIZ",
        quiz: data.data,
      });

    })
    .catch((err) => console.log(err));
};

export const newQuestions = (preguntas) => (dispatch) => {
  return dispatch({
    type: "FETCH_QUIZ",
    quiz: preguntas
  })
}
