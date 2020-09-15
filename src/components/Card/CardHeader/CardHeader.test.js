import React from "react";
import CardHeader from "../CardHeader";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Checkbox from "../Checkbox";
import { MdCancel, MdEdit, MdSave } from "react-icons/md";
import mount from "enzyme/build/mount";

configure({ adapter: new Adapter() });

const mockStore = configureStore();

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
    wrapper = mount(
      <Provider store={store}>
        <CardHeader {...props} />
      </Provider>
    );
  });

  it("should exist", () => {
    expect(wrapper.find(CardHeader));
  });

  it("should render Save and Cancel action buttons if edit mode = true (isModeOnlyView = false)", () => {
    wrapper.setProps({ isEditMode: true });
    expect(wrapper.find(MdSave));
    expect(wrapper.find(MdCancel));
  });

  it("should render Edit button with Checkbox if edit mode = false (isModeOnlyView = false)", () => {
    wrapper.setProps({ isEditMode: false });
    expect(wrapper.find(MdEdit));
    expect(wrapper.find(Checkbox));
  });
});
