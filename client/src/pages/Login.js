import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { loginUser } from "../action/authActions";

function Login() {
  const [info, setInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const loginNow = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  return (
    <div>
      <form onSubmit={loginNow}>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
