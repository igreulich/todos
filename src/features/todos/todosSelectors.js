/* eslint-disable arrow-parens */
import { createSelector } from 'redux-starter-kit';

function haystackHasNeedles(haystack = [], needles = []) {
  return needles.some(needle => haystack.includes(needle));
}

const selectFilters = state => state.filters;
const selectTodos = state => state.todos.todos;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, filters) => {
    const { labels, showCompleted } = filters;
    const vTodos = showCompleted ? todos : todos.filter(t => !t.done);

    return labels ? vTodos.filter(t => haystackHasNeedles(t.labels, labels.split(' '))) : vTodos;
  },
);

export {
  selectVisibleTodos, // eslint-disable-line import/prefer-default-export
};
/* eslint-enable arrow-parens */
