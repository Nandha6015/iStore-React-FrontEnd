import React from "react";
import "./contactinbox.css";
import ContactInbox from "./contactinbox";
const InboxMessage = () => {
  return (
    <div>
      <div class="message-wrap col-md-8">
        <div class="msg-wrap">
          <div class="media msg ">
            <a class="pull-left" href="#">
              <img
                class="media-object    img-circle"
                id="style2"
                src="https://bootdey.com/img/Content/user_2.jpg"
              />
            </a>
            <div class="media-body">
              <small class="pull-right time">
                <i class="fa fa-clock-o"></i>
              </small>
              <h5 class="media-heading"></h5>
              <small class="col-md-10 text-muted">hai</small>
            </div>
          </div>
        </div>
      </div>
      <div class="send-wrap pt-4">
        <textarea
          class="form-control send-message"
          rows="4"
          placeholder="Write a reply..."
        ></textarea>
      </div>
      <div class="btn-panel">
        <button class="btn btn-success" id="send-btn" role="button">
          <i class="fa fa-share"></i> Send Message
        </button>
      </div>
    </div>
  );
};
export default InboxMessage;
