/* eslint-disable no-shadow */
import { createSlice } from 'redux-starter-kit';
import uuid from 'uuid';
import ls from 'local-storage';

// This is not a typical function you will need to make. I had to make a couple
// of consessions because I don't have an api with a database to use.
const fakeFetch = (value = true) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(value);
  }, 500);
});

const todosSlice = createSlice({
  slice: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      const newState = { ...state, todos: [...state.todos, { ...action.payload }] };

      ls('todos', newState.todos);

      return newState;
    },
    removeTodo(state, action) {
      const newState = {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload), // eslint-disable-line arrow-parens
      };

      ls('todos', newState.todos);

      return newState;
    },
    setTodos(state, action) { return { ...state, todos: [...action.payload] }; },
    toggleTodo(state, action) {
      const newState = {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo),
        ),
      };

      ls('todos', newState.todos);

      return newState;
    },
  },
});

const { actions, reducer } = todosSlice;
const {
  addTodo,
  removeTodo,
  setTodos,
  toggleTodo,
} = actions;

// I did take some liberties in creating ids, deleting todos, and with storage.
// There is some work done in this file that would be done by a database, or on
// the other side of an api call.
//
// But generally this is how things work.
export const createTodo = (payload) => (dispatch) => {
  const todo = { ...payload, id: uuid() };

  // In a real app, all of this would be a `fetch()` call, if not a library like axios.
  // It would *not* be a promise you made.
  fakeFetch(todo).then((response) => {
    dispatch(addTodo(response));
  });
};

export const deleteTodo = (payload) => (dispatch) => {
  fakeFetch().then(() => {
    dispatch(removeTodo(payload));
  });
};

export const fetchTodos = () => (dispatch) => {
  const todos = ls('todos');

  fakeFetch(todos).then(() => {
    dispatch(setTodos(todos));
  });
};

export const toggleTodoDone = (payload) => (dispatch) => {
  fakeFetch().then(() => {
    dispatch(toggleTodo(payload));
  });
};

export default reducer;
/* eslint-enable no-shadow */
