import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const withLoadingDelay = (WrappedComponent) => (props) => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  });

  if (!isLoading) {
    return <WrappedComponent {...props} />;
  }
  return (
    <FadeLoader
      height={20}
      width={5}
      radius={2}
      margin={2}
      color={"#008000"}
      loading={true}
    />
  );
};

export default withLoadingDelay;
