/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';

describe('<Counter>', () => {
  it('increments correctly', () => {
    const wrapper = shallow(
      <Counter/>
    );
    const incrementButton = wrapper.find({testID: 'incrementButton'});
    const initialState = wrapper.state('number');
    expect(wrapper.state('number')).toBe(initialState);
    incrementButton.simulate('press');
    expect(wrapper.state('number')).toBe(initialState + 1);
  });
});