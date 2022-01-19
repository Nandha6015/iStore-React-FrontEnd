import React from "react";

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

const UserDetails = () => {
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
                  Username
                </td>
                <td className="col-sm-12 col-md-4 d-flex align-items-center">
                  Email
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  <button type="button" className="btn btn-danger">
                    Disable
                  </button>
                  {/* </li> */}
                  {/* </ul> */}
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
