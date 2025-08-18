import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";



const Landing = () => {
  return (
    <>
      {/* Landing Slide */}
      <div className="landingpage">
        <header className="landingheader">
          <div className="topgreenarea">
            <div className="container-fluid">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto d-lg-block d-none ">
                  <ul className="list-unstyled d-flex greenleft text-white ">
                    <li>7631 Sabina Park, 115 Devon Isle, USA</li>
                    <li>info@domain.com</li>
                    <li>(+1) 987 654 3210</li>
                  </ul>
                </div>
                <div className="col-auto ">
                  <ul className="list-unstyled d-flex greenright">
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                    <li>
                      <FaBehance />
                    </li>
                    <li>
                      <FaXTwitter />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="landingcontent position-relative">
          <div className="layer position-absolute start-0 end-0 top-0 bottom-0 ">
            <nav className="navbar navbar-expand-lg bg-transparent mt-0 pt-0 pb-4  start-0 end-0  ">
              <div className="container-fluid d-flex justify-content-between m-0 ps-0">
                {/* Logo */}
                <div className="logowrpp px-5 py-4">
                  <img src="/logo.svg" alt="logo" />
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu bg-success">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                        Link
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu bg-success">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu bg-success">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu bg-success">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active text-white"
                        aria-current="page"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <form className="d-flex ms-auto" role="search">
                  <div className="me-2 d-flex justify-content-center align-items-center">
                    <span className="searchwrapper rounded-circle ">
                      <CiSearch className="fs-3 " />
                    </span>
                  </div>

                  <button
                    className="bookstay px-4 py-2 m-1 rounded"
                    type="submit"
                  >
                    Book Your Stay
                    <span className="ps-2 py-3 ">
                      <RxArrowTopRight className="rightarrow" />
                    </span>
                  </button>
                </form>
              </div>
            </nav>

            <div className="landingbrief text-center text-white mt-4 ">
              <h1 className="display-1 fw-bolder mb-2">
                Book With <br /> Best <br />{" "}
                <span style={{ color: "#E5C466" }}>Luxury Hotel</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet rhoncus nunc Duis egestas ac ante sed tincidunt.
              </p>

              <div>
                <button
                  className="bookstay px-4 py-3 m-1 rounded"
                  type="submit"
                >
                  Explore More
                  <span className="ps-2 py-3 ">
                    <RxArrowTopRight className="rightarrow" />
                  </span>
                </button>
                <button
                  className="bookstay px-4 py-3 m-1 rounded"
                  type="submit"
                >
                  Our Services
                  <span className="ps-2 py-3 ">
                    <RxArrowTopRight className="rightarrow" />
                  </span>
                </button>
              </div>
            </div>

            <div className="checkIndate  mt-1">
              <div className="container col-stretched">
                <div className="row">
                  <div className="col-12">
                    <div className="default-form availability-form">
                      <div
                        className="col-stretched-right-bg stretched-bg"
                        style={{ marginRight: " 0px" }}
                      ></div>
                      <form method="POST" action="#">
                        <div className="row align-items-end">
                          <div className="col-lg-5">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-1">
                                  <label htmlFor="checkinDate" className="form-label">
                                    Check-in Date
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="checkinDate"
                                  />
                                  <i className="fa-solid fa-calendar"></i>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-1">
                                  <label htmlFor="checkoutDate" className="form-label">
                                    Check-out Date
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="checkoutDate"
                                  />
                                  <i className="fa-solid fa-calendar"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-1">
                                  <label
                                    htmlFor="room"
                                    className="form-label d-flex align-items-center gap-2"
                                  >
                                    <FaBed className="text-secondary" />
                                    Room
                                  </label>
                                  <select
                                    className="form-select"
                                    id="room"
                                    name="room"
                                  >
                                    <option value="1">Room 1</option>
                                    <option value="2">Room 2</option>
                                    <option value="3">Room 3</option>
                                    <option value="4">Room 4</option>
                                    <option value="5">Room 5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-1">
                                  <label
                                    htmlFor="adults"
                                    className="form-label d-flex align-items-center gap-2"
                                  >
                                    <FaUser className="text-secondary" />
                                    Adults
                                  </label>
                                  <select
                                    className="form-select"
                                    id="adults"
                                    name="adults"
                                  >
                                    <option value="0">Adults</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-1">
                                  <label
                                    htmlFor="children"
                                    className="form-label d-flex align-items-center gap-2"
                                  >
                                    <FaBaby className="text-secondary" />
                                    Children
                                  </label>
                                  <select
                                    className="form-select"
                                    id="children"
                                    name="children"
                                  >
                                    <option value="0">Children</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 text-center">
                            <div className="availability-btn-wapper">
                              <button
                                className="bookstay px-4 py-2 m-1 rounded"
                                type="submit"
                              >
                                Check Now
                                <span className="ps-1 py-1 ">
                                  <RxArrowTopRight className="rightarrow" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing