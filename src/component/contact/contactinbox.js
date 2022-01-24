import React from "react";
import "./contactinbox.css";
const ContactInbox = () => {
  return (
    <div class="container pb-5 ">
      <div class="row">
        <div class="heading">
          <h1>Admin Inbox</h1>
        </div>
      </div>
      <div class="row">
        <div class="conversation-wrap col-md-3">
          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/user_2.jpg"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Michael clarkt</h5>
              <small class="text-muted">Lorem ipsum dolor...</small>
            </div>
          </div>

          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/user_1.jpg"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Pauline mothg</h5>
              <small class="text-muted">Cras commodo...</small>
            </div>
          </div>

          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/user_3.jpg"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Manuel mcKlein</h5>
              <small class="text-muted">Cras sit amet...</small>
            </div>
          </div>

          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/User_for_snippets.png"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Markt prame</h5>
              <small class="text-muted">Morbi felis...</small>
            </div>
          </div>

          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/user-453533-fdadfd.png"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Bort snudert</h5>
              <small class="text-muted">Vivamus semper...</small>
            </div>
          </div>

          <div class="media conversation">
            <a class="pull-left" href="#">
              <img
                class="media-object img-circle"
                id="style1"
                src="https://bootdey.com/img/Content/HexGames349.jpg"
              />
            </a>
            <div class="media-body">
              <h5 class="media-heading">Maria monthg</h5>
              <small class="text-muted">cursus ac...</small>
            </div>
          </div>
        </div>

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
                  <i class="fa fa-clock-o"></i> 12:10am
                </small>
                <h5 class="media-heading">Pauline mothg</h5>
                <small class="col-md-10 text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam convallis, augue sed euismod varius, nisl metus
                  vestibulum neque, nec dictum est dui et tellus
                </small>
              </div>
            </div>
            <div class="alert alert-info msg-date">
              <strong>Today</strong>
            </div>
            <div class="media msg">
              <a class="pull-left" href="#">
                <img
                  class="media-object   img-circle"
                  id="style2"
                  src="https://bootdey.com/img/Content/user_2.jpg"
                />
              </a>
              <div class="media-body">
                <small class="pull-right time">
                  <i class="fa fa-clock-o"></i> 12:10am
                </small>
                <h5 class="media-heading">Pauline mothg</h5>
                <small class="col-md-10 text-muted">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  In at lacus ac velit vehicula elementum at a lorem. Nullam
                  quis augue sodales, porttitor orci non"
                </small>
              </div>
            </div>

            <div class="media msg">
              <a class="pull-left" href="#">
                <img
                  class="media-object  img-circle"
                  data-src="holder.js/64x64"
                  alt="64x64"
                  id="style2"
                  src="https://bootdey.com/img/Content/user_2.jpg"
                />
              </a>
              <div class="media-body">
                <small class="pull-right time">
                  <i class="fa fa-clock-o"></i> 12:10am
                </small>
                <h5 class="media-heading">Pauline mothg</h5>
                <small class="col-md-10 text-muted">
                  consectetur dui. Quisque lacinia vitae lectus placerat dictum.
                  Integer tristique sem a risus egestas, ac accumsan ligula
                  volutpat. Donec at convallis elit"
                </small>
              </div>
            </div>

            <div class="media msg">
              <a class="pull-left" href="#">
                <img
                  class="media-object img-circle"
                  id="style2"
                  src="https://bootdey.com/img/Content/user_2.jpg"
                />
              </a>
              <div class="media-body">
                <small class="pull-right time">
                  <i class="fa fa-clock-o"></i> 12:10am
                </small>
                <h5 class="media-heading">Pauline mothg</h5>
                <small class="col-md-10 text-muted">
                  Cras commodo ante sit amet nulla porta, sed feugiat lectus
                  accumsan. Maecenas luctus est sed dignissim mattis. Mauris
                  ullamcorper hendrerit est in pharetra text-muted"
                </small>
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
      </div>
    </div>
  );
};

export default ContactInbox;
