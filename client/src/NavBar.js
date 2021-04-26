import { hot } from "react-hot-loader/root";
import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./action/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Cash Register</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="link-navbar">
              <Link to="/">Home</Link>
            </NavItem>
            {auth.isAuth ? (
              <>
                <NavItem className="link-navbar">
                  <Link to="/profile">Profil</Link>
                </NavItem>
                {auth?.user?.role !== "Stock Manager" && (
                  <NavItem className="link-navbar">
                    <Link to="/facture">Manage Invoice</Link>
                  </NavItem>
                )}
                {auth?.user?.role !== "Cashier" && (
                  <NavItem className="link-navbar">
                    <Link to="/products">Manage Product</Link>
                  </NavItem>
                )}
                <NavItem className="link-navbar">
                  <Link to="" onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem className="link-navbar">
                  <Link to="/login">Login</Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default hot(NavBar);
