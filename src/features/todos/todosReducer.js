// import { createSlice } from 'redux-starter-kit';

// I needed to have fetch-like behavior without having a server, per-se.
// This is not something you generally need to make.
import { fakeFetch } from '../../utils';

// const todosSlice = createSlice({
//   slice: 'todos',
//   initialState: { todos: [] },
//   reducers: {
//     addTodo(state, action) { return { ...state, todos: [...state.todos, action.payload] }; },
//     removeTodo(state, action) {
//       return {
//         ...state,
//         todos: state.todos.filter(t => t.id !== action.payload),
//       };
//     },
//     setTodos(state, action) { return { ...state, todos: action.payload }; },
//     toggleTodo(state, action) {
//       return {
//         ...state,
//         todos: state.todos.map(t => (t.id === action.payload ? { ...t, done: !t.done } : t)),
//       };
//     },
//   },
// });

// const { actions, reducer } = todosSlice;
// const { addTodo, removeTodo, setTodos, toggleTodo, } = actions;

// In a real app, all fakeFetch() calls would be fetch() calls, if not a library like axios.
// It would *not* be a promise you made.
// export const createTodo = payload => dispatch => {
//   const req = { type: 'POST', body: payload, };

//   fakeFetch(req).then(res => {
//     dispatch(addTodo(res));
//   });
// };

// export const deleteTodo = payload => dispatch => {
//   const req = { type: 'DELETE', body: payload, };

//   fakeFetch(req).then(res => {
//     dispatch(removeTodo(res));
//   });
// };

// export const fetchTodos = () => dispatch => {
//   const req = { type: 'GET' };

//   fakeFetch(req).then(res => {
//     dispatch(setTodos(res));
//   });
// };

// export const toggleTodoDone = payload => dispatch => {
//   const req = { type: 'PUT', body: payload };

//   fakeFetch(req).then(res => {
//     dispatch(toggleTodo(res));
//   });
// };

// export default reducer;

const actionTypes = {
  ADD_TODO: 'TODOS/ADD_TODO',
  REMOVE_TODO: 'TODOS/REMOVE_TODO',
  SET_TODOS: 'TODOS/SET_TODOS',
  TOGGLE_TODO: 'TODOS/TOGGLE_TODO',
};

const initialState = { todos: [] };

const addTodo = payload => ({ type: actionTypes.ADD_TODO, payload });
const removeTodo = payload => ({ type: actionTypes.REMOVE_TODO, payload });
const setTodos = payload => ({ type: actionTypes.SET_TODOS, payload });
const toggleTodo = payload => ({ type: actionTypes.TOGGLE_TODO, payload });

// In a real app, all fakeFetch() calls would be fetch() calls, if not a library like axios.
// It would *not* be a promise you made.
export const createTodo = payload => dispatch => {
  const req = { type: 'POST', body: payload };

  fakeFetch(req).then(res => {
    dispatch(addTodo(res));
  });
};

export const deleteTodo = payload => dispatch => {
  const req = { type: 'DELETE', body: payload };

  fakeFetch(req).then(res => {
    dispatch(removeTodo(res));
  });
};

export const fetchTodos = () => dispatch => {
  const req = { type: 'GET' };

  fakeFetch(req).then(res => {
    dispatch(setTodos(res));
  });
};

export const toggleTodoDone = payload => dispatch => {
  const req = { type: 'PUT', body: payload };

  fakeFetch(req).then(res => {
    dispatch(toggleTodo(res));
  });
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case actionTypes.REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    }
    case actionTypes.SET_TODOS: {
      return { ...state, todos: action.payload };
    }
    case actionTypes.TOGGLE_TODOS: {
      return {
        ...state,
        todos: state.todos.map(t => (t.id === action.payload ? { ...t, done: !t.done } : t)),
      };
    }
    default: {
      return state;
    }
  }
}
