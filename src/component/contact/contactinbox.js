import React from "react";
import "./contactinbox.css";

const inbox = [{ id: 1, name: "giri", message: "hai" }];

const ContactInbox = () => {
  return (
    <div>
      <section className="">
        <div className="row px-5 py-4 text-uppercase">
          <div className="row ">
            <div className=" col-md-2 text-center ">
              <p className="text-uppercase">Id</p>
            </div>
            <div className=" col-md-4  text-center">
              <p className="text-uppercase">Name</p>
            </div>
            <div className=" col-md-6  ">
              <p className="text-uppercase">Message</p>
            </div>
          </div>
        </div>
      </section>
      {inbox.map((user) => (
        <div>
          <div className="card my-3 shadow">
            <div className="row px-5 py-4">
              <div className="row ">
                <div className="  col-md-2 text-center">
                  <p className="text-uppercase">{user.id}</p>
                </div>
                <div className="col-md-4 text-center">
                  <p className="text-uppercase">{user.name}</p>
                </div>
                <div className="col-md-6">
                  <div className="text-uppercase">{user.message}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInbox;
