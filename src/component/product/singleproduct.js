import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../../App";

const Singleproudct = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const { pid } = useParams();
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState("imgSrc1");
  const [inCart, setinCart] = useState(false);
  const [notice, setnotice] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/products/${pid}`)
      .then((result) => {
        setProduct(result.data.data.product);
      })
      .then(() => {
        if (id !== null) {
          axios
            .get(`${URL}/user/${id}/carts/${pid}`, {
              headers: {
                Authorization: token,
              },
            })
            .then((res) =>
              setinCart(res.data.data.message === "Not Found" ? false : true)
            );
        }
      });
  }, []);

  const addToCart = () => {
    if (id === null) {
      setnotice("Login to add to cart...");
      setTimeout(() => {
        setnotice("");
      }, 2000);
    } else {
      axios
        .post(`${URL}/user/${id}/carts/${pid}`, "add", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setnotice(res.data.data.message);
          setTimeout(() => {
            setnotice("");
          }, 2000);
        })
        .then(() => setinCart(true));
    }
  };

  const removeFromCart = () => {
    axios
      .delete(`${URL}/user/${id}/carts/${pid}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setnotice(res.data.data.message);
        setTimeout(() => {
          setnotice("");
        }, 2000);
      })
      .then(() => setinCart(false));
  };

  if (product === undefined) {
    return null;
  }

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
              <h2 className="text-uppercase my-2">{product.name}</h2>
              <h3>
                <span className="text-muted old-price ">
                  ₹{product.price * 1.5}{" "}
                </span>
                <span className="mr-2">₹{product.price}</span>
              </h3>
              <ul>
                <li className="lead text-muted">{product.keyFeature1}</li>
                <li className="lead text-muted">
                  {product.keyFeature2}
                  <li className="lead text-muted">{product.keyFeature3}</li>
                </li>
              </ul>
              <p className="lead text-muted">{product.description}</p>

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
