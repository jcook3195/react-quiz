import React, { Component } from 'react';

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
    console.log(this.state);
  }
  render() {
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

export default CreateQuiz;
