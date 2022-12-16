import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "./Live_auction_main.css";

// import required modules
import { Pagination } from "swiper";
import Live_oction from '../Live_oction/Live_oction';
import axios from 'axios';
import Market_card from '../Market_card/Market_card';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


function Live_auction_main() {
  const [Auction_Array, setAuction_Array] = useState()
  const [IsSpinner, setIsSpinner] = useState(false)

  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress).toUpperCase()
  }
  
  const Auction_Api = async () => {
    try {

      let res = await axios.get('https://server.nftapi.online/OnAuction_marketplace_history?category=All')
      res = res?.data?.data
   
      setAuction_Array(res)

    } catch (e) {
      console.log("Error In Auction API", e);
    }
  }


  useEffect(() => {
    Auction_Api()
  }, [])


  return (<>
    <div class="auctions-area ">
      <div class="container">
      {
            IsSpinner ? <Loading /> : <></>

          }
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-8">
            <div class="section-title">
              <h2>Live Auctions</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="auction-btn text-end">
              <Link to="/market_place">

              <a class="default-btn border-radius-5" >Explore More</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {
            Auction_Array?.slice(0,4)?.map((items, index) => {
              return (
                <>
                  <div class="col-lg-3 col-md-6" >

                    <Market_card img={items.url} img2={items.url} name={items.name} category={items.category} amount={items.price}
                      status={items.isOnAuction == 0 ? "Available for buying" : "Available for bidding"} btn={items.isOnAuction == 1 ? "Bid Now": items.useraddress.toUpperCase() == metaAddress.toUpperCase() ?  "Claim Now": "Buy"  }
                      isOnAuction={items.isOnAuction} bidEndTime={items.bidEndTime} history={items.isOnAuction == 0 ? `/Market_place2/${index}/0/OnAuction_marketplace_history/address` : `/Market_place2/${index}/1/OnAuction_marketplace_history/address`}
                      data={items} setIsSpinner={setIsSpinner} Blockchain={items.Blockchain}

                    />

                  </div>

                </>
              )
            })
          }
        </div>


      </div>
    </div>

  
  </>
  )
}

export default Live_auction_main
