import { hot } from "react-hot-loader/root";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./action/authActions";

function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <div>
      <Link to="/">Home</Link>
      {/* {!auth.isAuth && <Link to="/register">Register</Link>}
      {!auth.isAuth ? (
        <Link to="/login">login</Link>
      ) : (
        <Link onClick={()=>dispatch(loadUser())} >Logout</Link>
      )} */}

      {auth.isAuth ? (
        <>
          <Link to="/profile" >Profil</Link>
          <Link to="" onClick={() => dispatch(logoutUser())} >Logout</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">login</Link>
        </>
      )}

    </div>
  );
}

export default hot(NavBar);
