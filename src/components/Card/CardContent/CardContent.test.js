import React from "react";
import CardContent from "../CardContent";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CardContent", () => {
  let wrapper;

  const props = {
    text: "testCardContent",
    isEditMode: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<CardContent {...props} />);
  });

  it("should exist", () => {
    expect(wrapper.find(CardContent));
  });

  it("should render textarea input if edit mode - true", () => {
    wrapper.setProps({ isEditMode: true });
    expect(wrapper.find("textarea"));
  });
});
