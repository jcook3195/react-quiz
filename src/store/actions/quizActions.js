export const createQuiz = (quiz) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('quizzes').add({
      ...quiz,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_QUIZ', quiz });
    }).catch((err) => {
      dispatch({ type: 'CREATE_QUIZ_ERROR', err });
    })

  }
};
