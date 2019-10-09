/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import AddTodoModal from './AddTodoModal';

const mockStore = configureStore();
const initialState = { todos: [] };
const store = mockStore(initialState);

describe('<AddTodoModal />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<AddTodoModal store={store} createTodo={() => {}} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
