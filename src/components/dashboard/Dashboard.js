import React, { Component } from 'react';
import Notifications from './Notifications';
import QuizList from '../quiz/QuizList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { quizzes } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <QuizList quizzes={quizzes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quiz.quizzes
  }
}

export default connect(mapStateToProps)(Dashboard);
