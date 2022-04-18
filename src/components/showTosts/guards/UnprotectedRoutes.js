import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnprotectedRoute = (props) => {
  const { token } = props;
  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...props} />;
};

const mapStateToProps = () => ({
  token: localStorage.getItem('auth_token')
});

export default connect(mapStateToProps)(UnprotectedRoute);