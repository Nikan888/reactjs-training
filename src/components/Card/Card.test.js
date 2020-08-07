import React from "react";
import Card from "../Card";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Card", () => {
  let wrapper;

  const props = {
    id: "b5-j4-n7-x2-q1",
    cardsRecycleBinHandler: jest.fn(),
    headerText: "Header",
    bodyText: "text",
  };

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  // passed (returns - true)
  it("should exist", () => {
    expect(wrapper.find(Card));
  });

  // passed (returns - true)
  it("should find CardHeader", () => {
    expect(wrapper.find(CardHeader));
  });

  // passed (returns - true)
  it("should find CardContent", () => {
    expect(wrapper.find(CardContent));
  });

  //THIS TESTS!!!!!!!!!!!
  //failed (Received: {})
  it("should find CardContent (length - 1)", () => {
    expect(wrapper.find(CardContent).toHaveLength(1));
  });

  //failed (Received: {})
  it("should find CardContent (length - 1)", () => {
    expect(wrapper.find(CardContent).toHaveLength(1));
  });
});
