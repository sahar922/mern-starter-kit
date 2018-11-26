import React from "react";
import { Redirect, Route } from "react-router-dom";
import RouteWithLayout from "../route-with-layout";
import PropTypes from "prop-types";

const PrivateRoute = ({ layout, component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <RouteWithLayout layout={layout} component={component} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

export default (PrivateRoute);
