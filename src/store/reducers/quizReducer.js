
const initState = {
  quizzes: [
    {id: '1', title: 'Math Quiz', description: 'Simple match problems quiz.'},
    {id: '2', title: 'English Quiz', description: 'Simple English quiz.'},
    {id: '3', title: 'Science Quiz', description: 'Simple sciences quiz.'}
  ]
}

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_QUIZ':
      console.log('created quiz', action.quiz);
      return state;
    case 'CREATE_QUIZ_ERROR':
      console.log('create quiz error', action.err);
      return state;
    default:
      return state;
  }
}

export default quizReducer;
