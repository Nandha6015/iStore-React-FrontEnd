import React from "react";

const OrderList = () => {
  return (
    <div className="container  ">
      <div className="p-5 shadow-sm">
        <table className="table">
          <thead className="d-none d-md-block">
            <tr className="row">
              <th className="col-2 h4">Order id</th>
              <th className="col-2 h4">Image</th>
              <th className="col-3 h4">Product Name</th>
              <th className="col-3 h4">Username</th>
              <th className="col-2 h4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="row">
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  Order id
                </td>
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

                <td className="col-sm-12 col-md-3 d-flex align-items-center">
                  Product Name
                </td>
                <td className="col-sm-12 col-md-3 d-flex align-items-center">
                  Username
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  <button type="button" className="btn btn-danger">
                    Order Tracker
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

export default OrderList;
