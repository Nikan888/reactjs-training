import React from "react";
import { useDispatch } from "react-redux";
import { loadCards, initializeUser } from "../../store/actions";

const ContentLoader = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  React.useEffect(() => {
    if (sessionStorage.user) {
      dispatch(initializeUser());
    }
  }, [dispatch]);

  return <div>{props.children}</div>;
};

export default ContentLoader;
