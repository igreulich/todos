import { selectVisibleTodos } from './todosSelectors';

describe('todosSelectors', () => {
  describe('selectVisibleTodos', () => {
    test('should return only the uncompleted todos', () => {
      const state = {
        todos: {
          todos: [
            { title: 'flerm' },
            { title: 'yeet', done: true },
          ],
        },
        filters: {
          showCompleted: false,
          labels: '',
        },
      };
      const expectedTodos = [
        { title: 'flerm' },
      ];

      expect(selectVisibleTodos(state)).toEqual(expectedTodos);
    });

    test('should return all the todos', () => {
      const state = {
        todos: {
          todos: [
            { title: 'flerm' },
            { title: 'yeet', done: true },
          ],
        },
        filters: {
          showCompleted: true,
          labels: '',
        },
      };
      const expectedTodos = [
        { title: 'flerm' },
        { title: 'yeet', done: true },
      ];

      expect(selectVisibleTodos(state)).toEqual(expectedTodos);
    });

    test('should return just the todos that contain the filter', () => {
      const state = {
        todos: {
          todos: [
            { title: 'flerm', labels: 'flerm js' },
            { title: 'yeet', labels: 'yeet js' },
          ],
        },
        filters: {
          showCompleted: false,
          labels: 'flerm',
        },
      };
      const expectedTodos = [
        { title: 'flerm', labels: 'flerm js' },
      ];

      expect(selectVisibleTodos(state)).toEqual(expectedTodos);
    });
  });
});
