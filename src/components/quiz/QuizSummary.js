import React from 'react';
import moment from 'moment';

const QuizSummary = ({quiz}) => {
  return (
    <div className="card z-depth-0 quiz-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{quiz.title}</span>
        <p>Posted by {quiz.authorFirstName} {quiz.authorLastName}</p>
        <p className="grey-text">{moment(quiz.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default QuizSummary;
