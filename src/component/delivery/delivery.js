import React, { useEffect } from "react";
import page from "../img/pagenotfound.svg";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../App";

const DeliveryList = () => {
  return (
    <div className="container  ">
      <div className="p-5 shadow-sm">
        <table className="table">
          <thead className="d-none d-md-block">
            <tr className="row">
              <th className="col-1 h4">Orderid</th>
              <th className="col-2 mx-3 h4">Product Name</th>
              <th className="col-2 h4">User name</th>
              <th className="col-1 mx-2 h4">Amount</th>
              <th className="col-1 mx-3 h4">Payment</th>
              <th className="col-2 h4">Delivery</th>
              <th className="col-2 mx-2 h4">Tracker</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default DeliveryList;
