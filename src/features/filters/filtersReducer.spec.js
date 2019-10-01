import configureStore from 'redux-mock-store';

import reducer, * as actions from './filtersReducer';

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
describe('Filters Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  /* Syncronous Action Tests
   *
   * Because we are using redux-starter-kit, the action creator functions are generated.
   * And since we didn't write the functions, an argument can be made that you do not need
   * to write tests for them.
   *
   * 'If your test fails that means you found a bug in `redux-start-kit`.'
   *
   * That is only probably correct. You could have changed the name of the reducer functions.
   *
   * *If* a new version of `rsk` does break our app, it would be nice to know before it gets
   * to production.
   *
   * If you do decide to test your syncronous actions, you do not need to test all of them.
   * It is an early warning system, not a mine field.
   *
   * Whatever you decide regarding your syncronous actions, you still need test your async
   * actions, since they are not generated. (This reducer has no ayncronous actions.)
   *
   * See `[root]/src/features/todos/todosReducer.js` for more on async action tests.
   */
  describe('setLabels', () => {
    test('should dispatch the correct action', () => {
      store.dispatch(actions.setLabels('these are labels'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('setShowCompleted', () => {
    test('should dispatch the correct action', () => {
      store.dispatch(actions.setShowCompleted(false));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  /* Async Action Tests
   *
   * See `[root]/src/features/todos/todosReducer.js` for more on async action tests.
   */
});

/* Reducer Tests
 *
 * Take notice of the fact that we are defining actions in our tests.
 *
 * Because we are testing the reducer functions, we can make our tests
 * a little 'safer', by removing a dependence on the action creators.
 *
 * We will just define the actions we are going to use, and pass that
 * directly to the reducer. We can then just check the returned state
 * against a known expected state, (In our case that expected state is
 * stored in the snapshot file).
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
describe('Filters Reducer', () => {
  describe('initialState', () => {
    test('should return the correct, default, state', () => {
      const action = { type: 'test/action' };

      // The reducer() call takes a state and an action. We are not providing
      // a state, so the default initial state will be used. That means there
      // is no clean up.
      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe('filters/setLabels', () => {
    test('should return the correct state', () => {
      const action = {
        payload: 'these are labels',
        type: 'filters/setLabels',
      };

      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe('filters/setShowCompleted', () => {
    test('should return the correct state', () => {
      const action = {
        payload: true,
        type: 'filters/setShowCompleted',
      };

      expect(reducer(undefined, action)).toMatchSnapshot();
    });
  });
});
