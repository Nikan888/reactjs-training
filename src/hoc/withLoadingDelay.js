import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const withLoadingDelay = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      isLoading: false,
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: true });
      }, 2000);
    }

    render() {
      if (this.state.isLoading) {
        return <WrappedComponent {...this.props} />;
      } else {
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
      }
    }
  }
  return HOC;
};

export default withLoadingDelay;
