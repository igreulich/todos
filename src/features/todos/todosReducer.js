import { createSlice } from 'redux-starter-kit';

const todos = [{
  title: 'Learn React',
  due: '2019-09-23',
  note: 'Checkout the official documentation at https://reactjs.org/',
  labels: ['javascript', 'react', 'ui'],
}, {
  title: 'Learn Redux',
  labels: ['javascript', 'react', 'state-management'],
}, {
  title: 'Learn Vue',
  note: 'Checkout the official documentation at https://vuejs.org/',
  labels: ['javascript', 'vue', 'ui', 'state'],
}, {
  title: 'Learn Javascript',
  note: 'Checkout the documentation at https://mdn.dev/',
}];

const todosSlice = createSlice({
  slice: 'todos',
  initialState: { todos: [] },
  reducers: {
    setTodos(state, action) { return { ...state, todos: [...action.payload] }; },
    // setTodos: (state, action) => ({ ...state, todos: [...action.payload] }),
    addTodo(state, action) { return { ...state, todos: [...state.todos, { ...action.payload }] }; },
    // addTodo: (state, action) => ({ ...state, todos: [...state.todos, { ...action.payload }] }),
  },
});

const { actions, reducer } = todosSlice;
const { setTodos } = actions;

export const { addTodo } = actions;

export const fetchTodos = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setTodos(todos));
  }, 500);
};

export default reducer;
