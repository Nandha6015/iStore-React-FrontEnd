import React from "react";

import "./style.css";

const Orders = () => {
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
      <section className="totals py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-uppercase text-center">
              <div className="row">
                <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-md-4">
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
              </div>
              <hr></hr>
              {/* order list */}
              {orders.map((product) => (
                <div className="row my-3 align-items-center">
                  <div className="col-10 mx-auto col-md-2 my-3">
                    <img
                      src={product.productImgSrc}
                      alt="hai"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-10 mx-auto col-md-4">
                    <p className="text-uppercase">{product.productName}</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">{product.productPrice}</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <div className="d-flex justify-content-center align-items-center">
                      {product.productNos}
                    </div>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">
                      {product.productNos * product.productPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
