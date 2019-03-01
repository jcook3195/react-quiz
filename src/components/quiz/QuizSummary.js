import React from 'react';

const QuizSummary = ({quiz}) => {
  return (
    <div className="card z-depth-0 quiz-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{quiz.title}</span>
        <p>Posted by the Admin.</p>
        <p className="grey-text">1st March, 11am</p>
      </div>
    </div>
  )
}

export default QuizSummary;
