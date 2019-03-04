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
    const todo = prevState => ({
      ...prevState,
      completed: false
    });

    this.props.newTodo(todo);
  };


  render() {
    return (
      <div>
        <h1>Add Post</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Post Body:<input type="text" name="title" onChange={this.textInputHandler} value={this.state.todo} /></label>
            <button>Submit!</button>
          </form>
      </div>
    );
  }
}

export default connect(null, { newTodo })(TodoForm);
