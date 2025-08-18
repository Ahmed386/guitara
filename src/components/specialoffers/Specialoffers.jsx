import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";


const Specialoffers = () => {
  return (
    <>
      <div className="specialoffers ">
        <div className="text-center mb-5 specialoffersheader">
          <span className="fw-bold px-3 py-1 rounded bg-white">
            Special Offers
          </span>
          <h1 className="fw-bolder mt-4">
            Special Discount for Hotel & <br /> Resort Booking
          </h1>
        </div>

        <div className="container-fluid px-3">
          <div className="row">
            <div className=" col-md-6 col-sm-12 offerwrapper ">
              <div className="position-relative dance">
                <img src="/view1.png" className="w-100 rounded-4" alt="" />
                <div className="layer start-0 end-0 bottom-0 top-0 position-absolute rounded-4 justify-content-center align-items-center d-flex">
                  <div className="offercont text-start w-75">
                    <span className="border rounded px-2 py-1 off">
                      30% off
                    </span>
                    <h1 className="mt-3 fw-bolder">
                      Get 30% Off on Hotel <br /> Booking
                    </h1>
                    <button
                      className="bookstay px-4 py-3 mt-3 rounded"
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
            </div>
            <div className=" col-md-6 col-sm-12 offerwrapper ">
              <div className="position-relative dance">
                <img src="/view2.png" className="w-100 rounded-4" alt="" />
                <div className="layer start-0 end-0 bottom-0 top-0 position-absolute rounded-4 justify-content-center align-items-center d-flex">
                  <div className="offercont text-start w-75">
                    <span className="border rounded px-2 py-1 off">
                      35% off
                    </span>
                    <h1 className="mt-3 fw-bolder">
                      Get 35% Off on Hotel <br /> Booking
                    </h1>
                    <button
                      className="bookstay px-4 py-3 mt-3 rounded"
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
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Specialoffers