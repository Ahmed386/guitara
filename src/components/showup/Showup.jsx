import React from "react";
import { FaEye } from "react-icons/fa";

const Showup = () => {
  const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-2.jpg",
  ];

  return (
    <div className="showup  mt-5">
      <div className="container-fluid">
        <div className="row">
          {images.map((src, i) => (
            <div
              key={i}
              className="col-lg-2 col-md-4 col-sm-6 mx-0 px-0 showf"
              style={{ "--photonum": `url(${src})` }}
            >
              <div className="showuplayer">
                <FaEye style={{ fontSize: "35px", color: "white" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showup;
