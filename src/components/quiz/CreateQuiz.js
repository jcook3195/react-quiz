import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuiz } from '../../store/actions/quizActions';
import { Redirect } from 'react-router-dom';

class CreateQuiz extends Component {
  state = {
    title: '',
    description: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createQuiz(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a New Quiz</h5>
          <div className="input-field">
            <label htmlFor="title">Quiz Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="description">Quiz Description</label>
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="inputfield">
            <button className="btn pink lighten-1 z-depth-0">Create Quiz</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuiz: (quiz) => dispatch(createQuiz(quiz))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);
