import configureStore from 'redux-mock-store';

import * as actions from './filtersReducer';

const mockStore = configureStore();
const store = mockStore();

describe('filters actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setLabels', () => {
    test('dispatches the corect action', () => {
      const expectedActions = [{
        payload: 'these are labels',
        type: 'filters/setLabels',
      }];

      store.dispatch(actions.setLabels('these are labels'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
