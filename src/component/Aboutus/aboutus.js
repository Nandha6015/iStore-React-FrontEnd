import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      {/* <div className="col-md-6">
        <img alt="about-page-page" src="/special/special-6.png" height={200} />
      </div>
      <div className="row text-center">
        <div className="col-md-6 columns ">
          <p>
            Butler's Wharf is an English historic building on the south bank of
            the River Thames, just east of London's Tower Bridge, now housing
            luxury flats and restaurants. Lying between the picturesque street
            Shad Thames and the Thames Path, it overlooks both the bridge and St
            Katharine Docks on the other side of the river. Butler's Wharf is
            also used as a term for the surrounding area.
          </p>
          <p>
            Butler's Wharf is also used as a name for the surrounding area,
            otherwise called Shad Thames after the main local street.
          </p>
          <p>Source: Wikipedia.org</p>
          <p>
            This is a sample website, don't pay any attention to the contents.
          </p>
        </div>
      </div>
      <h2 className="text-center">
        <b>IMAGE GALLERY</b>
      </h2>
      <hr />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <a href="#" className="thumbnail">
            <img src="img/game-site-1.jpg" />{" "}
          </a>
        </div>
        <div className="col-md-2">
          <a href="#" className="thumbnail">
            <img src="img/game-site-2.jpg" />{" "}
          </a>
        </div>
        <div className="col-md-2">
          <a href="#" className="thumbnail">
            <img src="img/game-site-3.jpg" />{" "}
          </a>
        </div>
        <div className="col-md-2">
          <a href="#" className="thumbnail">
            <img src="img/game-site-4.jpg" />{" "}
          </a>
        </div>
        <div className="col-md-2"></div>
      </div>{" "} */}

      {/* <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Punny headline</h1>
          <p className="lead font-weight-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple's marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div> */}

      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About iStore</h1>
              <p className="lead text-muted mb-0">
                iStore is e-commerce company,headquartered in Bangalore. Our
                goal is to provide apple products with top quality with less
                cost to the customers.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="about1.png"
                alt=""
                className="img-responsive"
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">Which products available</h2>
              <p className="font-italic text-muted mb-4">
                All the apple products are available to purchase.
              </p>
              <Link
                to={"/"}
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                See products
              </Link>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="about2.png"
                alt=""
                className="img-responsive mb-4 mb-lg-0"
                height={300}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="about3.png"
                alt=""
                className="img-responsive mb-4 mb-lg-0"
                height={300}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">
                Why you want to choose istore
              </h2>
              <p className="font-italic text-muted mb-4">
                iStore does not compromise on the quality of the products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Manuella Nevoresky</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Samuel Hardy</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
