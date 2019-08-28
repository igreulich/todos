import { combineReducers } from 'redux';

import todosReducer from '../features/todos/todosReducer';

export default combineReducers({
  todos: todosReducer,
});
