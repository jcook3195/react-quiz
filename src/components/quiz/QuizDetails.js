import React from 'react';

const QuizDetails = (props) => {

  const id = props.match.params.id;

  return (
    <div className="container section quiz-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Quiz Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium molestias animi, voluptatum culpa cumque consequatur, amet repudiandae dicta qui obcaecati, accusantium molestiae. Quaerat natus cum aut animi mollitia, architecto alias!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Admin</div>
          <div>1st March, 11am</div>
        </div>
      </div>
    </div>
  )
}

export default QuizDetails;
