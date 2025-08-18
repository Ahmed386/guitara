import React from 'react'

const Staff = () => {
  return (
    <>
      <div className="staff py-5">
        <div className="container-fluid px-2">
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <div className="overflow-hidden cardtopwrapper">
                  <img src="staff-2.jpg" className="card-img-top" alt="staff" />
                </div>
                <div className="card-body">
                  <h5>Michael Dean</h5>
                  <p className="card-text text-black-50 ps-3 ">Chef Master</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <div className="overflow-hidden cardtopwrapper">
                  <img src="staff-1.jpg" className="card-img-top" alt="staff" />
                </div>
                <div className="card-body">
                  <h5>Michael Dean</h5>
                  <p className="card-text text-black-50 ps-3 ">Chef Master</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <div className="overflow-hidden cardtopwrapper">
                  <img src="staff-2.jpg" className="card-img-top" alt="staff" />
                </div>
                <div className="card-body">
                  <h5>Arnold Taylor</h5>
                  <p className="card-text text-black-50 ps-3 ">Room Cleane</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <div className="overflow-hidden cardtopwrapper">
                  <img src="staff-4.jpg" className="card-img-top" alt="staff" />
                </div>
                <div className="card-body">
                  <h5>Michael Dean</h5>
                  <p className="card-text text-black-50 ps-3 ">Chef Master</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff