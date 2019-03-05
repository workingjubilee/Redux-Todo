import { FETCH_TODOS, NEW_TODO, DELETE_TODO } from '../actions';

const initialState = {
  items: [],
  item: {},
  keyFound: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TODOS: return state;
    case NEW_TODO: return {
      ...state,
      item: action.payload
    };
    case DELETE_TODO:
      const newItems = state.items.filter(todo => {
        if (todo.key !== action.payload) {
          return todo;
        } else {
          console.log('Bang!')
        }
      });
      console.log(newItems);
      return {
        ...state,
        items: newItems
      };

    default: return state;
  };
};
