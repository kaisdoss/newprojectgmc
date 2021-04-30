import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUsers } from "../../action/userActions";
import { Link } from "react-router-dom";

function GetUsers({ history }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersRed.user);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <h2>loool</h2>

      {user &&
        user.map((user) => {
          return (
            <div key={user._id}>
              <span>{user.firstname}</span>
              <button>
                <Link to={`/users/updateUser/${user._id}`}>Update</Link>
              </button>
              <button onClick={() => dispatch(deleteUsers(user._id))}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default hot(GetUsers);
