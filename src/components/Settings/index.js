import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../store/actions";

const StyledViewOnlyCheckBox = styled.div`
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
  &: hover {
    background: #000000;
    font-weight: bold;
    color: white;
  }
`;

const Settings = () => {
  const isModeOnlyView = useSelector((state) => state.cardReducer.modeOnlyView);

  const dispatch = useDispatch();
  return (
    <div>
      <StyledViewOnlyCheckBox>
        <input
          type="checkbox"
          id="isModeOnlyView"
          name="isModeOnlyView"
          onChange={() => {
            dispatch(changeMode());
          }}
          checked={isModeOnlyView}
        />
        <label htmlFor="isModeOnlyView">View only</label>
      </StyledViewOnlyCheckBox>
    </div>
  );
};

export default Settings;
