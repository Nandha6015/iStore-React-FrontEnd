import React from "react";

const Singleproudct = () => {
  return (
    <div>
      <section className="single-product py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-lg-4 my-5 text-center">
              <div className="single-product-img-container">
                <img
                  src={product.images ? "/" + product.images[activeImage] : ""}
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="row single-product-photos mt-3">
                <div
                  className="col-2 col-sm-2 p-1 single-product-photo"
                  onClick={() => setActiveImage("imgSrc1")}
                >
                  <img
                    src={product.images ? "/" + product.images.imgSrc1 : ""}
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div
                  className="col-2 col-sm-2 p-1 single-product-photo"
                  onClick={() => setActiveImage("imgSrc2")}
                >
                  <img
                    src={product.images ? "/" + product.images.imgSrc2 : ""}
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div
                  className="col-2 col-sm-2 p-1 single-product-photo"
                  onClick={() => setActiveImage("imgSrc3")}
                >
                  <img
                    src={product.images ? "/" + product.images.imgSrc3 : ""}
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div
                  className="col-2 col-sm-2 p-1 single-product-photo"
                  onClick={() => setActiveImage("imgSrc4")}
                >
                  <img
                    src={product.images ? "/" + product.images.imgSrc4 : ""}
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div
                  className="col-2 col-sm-2 p-1 single-product-photo"
                  onClick={() => setActiveImage("imgSrc5")}
                >
                  <img
                    src={product.images ? "/" + product.images.imgSrc5 : ""}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-10 col-lg-8 mx-auto px-lg-5 single-product-info my-5">
              <h2 className="text-uppercase my-2">{product.productName}</h2>
              <h3>
                <span className="text-muted old-price ">
                  ₹{product.productPrice * 1.5}{" "}
                </span>
                <span className="mr-2">₹{product.productPrice}</span>
              </h3>
              <ul>
                <li className="lead text-muted">
                  {product.productKeyFeature1}
                </li>
                <li className="lead text-muted">
                  {product.productKeyFeature2}
                  <li className="lead text-muted">
                    {product.productKeyFeature3}
                  </li>
                </li>
              </ul>
              <p className="lead text-muted">{product.productDescription}</p>

              {inCart ? (
                <div>
                  <button
                    className="btn btn-dark my-2 mx-2"
                    onClick={removeFromCart}
                  >
                    Remove from Cart
                  </button>
                  <p className="text-success">{notice}</p>
                </div>
              ) : (
                <div>
                  <button
                    className="btn btn-yellow my-2 mx-2"
                    onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                  <p className="text-danger">{notice}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Singleproudct;
