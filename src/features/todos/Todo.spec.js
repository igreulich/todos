/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Todo from './Todo';

const mockStore = configureStore();
const initialState = { todos: [] };
const store = mockStore(initialState);

describe('<Todos />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<Todo store={store} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
