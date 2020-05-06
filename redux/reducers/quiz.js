const initalState = {
  quiz: [],
};
export default (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_QUIZ':
      return {...state, quiz: action.quiz};
    default:
      return state;
  }
};
