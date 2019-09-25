/* eslint-disable no-shadow */
import { createSlice } from 'redux-starter-kit';
import uuid from 'uuid';
import ls from 'local-storage';

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

export const createTodo = (payload) => (dispatch) => {
  const todo = { ...payload, id: uuid() };

  setTimeout(() => {
    dispatch(addTodo(todo));
  }, 500);
};

export const deleteTodo = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(removeTodo(payload));
  }, 500);
};

export const fetchTodos = () => (dispatch) => {
  const todos = ls('todos');

  setTimeout(() => {
    dispatch(setTodos(todos));
  }, 500);
};

export const toggleTodoDone = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(toggleTodo(payload));
  }, 500);
};

export default reducer;
/* eslint-enable no-shadow */
