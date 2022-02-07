import React, { useEffect } from "react";
import page from "../img/pagenotfound.svg";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../App";

const DeliveryList = () => {
  const id = localStorage.getItem("id");
  const isDelivery =
    localStorage.getItem("isDelivery") === "true" ? true : false;
  const token = localStorage.getItem("token");

  const [orders, setOrders] = useState([]);
  const [track, setTrack] = useState(false);

  useEffect(() => {
    axios
      .get(`${URL}/deliver/${id}/orders`, {
        headers: {
          Authorization: token,
        },
      })
      .then((order) => {
        setOrders(order.data.data.deliveries);
      });
  }, []);

  const tracker = (event, oid) => {
    if (event.target.value !== "cancelled") {
      axios
        .put(
          `${URL}/deliver/${id}/orders/${oid}?track=${event.target.value}`,
          null,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(() => {
          setOrders((oldOrders_) => {
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

  if (isDelivery === false || id === null) {
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
              <th className="col-1 h4">id</th>
              <th className="col-1 h4">Name</th>
              <th className="col-3 h4">Product name</th>
              <th className="col-2 h4">Amount</th>
              <th className="col-2 h4">Payment</th>
              <th className="col-2 h4">Delivery</th>
              <th className="col-1 h4">Tracker</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="row">
                <td className="col-sm-12 col-md-1 d-flex align-items-center">
                  {order.id}
                </td>
                <td className="col-sm-12 col-md-1 d-flex align-items-center">
                  {order.uname}
                </td>
                <td className="col-sm-12 col-md-3 d-flex align-items-center">
                  {order.pname}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  ₹ {order.amount}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.payment}
                </td>
                <td className="col-sm-12 col-md-2 d-flex align-items-center">
                  {order.address.address}
                  <br />
                  {order.address.phoneNumber}
                </td>
                <td className="col-sm-12 col-md-1 d-flex align-items-center">
                  <select
                    onChange={(e) => {
                      tracker(e, order.id);
                    }}
                  >
                    <option
                      value="Stage 4"
                      selected={order.tracker === "Stage 4"}
                      hidden
                    >
                      Received
                    </option>
                    <option
                      value="Stage 5"
                      selected={order.tracker === "Stage 5"}
                      hidden={
                        order.tracker === "Stage 5" ||
                        order.tracker === "cancelled"
                      }
                    >
                      Delivered
                    </option>
                    <option
                      value="cancelled"
                      hidden={
                        order.tracker === "Stage 5" ||
                        order.tracker === "cancelled"
                      }
                    >
                      cancel
                    </option>
                    <option selected={order.tracker === "cancelled"} hidden>
                      cancelled
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

export default DeliveryList;
