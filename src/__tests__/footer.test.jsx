
import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './../components/';

describe("Footer component", () => {
  it("should not crash", () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})