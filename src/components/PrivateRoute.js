import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLoaded && !auth.isEmpty ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
