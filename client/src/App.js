import { hot } from 'react-hot-loader/root';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute';
import GFacture from './pages/GFacture';
import GProduct from './pages/GProduct';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="facture/addFacture" component={GFacture} />
          <Route exact path="/products/addProduct" component={GProduct} />
          <PrivateRoute path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
