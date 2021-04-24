import { hot } from 'react-hot-loader/root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
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


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/facture" render={({match, history})=>(<GFacture  match={match} history={history} />)} />
          <Route exact path="/facture/addFacture" render={({match, history})=>(<AddFacture  match={match} history={history} />)} />
          <Route exact path="/facture/allFacture" render={({match, history})=>(<GetFacture  match={match} history={history} />)} />
          <Route  path="/facture/updateFacture" render={({match, history})=>(<UpdateFacture  match={match} history={history} />)} />
          <Route exact path="/facture/deleteFacture" render={({match, history})=>(<DeleteFacture  match={match} history={history} />)} />
         
          <Route exact path="/products" render={({match, history})=>(<GProduct  match={match} history={history} />)} />
          <Route exact path="/products/addProduct"  render={({match, history})=>(<AddProduct  match={match} history={history} />)} />
          <Route exact path="/products/allProduct"  render={({match, history})=>(<GetProduct  match={match} history={history} />)} />
          <Route path="/products/updateProduct" render={({match, history})=>(<UpdateProduct  match={match} history={history} />)} />
          <Route exact path="/products/deleteProduct" render={({match, history})=>(<DeleteProduct  match={match} history={history} />)} />
          
          <PrivateRoute path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
