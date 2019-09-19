import { combineReducers } from 'redux';

import filtersReducer from '../features/filters/filtersReducer';
import todosReducer from '../features/todos/todosReducer';

export default combineReducers({
  filters: filtersReducer,
  todos: todosReducer,
});
