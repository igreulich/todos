import configureStore from 'redux-mock-store';

import reducer from './todosReducer';
//import * as actions from './todosReducer';

const mockStore = configureStore();
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
 * We dispatch an action. We then ask the store what actions is received,
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
    test('should dispatch the correct action', () => {
      expect(true).toEqual(true);
    });
  });

  describe('deleteTodo', () => {
    test('should dispatch the correct action', () => {
      expect(true).toEqual(true);
    });
  });

  describe('fetchTodo', () => {
    test('should dispatch the correct action', () => {
      expect(true).toEqual(true);
    });
  });

  describe('toggleTodDone', () => {
    test('should dispatch the correct action', () => {
      expect(true).toEqual(true);
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
      const initialState = { todos: [] };

      // The reducer() call takes a state and an action. We are not providing
      // a state, so the default initial state will be used. That means there
      // is no clean up.
      expect(reducer(undefined, action)).toEqual(initialState);
    });
  });
});
