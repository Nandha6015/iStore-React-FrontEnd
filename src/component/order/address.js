import "./address.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import page from "../img/pagenotfound.svg";
import { URL } from "../../App";
const Address = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/user/${id}/address`, {
        headers: {
          Authorization: token,
        },
      })
      .then((user) => {
        setName(user.data.data.address.name);
        setEmail(user.data.data.address.email);
        setPhone(user.data.data.address.phoneNumber);
        setAddress(user.data.data.address.address);
        setState(user.data.data.address.state);
        setCity(user.data.data.address.city);
        setZip(user.data.data.address.pincode);
      });
  }, []);

  const onSubmit = () => {
    axios
      .put(
        `${URL}/user/${id}/address`,
        {
          name: name,
          email: email,
          phoneNumber: phone,
          address: address,
          state: state,
          city: city,
          pincode: zip,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((user) => {
        setNotice(user.data.data.message);
      });
    setEditable(false);
  };

  if (id === null) {
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={page} alt="Not Found" />
        <p className="display-2">Page Not Found</p>
      </div>
    );
  }

  return (
    <div>
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col">
            <div class="card my-4 shadow-3">
              <div class="row g-0">
                <div class="col-xl-6 d-xl-block bg-image">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                    alt="Sample"
                    class="img-fluid"
                  />
                  <div
                    class="mask"
                    id="mask1"
                    // style="background-color: rgba(0, 0, 0, 0.6)"
                  ></div>
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-4 text-uppercase">Delivery Info</h3>
                    <p className="text-danger">{notice}</p>
                    <div class="row">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          class="form-control form-control-lg"
                          disabled={!editable}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label class="form-label" for="form3Example3">
                          Full Name
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          class="form-control form-control-lg"
                          disabled={!editable}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                        <label class="form-label" for="form3Example3">
                          Address
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            disabled={!editable}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                          />
                          <label class="form-label" for="form3Example1m">
                            state
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                            disabled={!editable}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                          <label class="form-label" for="form3Example1n">
                            city
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            disabled={!editable}
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                          />
                          <label class="form-label" for="form3Example1m">
                            zip
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                            disabled={!editable}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                          <label class="form-label" for="form3Example1n">
                            Phone number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example2"
                        class="form-control form-control-lg"
                        disabled={!editable}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="form-label" for="form3Example2">
                        Email
                      </label>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button
                        className="btn btn-primary btn-lg ms-2"
                        type="button"
                        id="submit"
                        onclick="submit();"
                        // style="float:right; width: 60px;"
                        hidden={!editable}
                        onClick={() => onSubmit()}
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-yellow btn-lg ms-2"
                        type="button"
                        id="edit"
                        onClick={() => setEditable(true)}
                        hidden={editable}
                        // style="float:right; width: 60px;"
                      >
                        Edit
                      </button>
                      <Link
                        class="btn btn-yellow btn-lg ms-2 "
                        type="button"
                        to={"/payment"}
                      >
                        Next
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
