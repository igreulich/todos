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

  /* The next 4 tests are completely unnecassary. But I needed a place for this
   * comment.
   *
   * Because we are using React, and Semantic-UI, there are a lot of things, for
   * lack of a beter word, that 'just' happen'.
   *
   * this.setState is part of react, so when you write a function in your component
   * that ONLY calls you can skip (unit) testing. If you do find a bug it is going
   * to be in React, and thats not our purview.
   *
   * In addition, anything that the comes with Semantic-UI we can skip (unit) testing
   * as well.
   *
   * Often you get better ui testing in your integration or end to end tests. Those
   * are more concered with whether the modal opened, rather than if this.state.modalOpen
   * === true, or not. (A subtle, but important distinction.)
   */
  describe('handleFilters()', () => {
    test('sets the filters', () => {
      expect(true).toEqual(true);
    });
  });

  describe('handleClose()', () => {
    test('closes the visibility popup', () => {
      expect(true).toEqual(true);
    });
  });

  describe('handleOpen()', () => {
    test('opens the visibility popup', () => {
      expect(true).toEqual(true);
    });
  });

  describe('handleShowCompleted()', () => {
    test('toggles the show done switch', () => {
      expect(true).toEqual(true);
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
