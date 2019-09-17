/* eslint-disable no-shadow */
import { createSlice } from 'redux-starter-kit';
import uuid from 'uuid';

const todos = [{
  due: '2019-09-23',
  id: uuid(),
  labels: ['javascript', 'react', 'ui'],
  note: 'Checkout the official documentation at https://reactjs.org/',
  title: 'Learn React',
}, {
  id: uuid(),
  labels: ['javascript', 'react', 'state-management'],
  title: 'Learn Redux',
}, {
  id: uuid(),
  labels: ['javascript', 'vue', 'ui', 'state'],
  note: 'Checkout the official documentation at https://vuejs.org/',
  title: 'Learn Vue',
}, {
  done: true,
  id: uuid(),
  note: 'Checkout the documentation at https://mdn.dev/',
  title: 'Learn Javascript',
}];

const todosSlice = createSlice({
  slice: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      return { ...state, todos: [...state.todos, { ...action.payload }] };
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
const { addTodo, setTodos, toggleTodo } = actions;

export const fetchTodos = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setTodos(todos));
  }, 500);
};

export const createTodo = (payload) => (dispatch) => {
  const todo = { ...payload, id: uuid() };

  setTimeout(() => {
    dispatch(addTodo(todo));
  }, 500);
};

export const toggleTodoDone = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(toggleTodo(payload));
  }, 500);
};

export default reducer;
/* eslint-enable no-shadow */
