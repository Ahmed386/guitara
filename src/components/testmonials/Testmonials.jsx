import React from 'react'

const Testmonials = () => {
  return (
    <>
      <div className="testmonials py-5 bg-white">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-sm-12">
              <div className="position-relative">
                <img
                  src="/hotelintrance.jpg"
                  alt="hotelintrance"
                  className="w-100 rounded-4"
                />

                <div className="position-absolute rounded-3  friendswrapper">
                  <img
                    src="/friends.jpg"
                    className="w-100 rounded-3"
                    alt="friends"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="testmonialright">
                <div className="roomtypeheader text-start mb-5 ">
                  <span className="fw-bold px-3 py-1 rounded bg-white">
                    Testimonial
                  </span>
                  <h1>Amazing Feedback Say <br /> About Services </h1>
                </div>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active ">
                      <p className="mb-2">
                        "Special treat to dine, It was wow experience food was
                        really delicious! outstanding dinner made by Mater chef,
                        food experience was unfogetable!"
                      </p>

                      <hr />
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src="/testimonial-user-1.png"
                          className="d-block "
                          alt=""
                        />
                        <span className="px-1 mx-1">Abigail</span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <p className="mb-2">
                        "Special treat to dine, It was wow experience food was
                        really delicious! outstanding dinner made by Mater chef,
                        food experience was unfogetable!"
                      </p>
                      <hr />
                      <div>
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src="/testimonial-user-2.png"
                            className="d-block "
                            alt=""
                          />
                          <span className="px-1 mx-1">Abigail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonials