import "./tracker.css";
import React, { useEffect, useState } from "react";
import { URL } from "../../App";
import page from "../img/pagenotfound.svg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const Tracker = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const { oid } = useParams();
  const [stage, setstage] = useState();
  const [stage1, setstage1] = useState();
  const [stage2, setstage2] = useState();
  const [stage3, setstage3] = useState();
  const [stage4, setstage4] = useState();
  const [stage5, setstage5] = useState();

  useEffect(() => {
    axios
      .get(`${URL}/user/${id}/orders/${oid}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((track) => {
        setstage(track.data.data.message);
        switch (track.data.data.message) {
          case "Stage 1":
            setstage1("completed");
            break;
          case "Stage 2":
            setstage1("completed");
            setstage2("completed");
            break;
          case "Stage 3":
            setstage1("completed");
            setstage2("completed");
            setstage3("completed");
            break;
          case "Stage 4":
            setstage1("completed");
            setstage2("completed");
            setstage3("completed");
            setstage4("completed");
            break;
          case "Stage 5":
            setstage1("completed");
            setstage2("completed");
            setstage3("completed");
            setstage4("completed");
            setstage5("completed");
            break;
          default:
            break;
        }
      });
  }, []);

  if (id === null) {
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <img height={400} width={400} src={page} alt="empty cart" />
        <p className="display-2">Page Not Found</p>
      </div>
    );
  }
  return (
    <div className="container padding-bottom-3x mb-1">
      <div className="card mb-3">
        <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
          <span className="text-uppercase">Tracking Order No - {oid}</span>
          <span className="text-medium">{oid}</span>
        </div>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Shipped Via:</span> UPS Ground
          </div>
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Status:</span> {stage}
          </div>
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Expected Date:</span> WithIn 2 days
          </div>
        </div>
        <div className="card-body">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <div className={`step ${stage1}`}>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              <h4 className="step-title">Confirmed Order</h4>
            </div>
            <div className={`step ${stage2}`}>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-cog"></i>
                </div>
              </div>
              <h4 className="step-title">Processing Order</h4>
            </div>
            <div className={`step ${stage3}`}>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-medal"></i>
                </div>
              </div>
              <h4 className="step-title">Quality Check</h4>
            </div>
            <div className={`step ${stage4}`}>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-car"></i>
                </div>
              </div>
              <h4 className="step-title">Product Dispatched</h4>
            </div>
            <div className={`step ${stage5}`}>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="fas fa-home"></i>
                </div>
              </div>
              <h4 className="step-title">Product Delivered</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
