import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const QuizDetails = (props) => {

  const id = props.match.params.id;
  const { quiz } = props;
  if(quiz) {
    return (
      <div className="container section quiz-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ quiz.title }</span>
            <p>{ quiz.description }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { quiz.authorFirstName } { quiz.authorLastName }</div>
            <div>1st March, 11am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading quiz details...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const quizzes = state.firestore.data.quizzes;
  const quiz = quizzes ? quizzes[id] : null;
  return {
    quiz: quiz
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'quizzes' }
  ])
)(QuizDetails);
