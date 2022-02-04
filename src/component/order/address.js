import React from "react";
import "./address.css";
const address = () => {
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

                    <div class="row">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3">
                          Full Name
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example8">
                        Address
                      </label>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
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
                      />
                      <label class="form-label" for="form3Example2">
                        Email
                      </label>
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        id="button"
                        class="btn btn-yellow btn-lg ms-2"
                        // style="background-color:hsl(210, 100%, 50%) "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        id="button"
                        class="btn btn-yellow btn-lg ms-2"
                      >
                        Next
                      </button>
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

export default address;
