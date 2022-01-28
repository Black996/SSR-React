import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function requireAuth(childComponent) {
  class RequireAuth extends React.Component {
    render() {
      const { auth } = this.props;
      switch (auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <h1>Loading ...</h1>;
        default:
          return <childComponent {...this.props} />;
      }
    }
  }

  return connect(mapStateToProps)(RequireAuth);

  function mapStateToProps({ auth }) {
    return { auth };
  }
}

export default requireAuth;
