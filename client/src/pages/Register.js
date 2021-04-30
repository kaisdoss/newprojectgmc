import "./cssFile/Register.css";
import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Register({ history }) {
  const classes = useStyles();
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    role: "",
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
      <div className={classes.root}>
        <Grid direction="column" container spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <input
                placeholder="Enter Your First Name"
                type="text"
                name="firstname"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <input
                placeholder="Enter Your Last Name"
                type="text"
                name="lastname"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <input
                placeholder="Enter Your Phone"
                type="text"
                name="phone"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <input
                placeholder="Enter Your Email"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} placeholder="Enter Your Password">
              <input placeholder="Enter Your Password" type="password" name="password" onChange={handleChange} />
            </Paper>
          </Grid>
        </Grid>
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

      <button className="RegisterForm" type="submit">
        Register
      </button>
    </form>
  );
}

export default hot(Register);
