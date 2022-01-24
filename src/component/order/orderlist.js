import React, { useEffect } from "react";
import page from "../img/pagenotfound.svg";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../App";

const OrderList = () => {
  const id = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  const token = localStorage.getItem("token");

  const [orders, setorders] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/admin/orders`, {
        headers: {
          Authorization: token,
        },
      })
      .then((orders) => {
        setorders(orders.data.data.orders.products);
      });
  }, []);

  const track = (event, oid) => {
    axios.put(`${URL}/admin/orders/${oid}?track=${event.target.value}`, null, {
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
    <div className="container  ">
      <div className="p-5 shadow-sm">
        <table className="table">
          <thead className="d-none d-md-block">
            <tr className="row">
              <th className="col-2 h4">Order id</th>
              <th className="col-2 h4">Image</th>
              <th className="col-3 h4">Product Name</th>
              <th className="col-3 h4">Username</th>
              <th className="col-2 h4">Tracker</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="row">
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.id}
                </td>
                <td className="col-sm-12 col-md-2 p-4">
                  <img
                    className="img-responsive mr-3"
                    height="50px"
                    width="50px"
                    src={order.img}
                    alt=""
                  />
                </td>

                <td className="col-sm-12 col-md-3 d-flex align-items-center">
                  {order.pname}
                </td>
                <td className="col-sm-12 col-md-3 d-flex align-items-center">
                  {order.name}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  <select onClick={(e) => track(e, order.id)}>
                    <option value="Stage 1">Confirmed Order</option>
                    <option value="Stage 2">Processing Order</option>
                    <option value="Stage 3">Quality Check</option>
                    <option value="Stage 4">Product Dispatched</option>
                    <option value="Stage 5">Product Delivered</option>
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

export default OrderList;
