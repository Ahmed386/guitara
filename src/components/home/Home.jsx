


// import React, { useState, useEffect } from "react";

// import Footer from "../footer/Footer";
// import Loader from './../loading/Loader';
import Aboutus from '../aboutUs/Aboutus';
import Food from '../foodanddrink/Food';
import Footer from '../Footer/Footer';
import Hotelservices from '../hotelServices/Hotelservices';
import Roomtype from '../roomtype/Roomtype';
import Showup from '../showup/Showup';
import Specialoffers from '../specialoffers/Specialoffers';
import Staff from '../staff/Staff';
import Stickers from '../stickers/Stickers';
import Testmonials from '../testmonials/Testmonials';
import Videosection from '../youtubevideo/Videosection';
import Landing from './../landingPage/Landing';

const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     //Loader
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // 1.5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   }

  return (
    <>
      <Landing />
      <Aboutus />
      <Roomtype />
      <Hotelservices />
      <Videosection />
      <Food />
      <Specialoffers />
      <Testmonials />
      <Staff />
      <Stickers />
      <Showup />
      <Footer />
    </>
  );
};

export default Home;
