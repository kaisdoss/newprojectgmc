import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../action/authActions';

function Register({ history }) {
  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    role: ''
  });
  const dispatch = useDispatch();

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
        <label>Role</label>
        <select name="role" onChange={handleChange} value={info.role}>
          <option value="null">Select a role</option>
          <option value="Manager">Manager</option>
          <option value="Cashier">Cashier</option>
          <option value="Stock Manager">Stock Manager</option>
        </select>
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
