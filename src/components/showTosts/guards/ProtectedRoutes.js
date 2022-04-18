import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";



const PrivateRoute = (props) => {
  const { token } = props;
  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

const mapStateToProps = () => ({
  token: localStorage.getItem('auth_token')
});

export default connect(mapStateToProps)(PrivateRoute);