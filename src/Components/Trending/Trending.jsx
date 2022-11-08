
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Trending.css';
import trending_1 from "../../Assets/trending_1.jpg";
import trending_2 from "../../Assets/trending_2.jpg";
import trending_3 from "../../Assets/trending_3.jpg";
import trending_4 from "../../Assets/trending_4.jpg";
import trending_5 from "../../Assets/trending_5.jpg";
import trending_user1 from "../../Assets/trending_user1.jpg";
import trending_user2 from "../../Assets/trending_user2.jpg";
import trending_user3 from "../../Assets/trending_user3.jpg";
import trending_user4 from "../../Assets/trending_user4.jpg";
import trending_user5 from "../../Assets/trending_user5.jpg";
import { AiOutlineHeart } from "react-icons/ai";




function Trending() {
  return (
    <div>
        <div className="trending_main">
            <div className="container">
            <div className="trending_title">
            <div class="row">
                <div class="col-lg-8 col-md-7">
                    <div class="section-title">
                        <h2>Trending Artwork</h2>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-5">
                            <div class="trending-btn text-end">
                                <a class="default-btn border-radius-5" href="/item-details">Explore More</a>
                                </div>
                                </div>
                                </div>
            </div>
            </div>
            <div className="container">
            <div className="trending_swiper">
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                  },
              }}
             navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div class="owl-item active" style={{width: "300px"}}>
            <div class="trending-item">
                <div class="trending-img">
                    <a href="/item-details">
                        <img src={trending_1} alt="Images"/></a>
                        <div class="trending-user">
                            <a class="trending-user-option" href="/author-profile">
                                <img src={trending_user1} alt="Images"/>
                                <span>Created by @Anvi</span></a>
                                </div>
                                <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                <div class="trending-title"><span>110 ETH 12/14</span><h3>Bid 90 ETH</h3>
                                </div>
                                </div>
                                <div class="content">
                                    <h3><a href="/item-details">Industrial Revolution</a></h3>
                                    <span><AiOutlineHeart /> 365</span>
                                    </div>
                                    </div>
                                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "300px"}}>
            <div class="trending-item">
                <div class="trending-img">
                    <a href="/item-details">
                        <img src={trending_2} alt="Images"/></a>
                        <div class="trending-user">
                            <a class="trending-user-option" href="/author-profile">
                                <img src={trending_user2} alt="Images"/>
                                <span>Created by @Anvi</span></a>
                                </div>
                                <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                <div class="trending-title"><span>110 ETH 12/14</span><h3>Bid 90 ETH</h3>
                                </div>
                                </div>
                                <div class="content">
                                    <h3><a href="/item-details">Industrial Revolution</a></h3>
                                    <span><AiOutlineHeart /> 365</span>
                                    </div>
                                    </div>
                                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "300px"}}>
            <div class="trending-item">
                <div class="trending-img">
                    <a href="/item-details">
                        <img src={trending_3} alt="Images"/></a>
                        <div class="trending-user">
                            <a class="trending-user-option" href="/author-profile">
                                <img src={trending_user3} alt="Images"/>
                                <span>Created by @Anvi</span></a>
                                </div>
                                <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                <div class="trending-title"><span>110 ETH 12/14</span><h3>Bid 90 ETH</h3>
                                </div>
                                </div>
                                <div class="content">
                                    <h3><a href="/item-details">Industrial Revolution</a></h3>
                                    <span><AiOutlineHeart /> 365</span>
                                    </div>
                                    </div>
                                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "300px"}}>
            <div class="trending-item">
                <div class="trending-img">
                    <a href="/item-details">
                        <img src={trending_4} alt="Images"/></a>
                        <div class="trending-user">
                            <a class="trending-user-option" href="/author-profile">
                                <img src={trending_user4} alt="Images"/>
                                <span>Created by @Anvi</span></a>
                                </div>
                                <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                <div class="trending-title"><span>110 ETH 12/14</span><h3>Bid 90 ETH</h3>
                                </div>
                                </div>
                                <div class="content">
                                    <h3><a href="/item-details">Industrial Revolution</a></h3>
                                    <span><AiOutlineHeart /> 365</span>
                                    </div>
                                    </div>
                                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="owl-item active" style={{width: "300px"}}>
            <div class="trending-item">
                <div class="trending-img">
                    <a href="/item-details">
                        <img src={trending_5} alt="Images"/></a>
                        <div class="trending-user">
                            <a class="trending-user-option" href="/author-profile">
                                <img src={trending_user5} alt="Images"/>
                                <span>Created by @Anvi</span></a>
                                </div>
                                <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                <div class="trending-title"><span>110 ETH 12/14</span><h3>Bid 90 ETH</h3>
                                </div>
                                </div>
                                <div class="content">
                                    <h3><a href="/item-details">Industrial Revolution</a></h3>
                                    <span><AiOutlineHeart /> 365</span>
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

export default Trending



// breakpoints={{
//             300: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 70,
//             },
//           }}