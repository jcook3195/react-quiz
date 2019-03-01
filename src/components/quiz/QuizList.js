import React from 'react';
import QuizSummary from './QuizSummary';

const QuizList = ({quizzes}) => {
  return (
    <div className="quiz-list section">
      { quizzes && quizzes.map(quiz => {
        return (
          <QuizSummary quiz={quiz} key={quiz.id} />
        )
      })}
    </div>
  )
}

export default QuizList;
