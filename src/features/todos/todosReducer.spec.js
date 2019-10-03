import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, * as actions from './todosReducer';
import { getAction } from '../../utils/test';


const mockStore = configureStore([thunk]);
const store = mockStore();

/* Action Tests
 *
 * Take notice of the fact that we are dispatching actions in our tests.
 *
 * This is the same as dispatching an action in your component.
 *
 * Ultimately we are testing that the expected action is being dispatched.
 * In order to do that we need to be able to dispatch actions in such a
 * way as to allow us to see what was dispatched. By creating and using a
 * mocked store, we can do just that.
 *
 * We dispatch an action. We then ask the store what actions it received,
 * and check that against a known list of expected actions, (In our case
 * that list of expected actions is stored in the snapshot file.)
 *
 * The reducer is not involved.
 *
 * Snapshot Testing
 *
 * See https://jestjs.io/docs/en/snapshot-testing for full details.
 *
 * Snapshot testing is like taking a picture of the answer, and comparing
 * your (subsequent) renders to that picture.
 *
 * Our action creator functions, generated or not (see below for more
 * on that), should never change, making it a fantastic candidate for
 * snapshot testing.
 */
describe('Todos Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  /* Syncronous Action Tests
   *
   * See `[root]/src/features/filters/filtersReducer.js` for more on syncronous action tests.
   */

  /* Async Action Tests */
  describe('createTodo', () => {
    test('should dispatch the correct action', async () => {
      const expectedAction = {
        payload: { title: 'flerm' },
        type: 'todos/addTodo',
      };

      store.dispatch(actions.createTodo({ title: 'flerm' }));

      // All this action does is dispatch a different one in a promise.
      // So there isn't all the much to test.
      const foundAction = await getAction(store, 'todos/addTodo');
      // You don't normally have to do this, but in this app, the ID is made in the action,
      // not on the otherside of an api call.
      delete foundAction.payload.id;

      expect(foundAction).toEqual(expectedAction);
    });
  });

  describe('deleteTodo', () => {
    test('should dispatch the correct action', async () => {
      const expectedAction = {
        payload: { id: 'todo-1' },
        type: 'todos/removeTodo',
      };

      store.dispatch(actions.deleteTodo({ id: 'todo-1' }));

      expect(await getAction(store, 'todos/removeTodo')).toEqual(expectedAction);
    });
  });

  describe('fetchTodo', () => {
    test('should dispatch the correct action', async () => {
      const expectedAction = {
        payload: null,
        type: 'todos/setTodos',
      };

      store.dispatch(actions.fetchTodos());

      expect(await getAction(store, 'todos/setTodos')).toEqual(expectedAction);
    });
  });

  describe('toggleTodDone', () => {
    test('should dispatch the correct action', async () => {
      const expectedAction = {
        payload: { id: 'todo-1' },
        type: 'todos/toggleTodo',
      };

      store.dispatch(actions.toggleTodoDone({ id: 'todo-1' }));

      expect(await getAction(store, 'todos/toggleTodo')).toEqual(expectedAction);
    });
  });
});

/* Reducer Tests
 *
 * Take notice of the fact that we are defining actions in our test.
 *
 * Because we are testing the reducer functions, we can make our tests
 * a little 'safer', by removing a dependence on the action creators.
 *
 * We will just define the actions we are going to use, and pass that
 * directly to the reducer. We can then just check the returned state
 * against a known state (In our case that known state will be stored
 * in the snapshot file).
 *
 * The action creators are not involved.
 *
 * Snapshot Testing
 *
 * See https://jestjs.io/docs/en/snapshot-testing for full details.
 *
 * Snapshot testing is like taking a picture of the answer, and comparing
 * your (subsequent) renders to that picture.
 *
 * The individual reducer functions should rarely change, making them good
 * candidates for snapshot testing.
 */
describe('Todos Reducer', () => {
  describe('initial state', () => {
    test('is correct', () => {
      const action = { type: 'test/action' };

      // The reducer() call takes a state and an action. We are not providing
      // a state, so the default initial state will be used. That means there
      // is no clean up.
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  // This action adds to state, so I can rely on the default initial state.
  describe('todos/addTodo', () => {
    test('adds a todo to the todo list', () => {
      const action = {
        payload: { title: 'flerm' },
        type: 'todos/addTodo',
      };

      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  // This action removes a thing from state. So to accurately represent what
  // state might looks like when you are removing something, I have created a
  // state object I would like to the reducer to use that has a 'todo' in it.
  describe('todos/removeTodo', () => {
    test('removes a todo from the todo list', () => {
      const action = {
        payload: 'todo-1',
        type: 'todos/removeTodo',
      };
      const initialState = {
        todos: [{
          id: 'todo-1',
          title: 'yeet me',
        }],
      };

      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });

  describe('todos/setTodos', () => {
    test('sets the list of todos', () => {
      const action = {
        payload: [
          { title: 'flerm' },
          { title: 'yeet' },
        ],
        type: 'todos/setTodos',
      };

      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe('todos/toggleTodo', () => {
    test('changes the done state of a todo', () => {
      const action = {
        payload: 'todo-1',
        type: 'todos/toggleTodo',
      };
      const initialState = {
        todos: [{
          id: 'todo-1',
          title: 'flerm',
        }],
      };

      expect(reducer(initialState, action)).toMatchSnapshot();
    });
  });
});
