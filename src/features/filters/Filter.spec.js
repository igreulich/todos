/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Filters from './Filters';

const mockStore = configureStore();
const initialState = { showCompleted: false, labels: '' };
const store = mockStore(initialState);

describe('<Filters />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<Filters store={store} />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
