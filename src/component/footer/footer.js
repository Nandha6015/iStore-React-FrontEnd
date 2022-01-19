import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <h1
                className="
                text-uppercase
                font-weight-bold
                text-yellow
                d-inline-block
                footer-title
              "
              >
                iStore
              </h1>

              <div className="footer-icons d-flex justify-content-center my-5">
                <a href="facebook.com" className="footer-icon mx-2">
                  <div className="fab fa-facebook"></div>
                </a>

                <a href="twitter.com" className="footer-icon mx-2">
                  <div className="fab fa-twitter"></div>
                </a>

                <a href="youtube.com" className="footer-icon mx-2">
                  <div className="fab fa-youtube"></div>
                </a>

                <a href="googl.com" className="footer-icon mx-2 ">
                  <div className="fab fa-google-plus"></div>
                </a>

                <a href="instagram.com" className="footer-icon mx-2">
                  <div className="fab fa-instagram"></div>
                </a>
              </div>

              <p className="text-muted text-capitalize w-75 mx-auto text-center">
                we do not market research.we don't hire consultants.we just want
                to make great products.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-contact d-flex justify-content-around ">
          <div className="text-capitalize">
            <span className="contact-icon mr-2">
              <i className="fas fa-map"></i>
            </span>
            iStore,Bangalore
          </div>
          <div className="text-capitalize">
            <span className="contact-icon mr-2">
              <i className="fas fa-phone"></i>
            </span>
            Phone : + (900) 111 2222
          </div>
          <div className="text-capitalize">
            <span className="contact-icon mr-2">
              <i className="fas fa-envelope"></i>
            </span>
            Email : iStore@gmail.Com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
