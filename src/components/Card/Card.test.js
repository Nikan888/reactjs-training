import React from "react";
import { Card } from "../Card";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import configureStore from "redux-mock-store";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

const mockHistoryPushFn = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPushFn,
  }),
}));

describe("Card", () => {
  let wrapper, store;

  const mockStore = configureStore();

  const props = {
    id: "b5-j4-n7-x2-q1",
    cardsRecycleBinHandler: jest.fn(),
    headerText: "Header",
    bodyText: "text",
  };

  const initialState = {
    checked: false,
    isEditMode: false,
    values: {
      cardHeaderText: props.headerText,
      cardContentText: props.bodyText,
    },
    cardReducer: { isModeOnlyView: false },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Card {...props} />
      </Provider>
    );
  });

  it("should exist", () => {
    expect(wrapper.find(Card));
  });

  it("should render CardContent", () => {
    expect(wrapper.find(CardContent)).toHaveLength(1);
  });

  it("should redirect on double click", () => {
    wrapper.simulate("doubleClick");
    const mockedHistory = jest.fn();
    mockHistoryPushFn.mockReturnValue(mockedHistory);

    expect(mockHistoryPushFn).toHaveBeenCalledWith("/card/b5-j4-n7-x2-q1");
  });

  
});
