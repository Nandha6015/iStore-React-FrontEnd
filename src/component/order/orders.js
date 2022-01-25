import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import orderimg from "../img/order.svg";
import { URL } from "../../App";

const Orders = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/user/${id}/orders`, {
        headers: {
          Authorization: token,
        },
      })
      .then((orders) => setProducts(orders.data.data.orders.products));
  }, []);
  if (products.length === 0)
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={orderimg} alt="empty order" />
        <p className="display-2">Yet to make Orders</p>
      </div>
    );

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
      {products.map((product) => (
        <div>
          <div className="card my-3 shadow">
            <div className="row px-5 py-4">
              <div className="row ">
                <div
                  className="col-sm-12 col-md-2 col-lg-3 p-3"
                  style={{ maxHeight: 200 }}
                >
                  <img src={product.img} alt="product" className="img-fluid" />
                </div>

                <div className="col-sm-6 col-md-4 p-2">
                  <p className="text-uppercase">{product.name}</p>
                </div>
                <div className="col-sm-4  col-md-1">
                  <p className="text-uppercase">{product.price}</p>
                </div>
                <div className="col-sm-2 col-md-1">
                  <div className="d-flex justify-content-center align-items-center">
                    {product.nos}
                  </div>
                </div>
                <div className="col-sm-2 col-md-2  text-center">
                  <p className="text-uppercase">
                    {product.nos * product.price}
                  </p>
                </div>
                <div className="col-sm-6 col-md-1 ">
                  <Link to={`/tracker/${product.id}`}>
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
