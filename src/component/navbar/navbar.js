import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { URL } from "../../App";
import "../home/style.css";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { useRef } from "react";
import { Overlay } from "react-bootstrap";
import { BsX, BsDot } from "react-icons/bs";

const Navbar = () => {
  const id = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  const isDelivery =
    localStorage.getItem("isDelivery") === "true" ? true : false;
  const pid = localStorage.getItem("notify");
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  const [count, setcount] = useState(0);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [prod, setProd] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const pollingFunction = () => {
      axios
        .get(`${URL}/user/${id}/carts/count`, {
          headers: {
            Authorization: token,
          },
        })
        .then((count) => setcount(count.data.data.cart.count));
      if (pid !== null) {
        axios.get(`${URL}/products/${pid}?track=true`).then((product) => {
          if (product.data.data.message === "Yes") {
            setIsAvailable(true);
            setProd(product.data.data.product);
          } else setIsAvailable(false);
        });
      }
    };

    if (id !== null) {
      const interval = setInterval(pollingFunction, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [id, pid]);

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
                pathname === "/aboutus" ? "nav-active" : ""
              }`}
            >
              <Link to={"aboutus"} className="nav-link">
                About us
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
            {isDelivery ? (
              <li
                className={`nav-item mx-2 ${
                  pathname === "/delivery" ? "nav-active" : ""
                }`}
              >
                <Link to={"/delivery"} className="nav-link">
                  Delivery
                </Link>
              </li>
            ) : null}
            {isAdmin ? (
              <>
                <li
                  className={`nav-item mx-2 ${
                    pathname === "/contactinbox" ? "nav-active" : ""
                  }`}
                >
                  <Link to={"/contactinbox"} className="nav-link">
                    Inbox
                  </Link>
                </li>
                <li
                  className={`nav-item mx-2 ${
                    pathname === "/userdetails" ? "nav-active" : ""
                  }`}
                >
                  <Link to={"/userdetails"} className="nav-link">
                    User List
                  </Link>
                </li>
                <li
                  className={`nav-item mx-2 ${
                    pathname === "/orderlist" ? "nav-active" : ""
                  }`}
                >
                  <Link to={"/orderlist"} className="nav-link">
                    Order List
                  </Link>
                </li>
              </>
            ) : (
              <li
                className={`nav-item mx-2 ${
                  pathname === "/contactform" ? "nav-active" : ""
                }`}
              >
                <Link to={"/contactform"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-icons d-none d-lg-flex">
          <div className="navbar-icon mx-2">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="navbar-icon mx-2 navbar-cart-icon">
          <i
            className="fas fa-bell"
            ref={target}
            onClick={() => {
              setShow(!show);
            }}
          ></i>
          {isAvailable && (
            <div
              className="cart-items"
              style={{ width: 10, height: 10, top: 4, right: -2.5 }}
            />
          )}
        </div>
        <Overlay target={target.current} show={show} placement="left">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div class="shadow">
              <div
                {...props}
                style={{
                  backgroundColor: "white",
                  padding: "2px 10px",
                  color: "black",
                  borderRadius: 3,
                  width: 500,
                  ...props.style,
                }}
              >
                <div class="list-group-item bg-light">
                  <div class="row">
                    <div class="col">
                      {isAvailable ? (
                        <div class="d-flex">
                          <img
                            src={prod.imgSrc}
                            height="80"
                            alt="product"
                            class="avatar-md rounded-circle"
                          />
                          <div class="ms-3">
                            <h5 class=" my-2">{prod.name}</h5>
                            <p class="text-success ">is available now!</p>
                          </div>
                          <BsX
                            style={{ width: 30, height: 30 }}
                            onClick={() => {
                              setIsAvailable(false);
                              setProd(null);
                              localStorage.removeItem("notify");
                            }}
                          />
                        </div>
                      ) : (
                        <div>
                          <p>No notification </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Overlay>
        <Link to={"/cart"} className="navbar-icon mx-2 navbar-cart-icon">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <div className="cart-items" style={{ fontSize: 15 }}>
            {count}
          </div>
        </Link>
        <Link
          to={id === null ? "/login" : "/profile"}
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
