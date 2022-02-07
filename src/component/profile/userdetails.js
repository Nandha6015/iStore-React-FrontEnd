import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import page from "../img/pagenotfound.svg";
import { URL } from "../../App";

const UserDetails = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  const token = localStorage.getItem("token");

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

  const able = (event, id) => {
    axios
      .put(`${URL}/admin/users/${id}?enable=${event.target.value}`, null, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setUsers((old) => {
          const oldUsers = [...old];
          let ind;
          for (let i = 0; i < oldUsers.length; i++) {
            if (oldUsers[i].id === id) {
              ind = i;
              break;
            }
          }
          oldUsers[ind].isEnable = event.target.value === "true" ? true : false;
          return oldUsers;
        });
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
                    src={user.img}
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
                  <select onChange={(e) => able(e, user.id)}>
                    <option
                      value="true"
                      selected={user.isEnable}
                      hidden={user.isEnable}
                    >
                      Enable
                    </option>
                    <option
                      value="false"
                      selected={!user.isEnable}
                      hidden={!user.isEnable}
                    >
                      Disable
                    </option>
                  </select>
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
