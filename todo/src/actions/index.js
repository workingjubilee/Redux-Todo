export const FETCH_TODOS = 'FETCH_TODOS';
export const NEW_TODO = 'NEW_TODO';

export const fetchTodos = (value, dispatch) => {
  return dispatch = {
    type: FETCH_TODOS,
    payload: value
  };
};

export const newTodo = (value, dispatch) => {
  return dispatch = {
    type: NEW_TODO,
    payload: value
  };
};
