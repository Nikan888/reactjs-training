import React from "react";
import { useDispatch } from "react-redux";
import { loadCards } from "../../store/actions";

const ContentLoader = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards());
  }, []);

  return <div>{props.children}</div>;
};

export default ContentLoader;
