import React from "react";
import "./style.css";
import imglogo1 from "../img/company-logos/company-logo-1.png";
// import imglogo2 from "../img/company-logos/company-logo-2.png";
// import imglogo3 from "../img/company-logos/company-logo-3.png";
// import imglogo4 from "../img/company-logos/company-logo-4.png";
// import imglogo5 from "../img/company-logos/company-logo-5.png";
// import imglogo6 from "../img/company-logos/company-logo-6.png";
import ipad from "../img/cagetogoryImg/ipad-category.png";
import airpod from "../img/cagetogoryImg/airpods-category.png";
import imac from "../img/cagetogoryImg/imac-category.png";
import iphone from "../img/cagetogoryImg/iphone-category.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header id="header" className="header">
        <div className="banner d-flex align-items-center pl-3 pl-lg-5">
          <div>
            <h1 className="text-slanted text-capitalize mb-0">
              everything you love
            </h1>
            <h1 className="text-lowercase font-weight-bold">
              about an apple store is online
            </h1>
            <Link to="/products" className="btn btn-yellow">
              {" "}
              view products{" "}
            </Link>
          </div>
        </div>
      </header>

      <section id="services" className="services py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-parachute-box"></i>
              </span>
              <h5 className="text-uppercase font-weight-bold">free shipping</h5>
              <p className="text-muted text-capitalize">
                free shipping on all order over 100.00
              </p>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-phone-volume"></i>
              </span>
              <h5 className="text-uppercase font-weight-bold">
                ONLINE SUPPORT 24/7
              </h5>
              <p className="text-muted text-capitalize">
                We Will Assist You With Your Inquiries
              </p>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-dollar-sign"></i>
              </span>
              <h5 className="text-uppercase font-weight-bold">
                MONEY BACK GURANTEE
              </h5>
              <p className="text-muted text-capitalize">
                Free 100% Refund For 30 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-categories" className="home-categories py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 col-lg-3 align-self-center">
              <h5 className="text-uppercase">product categories</h5>
              <p className="text-muted text-capitalize">
                See more our wonderful products
              </p>
              <Link
                to="/products"
                className="categorie-link text-weight-bold text-capitalize"
              >
                view all categories
              </Link>
              <div className="categorie-underline"></div>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-9 my-3">
              <div className="row">
                <div className="col-md-6 col-lg-3 my-3">
                  <div className="category-container">
                    <Link to="/products">
                      <img
                        src={ipad}
                        className="img-fluid category-img"
                        alt="ipad"
                      />
                      <div className="category-link">
                        <h6 className="text-uppercase mb-0">airtags</h6>
                        <p className="text-yellow mb-0">1 items</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 my-3">
                  <div className="category-container">
                    <Link to="/products">
                      <img
                        src={airpod}
                        className="img-fluid category-img"
                        alt="airpod"
                      />
                      <div className="category-link">
                        <h6 className="text-uppercase mb-0">airpods</h6>
                        <p className="text-yellow mb-0">4 items</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 my-3">
                  <div className="category-container">
                    <Link to="/products">
                      <img
                        src={imac}
                        className="img-fluid category-img"
                        alt="imac"
                      />
                      <div className="category-link">
                        <h6 className="text-uppercase mb-0">imac</h6>
                        <p className="text-yellow mb-0">4 items</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 my-3">
                  <div className="category-container">
                    <Link to="/products">
                      <img
                        src={iphone}
                        className="img-fluid category-img"
                        alt="iphone"
                      />
                      <div className="category-link">
                        <h6 className="text-uppercase mb-0">iPhone</h6>
                        <p className="text-yellow mb-0">3 items</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-filler">
        <div className="container-fluid">
          <div className="row home-filler align-items-center">
            <div className="col-10 mx-auto text-center text-white">
              <h4 className="text-uppercase font-weight-bold">
                smart collection
              </h4>
              <p className="text-capitalize">
                The goal of Apple is not to make money but to make really nice
                products,really great products
              </p>
              <Link
                to="/products"
                className="text-capitalize collection-link text-yellow"
              >
                view collection
              </Link>
              <div className="collection-underline"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="featured py-5">
        <div className="container">
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <h1 className="text-uppercase">special products</h1>
              <p className="text-muted">
                Apple products aren't simple technologies by any stretch,but
                there is Link beautiful simplicity to them.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-container bg-white p-5">
                <img
                  src="/special/special-1.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹60000</span>
                <span>₹50000</span>
              </h6>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-container bg-white p-5">
                <img
                  src="/special/special-2.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹20900</span>
                <span>₹10000</span>
              </h6>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-container bg-white p-5">
                <img
                  src="/special/special-3.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹12200</span>
                <span>₹11900</span>
              </h6>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-containerbg-white  p-5">
                <img
                  src="/special/special-4.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹13200</span>
                <span>₹8100</span>
              </h6>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-container bg-white p-5">
                <img
                  src="/special/special-5.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹22200</span>
                <span>₹19000</span>
              </h6>
            </div>

            <div className="col-10 mx-auto col-md-6 col-lg-4">
              <div className="featured-container bg-white p-5">
                <img
                  src="/special/special-6.png"
                  alt=""
                  className="img-fluid"
                />
                <span
                  className="featured-search-icon"
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  <i className="fas fa-search"></i>
                </span>
                <Link
                  to="/products"
                  className="featured-store-link text-capitalize"
                >
                  add to cart
                </Link>
              </div>
              <h6 className="text-capitalize text-center my-2">
                special product
              </h6>
              <h6 className="text-center">
                <span className="text-muted old-price mx-2">₹12200</span>
                <span>₹10100</span>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="partners py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4 mx-auto">
              <div
                id="partnerCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={imglogo1}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>

                  {/* <div className="carousel-item">
                    <img
                      src={imglogo2}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={imglogo3}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={imglogo4}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={imglogo5}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={imglogo6}
                      className="d-block w-100"
                      alt="partner company"
                    />
                  </div>
                </div>
                <Link
                  to={"#partnerCarousel"}
                  className="carousel-control-prev"
                  role="button"
                  data-slide="prev"
                ></Link>
                <Link
                  to={"#partnerCarousel"}
                  className="carousel-control-next"
                  role="button"
                  data-slide="next"
                ></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
              <div className="skill-icon mr-3">
                <i className="fas fa-truck"></i>
              </div>
              <div className="skill-text">
                <h3 className="text-uppercase text-white">free shipping</h3>
                <p className="text-capitalize text-muted">
                  free shipping on all order over 100.00
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
              <div className="skill-icon mr-3">
                <i className="fas fa-comment-dollar"></i>
              </div>
              <div className="skill-text">
                <h3 className="text-uppercase text-white">price promise</h3>
                <p className="text-capitalize text-muted">100% guarantee</p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
              <div className="skill-icon mr-3">
                <i className="fas fa-award"></i>
              </div>
              <div className="skill-text">
                <h3 className="text-uppercase text-white">lifetime warranty</h3>
                <p className="text-capitalize text-muted">
                  A customer is never out of warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <script src="js/jquery-3.4.1.min.js"></script>

      <script src="js/bootstrap.bundle.min.js"></script>

      <script src="js/all.min.js"></script>

      <script src="js/index.js"></script> */}
    </div>
  );
};
export default Home;
