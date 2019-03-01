export const createQuiz = (quiz) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to database
    const firestore = getFirestore();

    firestore.collection('quizzes').add({
      ...quiz,
      authorFirstName: 'Clean',
      authorLastName: 'Constrol',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_QUIZ', quiz });
    }).catch((err) => {
      dispatch({ type: 'CREATE_QUIZ_ERROR', err });
    })
    
  }
};
