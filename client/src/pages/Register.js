import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../action/authActions';

function Register({ history }) {
  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => { 
    if (auth.isRegister) {
      history.push('/login');
    }
  }, [auth.isRegister]);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(info));
  };
  return (
    <form onSubmit={registerNow}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstname" onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastname" onChange={handleChange} />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default hot(Register);
