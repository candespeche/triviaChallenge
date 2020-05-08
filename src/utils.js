export const capitalize = (text) => {
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

export const correct = (answers) => {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].isCorrect) {
      return answers[i].answer;
    }
  }
};
