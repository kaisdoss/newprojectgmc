import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../action/authActions';

function Login({ history }) {
  const [info, setInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push('/feed');
    }
  }, [auth.isAuth]);

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

export default hot(Login);
