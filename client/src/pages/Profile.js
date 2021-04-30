import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../action/authActions';

function Profile() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector(state => state.auth.user)
  
    useEffect(() => {
      if (auth?.user?.role !== 'Admin') {
        dispatch(loadUser(auth));
      }
    }, []);
    
    return (
        <div>
            <h2>Profile</h2>
            {auth?.user?.role !== 'Admin' && (<h3>{`Hello ${user?.firstname} ${user?.lastname}`}</h3>) }
            
            <h3>{`You are ${user?.role}`}</h3>
        </div>
    )
}

export default hot(Profile)
