/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import TodoList from './TodoList';

const mockStore = configureStore();
const initialState = { todos: { todos: [] }, filters: '' };
const store = mockStore(initialState);

describe('<TodosList />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<TodoList store={store} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
