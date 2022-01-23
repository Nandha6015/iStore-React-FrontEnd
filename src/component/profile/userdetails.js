import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import page from "../img/pagenotfound.svg";
import { URL } from "../../App";

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

const UserDetails = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/admin/users`, {
        headers: {
          Authorization: token,
        },
      })
      .then((users) => {
        setUsers(users.data.data.users);
      });
  }, []);

  const able = (id) => {
    axios.put(`${URL}/admin/users/${id}`, null, {
      headers: {
        Authorization: token,
      },
    });
  };

  if (isAdmin === false) {
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={page} alt="Not Found" />
        <p className="display-2">Page Not Found</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="p-5 shadow-sm">
        <table className="table">
          <thead className="d-none d-md-block">
            <tr className="row">
              <th className="col-2 h4">User Image</th>
              <th className="col-4 h4">User Name</th>
              <th className="col-4 h4">Email</th>
              <th className="col-2 h4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="row">
                <td className="col-sm-12 col-md-2 p-4">
                  <img
                    className="img-responsive mr-3"
                    height="50px"
                    width="50px"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    // src={`https://avatars.dicebear.com/api/female/${getRandomNumber()}.svg`}
                    alt=""
                  />
                </td>
                <td className="col-sm-12 col-md-4 d-flex align-items-center">
                  {user.name}
                </td>
                <td className="col-sm-12 col-md-4 d-flex align-items-center">
                  {user.email}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => able(user.id)}
                  >
                    {user.isEnable ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
