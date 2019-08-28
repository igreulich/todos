import { createSlice } from 'redux-starter-kit';

const todosSlice = createSlice({
  slice: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => ({ ...state, todos: [...state.todos, action.payload] }),
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
