import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination } from "swiper";
import { BiRightArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import auction_1 from "../../Assets/auction_1.jpg";
import auction_2 from "../../Assets/auction_2.jpg";
import auction_3 from "../../Assets/auction_3.jpg";
import auction_4 from "../../Assets/auction_4.jpg";
import auction_user1 from "../../Assets/auction_user1.jpg";
import auction_user2 from "../../Assets/auction_user2.jpg";
import auction_user3 from "../../Assets/auction_user3.jpg";
import auction_user4 from "../../Assets/auction_user4.jpg";
import "./Auction.css"


function Auction() {
  return (
    <div>
        <div className="auctions-area pb-100">
            <div className="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-8">
                    <div class="section-title">
                        <h2>Live Auctions</h2>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="auction-btn text-end">
                                <a class="default-btn border-radius-5" href="/auction">Explore More</a>
                                </div>
                                </div>
                                </div>
                <div className='auctions-slider owl-theme pt-45'>
                <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="owl-item active" style={{width: "422px"}}>
            <div class="auction-item">
                <div class="auction-item-img">
                    <a href="/auction">
                        <img src={auction_1} alt="Images"/>
                        </a>
                        <div class="auction-item-content">
                            <div class="auction-left">
                                <span>Start Bid</span>
                                <h3>16,00 ETH</h3>
                                </div>
                                <div class="auction-right">
                                    <h3>Bid 90 ETH</h3>
    <div class="auction-text" data-countdown="2021/11/11">
        </div>
        </div>
        </div>
        </div>
        <div class="content">
            <div class="auction-item-list">
                <div class="auction-item-list-img">
    <a href="/author-profile">
        <img src={auction_user1} alt="Images"/>
        </a>
        <i class="ri-check-line"><TiTick/></i>
        </div>
        <h3><a href="/author-profile">Industrial Revolution</a></h3>
        <span>Created by<a href="/author-profile">@Julian</a></span>
        </div>
        <a class="auction-item-btn" href="/author-profile">
            <i class="ri-arrow-right-line"><BiRightArrowAlt /></i>
            </a>
            <button type="button" class="default-btn border-radius-5">Place Bid</button>
            </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "422px"}}>
            <div class="auction-item">
                <div class="auction-item-img">
                    <a href="/auction">
                        <img src={auction_2} alt="Images"/>
                        </a>
                        <div class="auction-item-content">
                            <div class="auction-left">
                                <span>Start Bid</span>
                                <h3>16,00 ETH</h3>
                                </div>
                                <div class="auction-right">
                                    <h3>Bid 90 ETH</h3>
    <div class="auction-text" data-countdown="2021/11/11">
        </div>
        </div>
        </div>
        </div>
        <div class="content">
            <div class="auction-item-list">
                <div class="auction-item-list-img">
    <a href="/author-profile">
        <img src={auction_user2} alt="Images"/>
        </a>
        <i class="ri-check-line"><TiTick/></i>
        </div>
        <h3><a href="/author-profile">Industrial Revolution</a></h3>
        <span>Created by<a href="/author-profile">@Julian</a></span>
        </div>
        <a class="auction-item-btn" href="/author-profile">
            <i class="ri-arrow-right-line"><BiRightArrowAlt /></i>
            </a>
            <button type="button" class="default-btn border-radius-5">Place Bid</button>
            </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "422px"}}>
            <div class="auction-item">
                <div class="auction-item-img">
                    <a href="/auction">
                        <img src={auction_3} alt="Images"/>
                        </a>
                        <div class="auction-item-content">
                            <div class="auction-left">
                                <span>Start Bid</span>
                                <h3>16,00 ETH</h3>
                                </div>
                                <div class="auction-right">
                                    <h3>Bid 90 ETH</h3>
    <div class="auction-text" data-countdown="2021/11/11">
        </div>
        </div>
        </div>
        </div>
        <div class="content">
            <div class="auction-item-list">
                <div class="auction-item-list-img">
    <a href="/author-profile">
        <img src={auction_user3} alt="Images"/>
        </a>
        <i class="ri-check-line"><TiTick/></i>
        </div>
        <h3><a href="/author-profile">Industrial Revolution</a></h3>
        <span>Created by<a href="/author-profile">@Julian</a></span>
        </div>
        <a class="auction-item-btn" href="/author-profile">
            <i class="ri-arrow-right-line"><BiRightArrowAlt /></i>
            </a>
            <button type="button" class="default-btn border-radius-5">Place Bid</button>
            </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "422px"}}>
            <div class="auction-item">
                <div class="auction-item-img">
                    <a href="/auction">
                        <img src={auction_4} alt="Images"/>
                        </a>
                        <div class="auction-item-content">
                            <div class="auction-left">
                                <span>Start Bid</span>
                                <h3>16,00 ETH</h3>
                                </div>
                                <div class="auction-right">
                                    <h3>Bid 90 ETH</h3>
    <div class="auction-text" data-countdown="2021/11/11">
        </div>
        </div>
        </div>
        </div>
        <div class="content">
            <div class="auction-item-list">
                <div class="auction-item-list-img">
    <a href="/author-profile">
        <img src={auction_user4} alt="Images"/>
        </a>
        <i class="ri-check-line"><TiTick/></i>
        </div>
        <h3><a href="/author-profile">Industrial Revolution</a></h3>
        <span>Created by<a href="/author-profile">@Julian</a></span>
        </div>
        <a class="auction-item-btn" href="/author-profile">
            <i class="ri-arrow-right-line"><BiRightArrowAlt /></i>
            </a>
            <button type="button" class="default-btn border-radius-5">Place Bid</button>
            </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auction