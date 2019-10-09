/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AddTodoForm from './AddTodoForm';

describe('<AddTodoForm />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<AddTodoForm due=" " handleChange={() => {}} labels=" " note=" " title=" " />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
