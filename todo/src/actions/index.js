export const FETCH_TODOS = 'FETCH_TODOS';
export const NEW_TODO = 'NEW_TODO';
export const DELETE_TODO = 'DELETE_TODO_';

export const fetchTodos = (dispatch) => {
  return dispatch = {
    type: FETCH_TODOS
  };
};

export const newTodo = (value, dispatch) => {
  return dispatch = {
    type: NEW_TODO,
    payload: value
  };
};

export const deleteTodo = (deleteKey, dispatch) => {
  return dispatch = {
    type: DELETE_TODO,
    payload: deleteKey
  };
}
