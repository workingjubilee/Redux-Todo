export const FETCH_TODOS = 'FETCH_TODOS';
export const NEW_TODO = 'NEW_TODO';

export const fetchTodos = (dispatch) => {
  return dispatch = {
    type: FETCH_TODOS
  };
};

export const newTodo = (value) => {
  let dispatch = {
    type: NEW_TODO,
    payload: value
  };
  return dispatch
};
