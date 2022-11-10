import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Live_auction_main.css";

// import required modules
import { Pagination } from "swiper";
import Live_oction from '../Live_oction/Live_oction';
function Live_auction_main() {
  return (
    <div className='live-back pt-3 pb-5'> 
      <div className="live  container-fluid mt-5">
        <div className="row px-3">
          <div className="col-lg-6 col-sm-12  ">   <p className='text-start live-fs'><b>Live Auctions</b> </p></div>
          <div className="col-lg-6 col-sm-12  text-start text-md-end">  <button className='btn text-white '>Explore More</button></div>
        </div>
     
      
      </div>
        <div className='d-none d-lg-block' >
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Live_oction image1="auctions-img.jpg" image="auctions-user3.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img2.jpg" image="auctions-user2.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img3.jpg" image="auctions-user1.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img4.jpg" image="auctions-user4.jpg"/></SwiperSlide>
       
        
      </Swiper>
    </>
    
    </div>
    <div className='d-none d-md-block d-lg-none' >
      <>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Live_oction image1="auctions-img.jpg" image="auctions-user3.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img2.jpg" image="auctions-user2.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img3.jpg" image="auctions-user1.jpg"/></SwiperSlide>
        <SwiperSlide><Live_oction image1="auctions-img4.jpg" image="auctions-user4.jpg"/></SwiperSlide>
       
        
      </Swiper>
    </>
    
    </div>
    {/* <div className="container-fluid d-block d-md-none">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Live_oction image1="auctions-img.jpg" image="auctions-user3.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Live_oction image1="auctions-img2.jpg" image="auctions-user2.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Live_oction image1="auctions-img3.jpg" image="auctions-user1.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Live_oction image1="auctions-img4.jpg" image="auctions-user4.jpg"/>
            </div>
        </div></div> */}

    <div className="d-block d-md-none">
    <Live_oction image1="auctions-img.jpg" image="auctions-user3.jpg"/>
    <Live_oction image1="auctions-img2.jpg" image="auctions-user2.jpg"/>
    <Live_oction image1="auctions-img3.jpg" image="auctions-user1.jpg"/>
    <Live_oction image1="auctions-img4.jpg" image="auctions-user4.jpg"/>
    </div>
    </div>
  )
}

export default Live_auction_main
