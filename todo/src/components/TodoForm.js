import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTodo } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  textInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = Date.now();
    const thisTodo = {
      title: this.state.title,
      completed: false,
      key: timestamp
    };
    console.log(thisTodo);

    this.props.newTodo(thisTodo);
  };


  render() {
    return (
      <div>
        <h1>Add Todo</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Post Body:<input type="text" name="title" onChange={(event) => this.textInputHandler(event)} value={this.state.title} /></label>
            <button>Submit!</button>
          </form>
      </div>
    );
  }
}

export default connect(null, { newTodo })(TodoForm);
