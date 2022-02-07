import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../App";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [error, setError] = useState("");
  const signup = (event) => {
    event.preventDefault();
    if (cPassword === password) {
      axios
        .post(`${URL}/signup`, {
          name: name,
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
          localStorage.setItem(
            "isDelivery",
            user.data.data.user.role === "DELIVER" ? true : false
          );
          history.push("/");
        })
        .catch((user) => setError(user.response.data.error[0].message));
    } else {
      setError("Password not matches");
    }
  };
  return (
    <div>
      <section style={{ "background-color": "lightgrey" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div
                className="card text-black shadow-lg"
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body p-md-3 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <p className="text-danger text-center">{error}</p>

                      <form className="mx-1 mx-md-4 " onSubmit={signup}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              required
                              name="userName"
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label className="form-label" for="form3Example1c ">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              required
                              name="userEmail"
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              required
                              name="userPassword"
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              required
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="confirmPassword"
                              value={cPassword}
                              onChange={(e) => setcPassword(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-dark btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images.unsplash.com/photo-1524289286702-f07229da36f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        className="img-fluid"
                        alt={""}
                      />
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

export default Register;
