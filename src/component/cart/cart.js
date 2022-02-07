import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../App";
import emptyCartImg from "../img/empty_cart.svg";

const SHIPPING = 0;
const Cart = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id !== null)
      axios
        .get(`${URL}/user/${id}/carts`, {
          headers: {
            Authorization: token,
          },
        })
        .then((products) => {
          setProducts(products.data.data.cart.products);
        });
  }, []);

  const addQuantity = (id) => {
    setProducts((oldProducts) =>
      oldProducts.map((product) => {
        if (product.id === id) updateCart(id, product.nos + 1);
        return product.id === id
          ? {
              ...product,
              nos: product.nos + 1,
            }
          : product;
      })
    );
  };
  const reduceQuantity = (id) => {
    setProducts((oldProducts) =>
      oldProducts.map((product) => {
        if (product.id === id) updateCart(id, product.nos - 1);
        return product.id === id
          ? {
              ...product,
              nos: product.nos - 1 < 1 ? 1 : product.nos - 1,
            }
          : product;
      })
    );
  };
  const updateCart = (pid, nos) => {
    axios.put(`${URL}/user/${id}/carts/${pid}?nos=${nos}`, null, {
      headers: {
        Authorization: token,
      },
    });
  };
  const deleteCartItem = (pid) => {
    setProducts((oldProducts) =>
      oldProducts.filter((product) => product.id !== pid)
    );
    axios.delete(`${URL}/user/${id}/carts/${pid}`, {
      headers: {
        Authorization: token,
      },
    });
  };
  const subTotal = products.reduce(
    (total, product) => total + product.price * product.nos,
    0
  );
  if (products.length === 0)
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={emptyCartImg} alt="Empty Cart" />
        <p className="display-2">Cart is Empty</p>
      </div>
    );

  return (
    <div>
      <section className="totals py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-uppercase text-center">
              <div className="row">
                <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-md-3">
                  <p className="text-uppercase">name of products</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">total</p>
                </div>
                <div className="col-10 mx-auto col-md-1">
                  <p className="text-uppercase"></p>
                </div>
              </div>
              <hr></hr>
              {/* cart list */}

              {products.map((product) => (
                <div className="row my-3 align-items-center">
                  <div className="col-10 mx-auto col-md-2 my-3">
                    <img
                      src={product.img}
                      alt="product"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-10 mx-auto col-md-3">
                    <p className="text-uppercase">{product.name}</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">{product.price}</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-black mx-1"
                        onClick={() => reduceQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="btn btn-black mx-1">{product.nos}</span>
                      <button
                        className="btn btn-black mx-1"
                        onClick={() => addQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">
                      {product.nos * product.price}
                    </p>
                  </div>
                  <div className="col-10 mx-auto col-md-1">
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => deleteCartItem(product.id)}
                    >
                      <i className="fas fa-trash" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="row my-3">
        <div className="col-sm-6 mx-auto col d-flex justify-content-center flex-wrap">
          <Link to={"products"}>
            <button type="button" className="btn btn-black my-2">
              Continue shopping
            </button>
          </Link>
          <Link to={"address"}>
            <button type="button" className="btn btn-yellow ml-2 m-2">
              checkout
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
          <div className="card card-body bg-secondary text-uppercase">
            <div className="card-title text-white">
              <h6>cart total</h6>
            </div>
            <div className="row">
              <div className="col-6">SUB TOTOAL</div>
              <div className="col-6">${subTotal}</div>

              <div className="col-6">SHIPPING</div>
              <div className="col-6">${SHIPPING}</div>

              <div className="col-6 my-2">ORDER TOTAL</div>
              <div className="col-6 text-danger my-2">
                ${subTotal + SHIPPING}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
