/* eslint-disable arrow-parens */
import { createSelector } from 'redux-starter-kit';

const selectShowCompleted = state => state.filters.showCompleted;
const selectTodos = state => state.todos.todos;

const selectVisibleTodos = createSelector(
  [selectTodos, selectShowCompleted],
  (todos, showCompleted) => (showCompleted ? todos : todos.filter(t => !t.done)),
);

export {
  selectVisibleTodos, // eslint-disable-line import/prefer-default-export
};
/* eslint-enable arrow-parens */
