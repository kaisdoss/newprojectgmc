import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../action/authActions';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default hot(Dashboard);
