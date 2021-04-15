import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function NavBar() {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <Link to="/">Home</Link>
      {!auth.isAuth && <Link to="/register">Register</Link>}
      {!auth.isAuth ? (
        <Link to="/login">login</Link>
      ) : (
        <Link to="/logout">Logout</Link>
      )}
    </div>
  );
}

export default hot(NavBar);
