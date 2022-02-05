import React from "react";
import "./contactinbox.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import InboxMessage from "./inboxmessage";

const inbox = [
  {
    name: "giri",
    message: "hai",
    img: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    name: "nandha",
    message: "haiii",
    img: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
  {
    name: "ashraff",
    message: "bye",
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
];
const ContactInbox = () => {
  return (
    <div>
      <div class="container pb-5 md-8 ">
        <div class="row">
          <div class="heading">
            <h1>Admin Inbox</h1>
          </div>
        </div>

        <div class="row">
          <div class="conversation-wrap col-md-3">
            {inbox.map((user) => (
              <Link to={"/inboxmessage"}>
                {" "}
                <div class="media conversation">
                  <a class="pull-left" href="#">
                    <img
                      class="media-object img-circle"
                      id="style1"
                      src={user.img}
                    />
                  </a>

                  <div class="media-body">
                    {" "}
                    <h5 class="media-heading">{user.name}</h5>
                    <small class="text-muted">{user.message}</small>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div class="message-wrap col-md-8">
            <div class="msg-wrap">
              <div class="media msg ">
                <Router>
                  <Route
                    exact
                    path={"/inboxmessage/:id"}
                    component={InboxMessage}
                  />
                </Router>
              </div>
            </div>
          </div>

          {/* <div class="message-wrap col-md-8">
            <div class="msg-wrap">
              <div class="media msg ">
                <div class="media-body"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactInbox;
