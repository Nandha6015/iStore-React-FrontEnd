import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../home/style.css";

const Orders = () => {
  const id = localStorage.getItem("Id");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/user/${id}/orders`).then((result) => {});
  }, []);

  return (
    <div>
      <div
        className="
          banner-store
          d-flex
          pl-3 pl-lg-5
          align-items-center
          text-center
          justify-content-center
        "
      >
        <div>
          <h1 className="text-slanted text-capitalize display-4 text-yellow">
            istore
          </h1>
          <h1 className="text-capitalize display-4 font-weight-bold">
            your wonderful orders with us
          </h1>
        </div>
      </div>

      <section className="totals py-2 my-1">
        <div className="text-uppercase">
          <div className="row ">
            <div className=" col-md-2  text-center">
              <p className="text-uppercase">products</p>
            </div>
            <div className=" col-md-4  text-center">
              <p className="text-uppercase">name of products</p>
            </div>
            <div className=" col-md-2  text-center">
              <p className="text-uppercase">price</p>
            </div>
            <div className=" col-md-1">
              <p className="text-uppercase ">quantity</p>
            </div>
            <div className=" col-md-1  text-center">
              <p className="text-uppercase">total</p>
            </div>
            <div className=" col-md-2  text-center ">
              <p className="text-uppercase">Track</p>
            </div>
          </div>
        </div>
      </section>

      {/* order list */}
      {orders.map((product) => (
        <div>
          <div className="card my-3 shadow">
            <div className="row px-5 py-4">
              <div className="row ">
                <div
                  className="col-sm-12 col-md-2 col-lg-3 p-3"
                  style={{ maxHeight: 200 }}
                >
                  <img
                    src={product.productImgSrc}
                    alt="hai"
                    className="img-fluid"
                  />
                </div>

                <div className="col-sm-6 col-md-4 p-2">
                  <p className="text-uppercase">{product.productName}</p>
                </div>
                <div className="col-sm-4  col-md-1">
                  <p className="text-uppercase">{product.productPrice}</p>
                </div>
                <div className="col-sm-2 col-md-1">
                  <div className="d-flex justify-content-center align-items-center">
                    {product.productNos}
                  </div>
                </div>
                <div className="col-sm-2 col-md-2  text-center">
                  <p className="text-uppercase">
                    {product.productNos * product.productPrice}
                  </p>
                </div>
                <div className="col-sm-6 col-md-1 ">
                  <Link to={"/tracker"}>
                    <button type="button" class="btn btn-warning">
                      Track
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
