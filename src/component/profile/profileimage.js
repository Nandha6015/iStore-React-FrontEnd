import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const images = [
  "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
  "https://bootstrapious.com/i/snippets/sn-about/avatar-4.png",
  "https://bootdey.com/img/Content/avatar/avatar3.png",
  "https://bootdey.com/img/Content/avatar/avatar7.png",
  "https://bootdey.com/img/Content/avatar/avatar6.png",
  "https://bootdey.com/img/Content/avatar/avatar8.png",
];

const Profileimage = () => {
  const { state } = useLocation();
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (state !== undefined) {
      const { link } = state;
      if (link !== undefined) {
        const oldSelectedImage = images.findIndex((image) => image === link);
        if (oldSelectedImage !== -1) setSelectedImage(oldSelectedImage);
      }
    }
  }, [state]);

  const onSubmit = () => {
    history.push({
      pathname: "profile/",
      state: {
        link: images[selectedImage],
      },
    });
  };

  return (
    <div>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Choose one</h2>
              <p className="font-italic text-muted">
                Beauty begins the moment you decide to be yourself.
              </p>
            </div>
          </div>
          <div className="card my-5 d-flex flex-column align-items-center p-5">
            <div className="row text-center">
              {images.map((image, index) => (
                <div className="col-12 col-md-4 mb-5">
                  <div
                    className={`bg-white border rounded shadow-sm py-5 px-4 ${
                      selectedImage === index ? "border-primary" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={image}
                      alt=""
                      width="100"
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={onSubmit}
                type="button"
                class="btn btn-lg btn-success"
                id="profile1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileimage;
