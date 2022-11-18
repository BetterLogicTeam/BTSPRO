import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Market_card from '../Market_card/Market_card'
import Market_pip from '../Market_pip/Market_pip'
import Market_side from '../Market_side/Market_side'
import "./Market_main.css"

function Market_main() {
  const [All_NFT, setAll_NFT] = useState([])
  const [onSale, setonSale] = useState(false)
  const [isSubscribed, setisSubscribed] = useState(false);
  const [Marketplace, setMarketplace] = useState("");
  const [category, setcategory] = useState("All")


  const get_All_NFT = async () => {
    try {
      // alert(isSubscribed)
      if(isSubscribed  &&  onSale  == true ){
       let Array=["Virtual Worlds","Domains"]
        let res = await axios.get(`https://server.nftapi.online/sell_and_auction_history?category=${category}`)
        setMarketplace("sell_and_auction_history")
        
        setAll_NFT(res?.data?.data)
        // setIsSatart(false)
      }else
      if (onSale == true) {

        let res = await axios.get(`https://server.nftapi.online/sell_marketplace_history?category=${category}`)
        setAll_NFT(res?.data?.data)
        setMarketplace("sell_marketplace_history")

        // setIsSatart(false)

      } else if(isSubscribed==true) {
        let res = await axios.get(`https://server.nftapi.online/OnAuction_marketplace_history?category=${category}`)
        setAll_NFT(res?.data?.data)
        setMarketplace("OnAuction_marketplace_history")

        // setIsSatart(false)

      }else {
        let res = await axios.get(`https://server.nftapi.online/sell_and_auction_history?category=${category}`)
        setAll_NFT(res?.data?.data)
        setMarketplace("sell_and_auction_history")


      }

    } catch (e) {
      console.log("Error While getAll_NFT", e);
    }
  }

  useEffect(() => {
    get_All_NFT()
  }, [onSale,isSubscribed,category])




  return (
    <>


      <div class="inner-banner inner-bg10 ">
        <div class="container">
          <div class="inner-title">
            <h3>Browse By Category</h3>
            <ul><li><Link to="/" className='text-white'>Home</Link></li><li><a href="/">MarketPlace</a></li></ul><div class="inner-shape">
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape1.png" alt="Images" />
              <img src="https://gible-nft.hibootstrap.com/images/inner-banner/inner-shape2.png" alt="Images" />
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='container-fluid'>

          <div className="row  ">
            <div className="col-lg-3 col-md-5 col-sm-12">
              <Market_side  setisSubscribed={setisSubscribed}  setonSale={setonSale} setcategory={setcategory} />
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12  ">
              <Market_pip length={All_NFT.length} />
              <div className="row  mt-4">
                {
                  All_NFT.map((items, index) => {
                    return (
                      <>
                        <div className="col-lg-4">

                          <Market_card img={items.url} img2={items.url} name={items.name} category={items.category} amount={items.price}
                            status={items.isOnAuction == 0 ? "Available for buying" : "Available for bidding"} btn={items.isOnAuction == 0 ? "Buy" : "Bid Now"}
                            isOnAuction={items.isOnAuction } bidEndTime={items.bidEndTime} history={items.isOnAuction == 0 ? `/Market_place2/${index}/0/${Marketplace}` : `/Market_place2/${index}/1/${Marketplace}`}


                          />
                        </div>

                      </>

                    )
                  })
                }




              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Market_main
