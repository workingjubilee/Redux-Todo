import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';


class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo)
    }
  }


  render() {
    const todoItems = this.props.todos.map(todo => (
      <div key={todo.key}>
        <h3>{todo.title}</h3>
        <p>{JSON.stringify(todo.completed)}</p>
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

export default connect(mapStateToProps, { fetchTodos })(Todos);
