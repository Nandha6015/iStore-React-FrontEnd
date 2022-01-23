import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginlogo from "../img/66.svg";
import axios from "axios";
import { URL } from "../../App";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/login`, {
        email: email,
        password: password,
      })
      .then((user) => {
        localStorage.setItem("id", user.data.data.user.id);
        localStorage.setItem("token", user.data.data.user.token);
        localStorage.setItem(
          "isAdmin",
          user.data.data.user.role === "ADMIN" ? true : false
        );
        history.push("/");
      })
      .catch((user) => {
        setError(user.response.data.error[0].message);
      });
  };

  return (
    <div>
      <section style={{ "background-color": "lightgrey" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card shadow-lg"
                style={{ "border-radius": "1rem" }}
              >
                <div className="row g-0">
                  <div className="col-md-2 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ "border-radius": "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={loginUser}>
                        {/* to do */}
                        <div
                          className="d-flex align-items-center mb-3"
                          style={{ height: "0.5 rem" }}
                        >
                          <img
                            src={loginlogo}
                            alt="company logo"
                            style={({ height: "100px" }, { width: "200px" })}
                          />
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ "letter-spacing": "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <p className="text-danger text-center">{error}</p>

                        <div className="form-outline mb-3">
                          <input
                            name="userEmail"
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            name="userPassword"
                            type="password"
                            id="form2Example27"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="mb-2">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <Link to="#" className="small text-muted">
                          Forgot password?
                        </Link>
                        <p className="mb-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to={"signup"} style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <Link to="#" className="small text-muted">
                          Terms of use.
                        </Link>
                        <Link to="#" className="small text-muted">
                          Privacy policy
                        </Link>
                      </form>
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

export default Login;
