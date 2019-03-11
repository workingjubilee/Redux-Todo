import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
      </Provider>
    );
  }
}

export default App;
