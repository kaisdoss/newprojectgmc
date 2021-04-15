
import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home({ history }) {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push('/feed');
    }
  }, [auth.isAuth]);
  return (
    <div>
      <h1>Welcome To Our Cash Register App</h1>
    </div>
  );
}

export default hot(Home);
