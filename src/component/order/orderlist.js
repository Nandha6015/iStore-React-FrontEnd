import React, { useEffect } from "react";
import page from "../img/pagenotfound.svg";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../App";

const OrderList = () => {
  const id = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  const token = localStorage.getItem("token");
  const [track, setTrack] = useState(true);
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
  }, [track]);

  const tracker = (event, oid) => {
    if (event.target.value !== "cancelled") {
      axios
        .put(`${URL}/admin/orders/${oid}?track=${event.target.value}`, null, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          setorders((oldOrders_) => {
            const oldOrder = [...oldOrders_];
            let i;

            for (let index = 0; index < orders.length; index++) {
              if (oldOrder[index].id === oid) {
                i = index;
                break;
              }
            }
            oldOrder[i].tracker = event.target.value;
            return oldOrder;
          });
        })
        .then(() => {
          setTrack(!track);
        });
    } else {
      axios
        .put(`${URL}/user/${id}/orders/${oid}`, null, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          setTrack(!track);
        });
    }
  };

  if (isAdmin === false || id === null) {
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={page} alt="Page Not Found" />
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
              <th className="col-2 h4">Product Name</th>
              <th className="col-2 h4">Username</th>
              <th className="col-2 h4">Delivery</th>
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

                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.pname}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.name}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.dname == null ? "-" : order.dname}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  <select onChange={(e) => tracker(e, order.id)}>
                    <option
                      value="Stage 1"
                      selected={order.tracker === "Stage 1"}
                      hidden
                    >
                      Confirmed Order
                    </option>
                    <option
                      value="Stage 2"
                      selected={order.tracker === "Stage 2"}
                      hidden={
                        order.tracker === "cancelled" ||
                        order.tracker === "Stage 5" ||
                        order.tracker === "Stage 4" ||
                        order.tracker === "Stage 3" ||
                        order.tracker === "Stage 2"
                      }
                    >
                      Processing Order
                    </option>
                    <option
                      value="Stage 3"
                      selected={order.tracker === "Stage 3"}
                      hidden={
                        order.tracker === "cancelled" ||
                        order.tracker === "Stage 5" ||
                        order.tracker === "Stage 4" ||
                        order.tracker === "Stage 3"
                      }
                    >
                      Quality Check
                    </option>
                    <option
                      value="Stage 4"
                      selected={order.tracker === "Stage 4"}
                      hidden={
                        order.tracker === "cancelled" ||
                        order.tracker === "Stage 5" ||
                        order.tracker === "Stage 4"
                      }
                    >
                      Product Dispatched
                    </option>
                    <option
                      value="Stage 5"
                      selected={order.tracker === "Stage 5"}
                      hidden
                    >
                      Product Delivered
                    </option>
                    <option
                      value="cancelled"
                      hidden={
                        order.tracker === "cancelled" ||
                        order.tracker === "Stage 5"
                      }
                    >
                      Cancel
                    </option>
                    <option
                      selected={order.tracker === "cancelled"}
                      hidden={true}
                    >
                      Cancelled
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

export default OrderList;
