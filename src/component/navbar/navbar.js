import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="company logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto">
            <li
              className={`nav-item mx-2 ${
                pathname === "/" ? "nav-active" : ""
              }`}
            >
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>

            <li
              className={`nav-item mx-2 ${
                pathname === "/products" ? "nav-active" : ""
              }`}
            >
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li
              className={`nav-item mx-2 ${
                pathname === "/orders" ? "nav-active" : ""
              }`}
            >
              <Link to={"/orders"} className="nav-link">
                Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons d-none d-lg-flex">
          <div className="navbar-icon mx-2">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <Link to={"/cart"} className="navbar-icon mx-2 navbar-cart-icon">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <div className="cart-items">10</div>
        </Link>
        <Link
          to={loggedIn ? "/login" : "/profile"}
          className="navbar-icon mx-2 navbar-cart-icon "
          id="login-profile"
        >
          <i className="fas fa-user"></i>
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
