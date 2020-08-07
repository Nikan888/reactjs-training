import React from "react";
import CardHeader from "../CardHeader";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe("CardHeader", () => {
  let wrapper;

  const store = mockStore({
    cardReducer: { isModeOnlyView: false },
  });

  const props = {
    header: "testCardHeader",
    isEditMode: false,
    onChange: jest.fn(),
    onCheckboxChange: jest.fn(),
    checkboxChecked: false,
    onSave: jest.fn(),
    onCancel: jest.fn(),
    onEdit: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CardHeader {...props} />
      </Provider>
    );
  });

  it("should exist", () => {
    expect(wrapper.find(CardHeader));
  });

  it("should render Save and Cancel action buttons if edit mode = true ", () => {
    wrapper.setProps({ isEditMode: true });
    expect(wrapper.find("MdSave"));
    expect(wrapper.find("MdCancel"));
  });
});
