import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";




export default function Food() {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="fw-bold px-3 py-1 rounded bg-white shadow mb-5 text-success ">
              FOOD & DRINK
            </span>
            <h2 className=" my-4 foodh1">
              Quality Food And <br /> Drink Your Trip Are <br /> Enjoyable
            </h2>
            <p className="text-black-50 mb-4 fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              tortor at tellus feugiat congue quis ut nunc. Semper ac dolor
              vitae accumsan interdum hendrerit lacinia.
            </p>

            <ul className="list-unstyled">
              <li className="mb-4">
                ✅ <strong> Free Breakfast, Tea & Coffee</strong>
                <br />
                <small className="text-black-50">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks.
                </small>
              </li>
              <li className="mb-4">
                ✅ <strong>Quality Foods & Drinks</strong>
                <br />
                <small className="text-black-50">
                  Making this the first true generator of Lorem Ipsum.
                </small>
              </li>

              <li className="mb-4">
                ✅ <strong>Restorent & Bar</strong>
                <br />
                <small className="text-black-50">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.{" "}
                </small>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="row g-3 position-relative">
              <div className="col-lg-6 col-sm-6">
                <img
                  src="/quality-food-1.jpg"
                  alt="Food 1"
                  className="w-100 rounded-4 fallenphoto"
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <img
                  src="/quality-food-2.jpg"
                  alt="Food 2"
                  className="w-100 rounded-4"
                />
              </div>

              <div className="bg-white rounded-4  py-5 position-absolute w-50 userscard text-center usersanimate">
                <span style={{ color: "#1F8F6A" }} className="fw-bold">Popular Client</span>
                <div className="d-flex align-items-center justify-content-center mt-4">
                  {avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="rounded-circle border border-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        marginLeft: index !== 0 ? "-10px" : "0",
                        zIndex: avatars.length - index,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


  const avatars = [
    { alt: "Remy Sharp", src: "/user-1.png" },
    { alt: "Travis Howard", src: "/user-2.png" },
    { alt: "Agnes Walker", src: "/user-3.png" },
    { alt: "Trevor Henderson", src: "/user-4.png" },
    { alt: "Trevor Henderson", src: "/user-5.png" },
    { alt: "Trevor Henderson", src: "/user-6.png" },
  ];