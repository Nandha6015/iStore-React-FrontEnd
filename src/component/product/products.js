import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Products = () => {
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
            {user === null ? null : user.userRole === "ADMIN" ? (
              <div className="card shadow my-5 p-5 justify-content-center">
                <Link to={"./productadd"} className="justify-content-center">
                  <i className="fas fa-plus-circle mx-3"></i>
                  <button type="button" className="btn btn-primary">
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
            <div className="card my-5 shadow" key={product.productId}>
              <div className="row px-5 py-4">
                <div
                  className="col-sm-12 col-md-5 col-lg-3 p-3"
                  style={{ maxHeight: 300 }}
                >
                  <div value={product.productId}>
                    <img
                      src={product.productImgSrc}
                      alt="product"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <Link to={`/products/${product.productId}`}>
                    {product.productName}
                  </Link>
                  <div className="mt-2 d-flex">
                    <p
                      className="text-muted old-price"
                      style={{ marginRight: 10 }}
                    >
                      ₹ {product.productPrice * 1.5}
                    </p>
                    <p> ₹ {product.productPrice}</p>
                  </div>
                  <div>
                    <p>Free delivery</p>
                    {user !== null ? (
                      user.userRole === "ADMIN" ? (
                        <p>
                          InStock:
                          <span className="text-danger">
                            {product.productQuantityInStock}
                          </span>
                        </p>
                      ) : null
                    ) : null}
                  </div>
                </div>

                <div className="col">
                  <ul className="row gap-2">
                    <li className="col-12">{product.productKeyFeature1}</li>
                    <li className="col-12">{product.productKeyFeature2}</li>
                    <li className="col-12">{product.productKeyFeature3}</li>
                  </ul>
                </div>
                {user !== null ? (
                  user.userRole === "ADMIN" ? (
                    <div className="col-2">
                      <div
                        className="d-flex flex-column justify-content-around"
                        style={{ height: "100%" }}
                      >
                        <Link
                          to={`/productedit/${product.productId}`}
                          type="button"
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.productId)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : null
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
