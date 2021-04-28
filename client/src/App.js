import { hot } from 'react-hot-loader/root';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute';
import GFacture from './pages/facture/GFacture';
import AddFacture from './pages/facture/AddFacture';
import GetFacture from './pages/facture/GetFacture';
import UpdateFacture from './pages/facture/UpdateFacture';
import DeleteFacture from './pages/facture/DeleteFacture';

import GProduct from './pages/product/GProduct';
import AddProduct from './pages/product/AddProduct';
import GetProduct from './pages/product/GetProduct';
import UpdateProduct from './pages/product/UpdateProduct';
import DeleteProduct from './pages/product/DeleteProduct';
import GetUsers from './pages/users/GetUsers';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <NavBar />
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/allUsers" component={GetUsers} />

          <Route
            exact
            path="/facture"
            render={({ match, history }) => (
              <GFacture match={match} history={history} />
            )}
          />
          <Route
            exact
            path="/facture/addFacture"
            render={({ match, history }) => (
              <AddFacture match={match} history={history} />
            )}
          />
          <Route
            exact
            path="/facture/allFacture"
            render={({ match, history }) => (
              <GetFacture match={match} history={history} />
            )}
          />
          <Route
            path="/facture/updateFacture"
            render={({ match, history }) => (
              <UpdateFacture match={match} history={history} />
            )}
          />
          <Route
            exact
            path="/facture/deleteFacture"
            render={({ match, history }) => (
              <DeleteFacture match={match} history={history} />
            )}
          />

          <Route
            exact
            path="/products"
            render={({ match, history }) => (
              <GProduct match={match} history={history} />
            )}
          />
          <Route
            exact
            path="/products/addProduct"
            render={({ match, history }) => (
              <AddProduct match={match} history={history} />
            )}
          />
          <PrivateRoute
            exact
            path="/products/allProduct"
            component={GetProduct}
          />
          <Route
            path="/products/updateProduct"
            render={({ match, history }) => (
              <UpdateProduct match={match} history={history} />
            )}
          />
          <Route
            exact
            path="/products/deleteProduct"
            render={({ match, history }) => (
              <DeleteProduct match={match} history={history} />
            )}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Container>
  );
}

export default hot(App);
