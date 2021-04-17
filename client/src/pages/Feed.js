import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../action/authActions'

function Feed() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <div>
      <h1>You're Inside Feed Page :)</h1>
      {auth.user && <p>Hello {auth.user.firstname}</p>}
    </div>
  );
}

export default hot(Feed);
