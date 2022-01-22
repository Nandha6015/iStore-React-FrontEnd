import React from "react";

import "./profile.css";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const onSubmit = () => {
    axios
      .put(
        `${URL}/user/${localStorage.getItem("Id")}`,
        {
          userId: user.userId,
          userName: name,
          userEmail: email,
          userPhoneNumber: phone,
          userPassword: password,
          userAddress: address,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("Token")}`,
          },
        }
      )
      .then((user) => {
        if (user.data.status === 200) {
          localStorage.setItem("Id", user.data.data.user.id);
          localStorage.setItem("Token", user.data.data.token);
          localStorage.setItem("Role", user.data.data.user.role);
        } else {
          setError(user.data.error.message);
        }
      });
    setEditable(false);
  };

  return (
    <div>
      <section className="vh-100" style={{ "background-color": "white" }}>
        <div className="container PY-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-xl-10 shadow-lg p-4 ">
              <div
                className="card text-black "
                style={{ "border-radius": "1rem" }}
              >
                <div className="card-body p-md-3 ">
                  <div className="row justify-content-center">
                    <div className="col-md-2 col-lg-5 d-none d-md-block">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        className="img-fluid"
                        alt="hai"
                        id="image"
                      />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <img src="profile1.png" className="img-fluid" alt="hai" />

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6>Name</h6>
                          <input
                            className="text-muted"
                            id="Name"
                            name="userName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6>Email</h6>
                          <input
                            className="text-muted "
                            id="Email"
                            name="userEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6>Phone</h6>
                          <input
                            className="text-muted"
                            id="Phone"
                            name="userPhone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6>Password</h6>
                          <input
                            className="text-muted"
                            id="Password"
                            name="userPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-home fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6>Address</h6>
                          <input
                            className="text-muted"
                            id="Address"
                            name="userAddress"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-3">
                        <button className="btn btn-danger m-2" type="button">
                          LogOut
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="submit"
                          onclick="submit();"
                          // style="float:right; width: 60px;"
                          hidden={!editable}
                          onClick={() => onSubmit()} // to do
                        >
                          Submit
                        </button>
                        <button
                          className="btn btn-warning"
                          type="button"
                          id="edit"
                          onClick={() => setEditable(true)} // to do
                          hidden={editable}
                          // style="float:right; width: 60px;"
                        >
                          Edit
                        </button>
                      </div>
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

export default Profile;
