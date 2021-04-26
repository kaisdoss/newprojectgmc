import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  console.log('location in private route', location);
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default hot(PrivateRoute);
