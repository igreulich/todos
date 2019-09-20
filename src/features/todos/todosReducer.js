/* eslint-disable no-shadow */
import { createSlice } from 'redux-starter-kit';
import uuid from 'uuid';

const todos = [{
  due: '2019-09-23',
  id: uuid(),
  labels: ['javascript', 'react', 'ui', 'library'],
  note: 'Checkout the official documentation at https://reactjs.org/',
  title: 'Learn React',
}, {
  id: uuid(),
  labels: ['javascript', 'react', 'state-management', 'library'],
  title: 'Learn Redux',
}, {
  id: uuid(),
  labels: ['javascript', 'ui', 'framework'],
  note: 'Checkout the official documentation at https://vuejs.org/',
  title: 'Learn Vue',
}, {
  done: true,
  id: uuid(),
  labels: ['javascript', 'personal'],
  note: 'Checkout the MDN reference at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
  title: 'Learn Javascript',
}, {
  id: uuid(),
  labels: ['personal', 'chore'],
  title: 'Walk the dog',
}];

const todosSlice = createSlice({
  slice: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      return { ...state, todos: [...state.todos, { ...action.payload }] };
    },
    removeTodo(state, action) {
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload), // eslint-disable-line arrow-parens
      };
    },
    setTodos(state, action) { return { ...state, todos: [...action.payload] }; },
    toggleTodo(state, action) {
      return {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo),
        ),
      };
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
