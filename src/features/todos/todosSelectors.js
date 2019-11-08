import { createSelector } from 'redux-starter-kit';

import { haystackHasAnyNeedles } from '../../utils';

const selectFilters = state => state.filters;
const selectTodos = state => state.todos.todos;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, filters) => {
    const { labels, showCompleted } = filters;
    const vTodos = showCompleted ? todos : todos.filter(t => !t.done);

    return labels ? vTodos.filter(t => haystackHasAnyNeedles(t.labels, labels.split(' '))) : vTodos;
  },
);

export {
  selectVisibleTodos, // eslint-disable-line import/prefer-default-export
};
