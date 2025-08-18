import React from 'react'
import { FaCheck } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-sm-12">
              <div className="aboutusleftimg position-relative">
                <img src="/hotelhall.jpg" className="w-100 rounded-4" alt="" />

                <div className="circleimage text-center">
                  <img src="/wordspinner.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="aboutusrightcontent  py-5">
                <span className="fw-bold px-3 py-1 rounded bg-white">
                  About Fixyland
                </span>
                <h1>World Class Luxury Hotel and Resort Near City</h1>
                <p className="mt-3 text-black-50  lh-2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even
                </p>
              </div>

              <div className="row ">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="about-list">
                    <ul className="check-list">
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        24 -Hours Emergency Serv
                      </li>
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        Comfortable Atmosphere
                      </li>
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        Something by accident
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-list">
                    <ul className="check-list">
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        It is a Long Established fact
                      </li>
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        Flexible and Cost-Effective
                      </li>
                      <li>
                        <span className="check">
                          <FaCheck className="checkicon" />
                        </span>
                        Get Free Consultation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="d-flex px-4 mt-3" data-wow-delay="0.5s">
                <div className="about-user me-3">
                  <img src="/user.png" className="w-100" alt="user" />
                </div>
                <div className="about-author-description">
                  <h5 className="text-black m-0 p-0">Robert L. Robinson</h5>
                  <span className="text-black-50">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus