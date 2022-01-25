import React, { useState, useEffect } from "react";
import "../home/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../App";

const Products = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");

  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/products`).then((products) => {
      setproducts(products.data.data.products);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`${URL}/admin/products/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    setproducts((oldProducts) => {
      return oldProducts.filter((prod) => prod.id !== id);
    });
  };
  const sortPrice = (ascending = true) => {
    setproducts((oldProducts) => {
      const sortedProducts = [...oldProducts].sort((a, b) =>
        ascending
          ? parseInt(a.price) - parseInt(b.price)
          : parseInt(b.price) - parseInt(a.price)
      );
      return sortedProducts;
    });
  };

  return (
    <div>
      <div className="row m-2">
        {/* filter section starts */}
        <div className="col-3 position-relative">
          <div className="position-sticky top-0 start-0 mb-5">
            <div className="card shadow my-5 p-5">
              <h2>Filter</h2>
              <div className="form-group mt-3">
                <span>Sort by</span>
                <select
                  className="form-select mt-2"
                  onChange={(e) => {
                    if (e.target.value === "ascending") sortPrice(true);
                    else sortPrice(false);
                  }}
                >
                  <option value="default">Select Option</option>
                  <option value="ascending">Price: low to high</option>
                  <option value="descending">Price: high to low</option>
                </select>
              </div>
              <div className="form-group mt-3">
                <span>Category</span>
                <select className="form-select mt-2">
                  <option>Airpods</option>
                  <option>Airtags</option>
                  <option>iPhone</option>
                  <option>iMac</option>
                  <option>Macbook</option>
                </select>
              </div>
            </div>
            {isAdmin === "true" ? (
              <div className="card shadow my-5 p-5 text-center">
                <Link to={"/addproduct"}>
                  <button type="button" className="btn btn-primary">
                    <i className="fas fa-plus-circle mx-3"></i>
                    Add products
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        {/* filter section ends */}
        <div className="col-9">
          {products.map((product) => (
            <div className="card my-5 shadow" key={product.id}>
              <div className="row px-5 py-4">
                <div
                  className="col-sm-12 col-md-5 col-lg-3 p-3"
                  style={{ maxHeight: 300 }}
                >
                  <div value={product.id}>
                    <img
                      src={product.imgSrc}
                      alt="product"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                  <div className="mt-2 d-flex">
                    <p
                      className="text-muted old-price"
                      style={{ marginRight: 10 }}
                    >
                      ₹ {product.price * 1.5}
                    </p>
                    <p> ₹ {product.price}</p>
                  </div>
                  <div>
                    <p>Free delivery</p>
                    {isAdmin === "true" ? (
                      <p>
                        InStock:
                        <span className="text-danger">
                          {product.quantityInStock}
                        </span>
                      </p>
                    ) : (
                      <p
                        className={`text-${
                          product.stockStatus === "InStock"
                            ? "success"
                            : product.stockStatus === "Hurry, few lefts"
                            ? "warning"
                            : "danger"
                        }`}
                      >
                        {product.stockStatus}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col">
                  <ul className="row gap-2">
                    <li className="col-12">{product.keyFeature1}</li>
                    <li className="col-12">{product.keyFeature2}</li>
                    <li className="col-12">{product.keyFeature3}</li>
                  </ul>
                </div>
                {isAdmin === "true" ? (
                  <div className="col-2">
                    <div
                      className="d-flex flex-column justify-content-around"
                      style={{ height: "100%" }}
                    >
                      <Link
                        to={`/updateproduct/${product.id}`}
                        type="button"
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
