import React from 'react';
import QuizSummary from './QuizSummary';
import { Link } from 'react-router-dom';

const QuizList = ({quizzes}) => {
  return (
    <div className="quiz-list section">
      { quizzes && quizzes.map(quiz => {
        return (
          <Link to={'/quiz/' + quiz.id} key={quiz.id}>
            <QuizSummary quiz={quiz} />
          </Link>
        )
      })}
    </div>
  )
}

export default QuizList;
