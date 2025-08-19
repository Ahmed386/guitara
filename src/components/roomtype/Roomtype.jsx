



import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUser, FaBed, FaBath } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";

const Roomtype = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false, 
    });
  }, []);

  return (
    <div className="roomtype py-5">
      {/* Header */}
      <div
        className="roomtypeheader text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span className="fw-bold px-3 py-1 rounded bg-white">Room Type</span>
        <h1 className="mt-3">
          The Best Luxury Rooms And <br /> Suites
        </h1>
      </div>

      {/* Swiper */}
      <div className="container mt-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          speed={800}
          loop={true}
        >
          {data.map((room, index) => (
            <SwiperSlide key={index}>
              <div
                className="card border-0 scalrotate shadow-sm"
                style={{ backgroundColor: "#E8EFEB" }}
                data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                data-aos-delay="300"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.imgsrc}
                    alt={room.title}
                    className="card-img-top rounded-4"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#E8EFEB" }}
                >
                  <h5 className="card-title">{room.title}</h5>
                  <ul className="list-unstyled d-flex justify-content-between small text-muted mb-2">
                    <li>
                      <span className="px-1">
                        <FaUser className="swipicon" /> 2
                      </span>{" "}
                      {room.first}
                    </li>
                    <li>
                      <span className="px-1">
                        <FaBed className="swipicon" /> 2
                      </span>{" "}
                      {room.sec}
                    </li>
                    <li>
                      <span className="px-1">
                        <FaBath className="swipicon" /> 1
                      </span>{" "}
                      {room.third}
                    </li>
                  </ul>
                  <p className="card-text">{room.brief}</p>

                  <a className="bookstay bg-transparent readmore px-4 py-2 m-1 rounded">
                    {room.read}
                    <span className="ps-1 py-1">
                      <RxArrowTopRight className="rightarrow" />
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Roomtype;

const data = [
  {
    imgsrc: "/slider1.jpg",
    title: "Family Room",
    first: "Guests",
    sec: "Beds",
    third: "Bath",
    brief:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    read: "Read More",
  },
  {
    imgsrc: "/slider2.jpg",
    title: "Junior Room",
    first: "Guests",
    sec: "Beds",
    third: "Bath",
    brief:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    read: "Read More",
  },
  {
    imgsrc: "/slider3.jpg",
    title: "Single Room",
    first: "Guests",
    sec: "Beds",
    third: "Bath",
    brief:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    read: "Read More",
  },
  {
    imgsrc: "/slider4.jpg",
    title: "Deluxe Room",
    first: "Guests",
    sec: "Beds",
    third: "Bath",
    brief:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    read: "Read More",
  },
];
