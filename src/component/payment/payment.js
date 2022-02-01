import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { URL } from "../../App";

import "./payment.css";
const Payment = () => {
  const history = useHistory();
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const [tab, settab] = useState(1);

  const Tab = (index) => {
    settab(index);
  };
  const pay = () => {
    axios
      .post(`${URL}/user/${id}/orders`, null, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => history.push("/orders"));
  };
  return (
    <div>
      <section className="vh-100" style={{ "background-color": "white" }}>
        <div className="container PY-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-xl-10 shadow-lg p-4 ">
              <div
                className="card text-black "
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body p-md-3 ">
                  <div className="row justify-content-center">
                    <div className="col-md-2 col-lg-5 d-none d-md-block">
                      <img
                        src="payment/payment1.png"
                        className="img-responsive mx-5 my-5"
                        alt=""
                        height={400}
                      />
                    </div>
                    <div className="col-lg-7 mx-auto" id="paybox">
                      <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="bloc-tabs">
                          <button
                            className={tab === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => Tab(1)}
                          >
                            <i className="fa fa-credit-card"></i>
                            CARD
                          </button>

                          <button
                            className={tab === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => Tab(2)}
                          >
                            <i className="fa fa-paypal"></i> PAYTM
                          </button>

                          <button
                            className={tab === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => Tab(3)}
                          >
                            <i className="fa fa-home"></i>COD
                          </button>
                        </div>
                      </div>
                      <div className="content-tabs">
                        <div
                          className={
                            tab === 1 ? "content  active-content" : "content"
                          }
                        >
                          <form onSubmit={pay}>
                            <div className="form-group">
                              <label for="username">Full name</label>
                              <input
                                type="text"
                                name="username"
                                placeholder="Jassa"
                                required
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label for="cardNumber">Card number</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="cardNumber"
                                  placeholder="Your card number"
                                  className="form-control"
                                  required
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text text-muted">
                                    <i className="fa fa-cc-visa mx-1"></i>
                                    <i className="fa fa-cc-amex mx-1"></i>
                                    <i className="fa fa-cc-mastercard mx-1"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="form-group">
                                  <label>
                                    <span className="hidden-xs">
                                      Expiration
                                    </span>
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      placeholder="MM"
                                      name=""
                                      className="form-control"
                                      required
                                    />
                                    <input
                                      type="number"
                                      placeholder="YY"
                                      name=""
                                      className="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="form-group mb-4">
                                  <label
                                    data-toggle="tooltip"
                                    title="Three-digits code on the back of your card"
                                  >
                                    CVV
                                    <i className="fa fa-question-circle"></i>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
                            >
                              Confirm
                            </button>
                          </form>
                        </div>

                        <div
                          className={
                            tab === 2 ? "content  active-content" : "content"
                          }
                        >
                          <p>Paytm makes your job easy</p>
                          <p>
                            <button
                              type="button"
                              className="btn btn-primary rounded-pill"
                              onClick={pay}
                            >
                              <i className="fa fa-paypal mr-2"></i> Log into
                              paytm
                            </button>
                          </p>
                          <p className="text-muted"></p>
                        </div>

                        <div
                          className={
                            tab === 3 ? "content  active-content" : "content"
                          }
                        >
                          <h6>our order will be delivered to your address</h6>
                          <button
                            type="button"
                            className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
                            onClick={pay}
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Payment;
