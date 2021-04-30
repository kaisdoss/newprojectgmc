import "./cssFile/Login.css"
import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../action/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Login({ history }) {
  const classes = useStyles();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/profile");
    }
  }, [auth.isAuth]);

  const loginNow = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  return (


    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={loginNow}>
        <FormControl className={classes.margin}>
          <InputLabel id="InputLogin" htmlFor="input-with-icon-adornment">Email</InputLabel>
          <Input id="InputLogin"
          placeholder="Enter Your Email"
            type="text"
            name="email"
            onChange={handleChange}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
          <Input id="InputLogin"
          placeholder="Enter Your Password"
            type="password"
            name="password"
            onChange={handleChange}
            id="input-with-icon-adornment"

          />
        </FormControl>
        <Button className="LoginButton" type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default hot(Login);
