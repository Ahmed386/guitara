import React, { useState } from "react";
import { FaTimes, FaPlay } from "react-icons/fa";

const Videosection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="videosection py-5 text-center">
        {!showVideo ? (
          <div className="videoplay position-relative">
            {/* الخلفية + زر التشغيل */}
            <div className="layer position-absolute start-0 end-0 bottom-0 top-0"></div>
            <div className="d-flex justify-content-center align-items-center h-100">
              <button onClick={() => setShowVideo(true)} className="play-btn">
                <FaPlay className="play-icon" />
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* زر الإغلاق */}
            <FaTimes
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                fontSize: "28px",
                color: "#333",
                cursor: "pointer",
                zIndex: 10,
              }}
            />

            {/* فيديو اليوتيوب */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/j4s8D9hjFQQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Videosection;
