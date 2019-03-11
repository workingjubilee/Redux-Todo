import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions';


class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo)
    }
  }

  deleteTodo = (deleteKey, event) => {
    this.props.deleteTodo(deleteKey);
  };


  render() {
    const todoItems = this.props.todos.map(todo => (
      <div key={todo.key}>
        <h3>{todo.title}</h3>
        <p>{JSON.stringify(todo.completed)}</p>
        <button onClick={(deleteKey,event) => this.deleteTodo(todo.key)}> Complete Todo</button>
      </div>
    ));
    return (
      <>
      <h1>Todos</h1>
      {todoItems}
      </>
    );
  }

}

const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item
});

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(Todos);
