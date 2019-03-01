
const initState = {
  quizzes: [
    {id: '1', title: 'Math Quiz', description: 'Simple match problems quiz.'},
    {id: '2', title: 'English Quiz', description: 'Simple English quiz.'},
    {id: '3', title: 'Science Quiz', description: 'Simple sciences quiz.'}
  ]
}

const quizReducer = (state = initState, action) => {
  return state;
}

export default quizReducer;
