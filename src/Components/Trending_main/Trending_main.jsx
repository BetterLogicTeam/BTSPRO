import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Market_card from '../Market_card/Market_card';

function Trending_main() {
  const [IsSpinner, setIsSpinner] = useState(false)

  let metaAddress = sessionStorage.getItem("meta-address");
  if (metaAddress) {
    metaAddress = JSON.parse(metaAddress).toUpperCase()
  }

  const [Tranding_NFTs, setTranding_NFTs] = useState([])

  const fetchData = async () => {
 
    let getUserAddress = await axios.get('https://server.nftapi.online/get_trending_NFTs');
    console.log(getUserAddress.data.data)
    if (getUserAddress.data.data == null) {

    } else {

      setTranding_NFTs(getUserAddress.data.data)
    }

  };





  useEffect(() => {
 
    fetchData()
    // SecondArray()
  }, [])

  return (
    <div className='container mb-5 mt-5' >
      <div className='d-flex justify-content-between'>
        <h2 className='Top_seller_main_heading'>
          Trending Artwork
        </h2>


        {/* <button className='explore_btn'>Explore More</button> */}
      </div>

      <div>
     
    </div>
      <div className="row mt-5">
        {
          Tranding_NFTs.map((items, index) => {
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Market_card img={items.url} img2={items.url} name={items.name} category={items.category} amount={items.price}
                    status={items.isOnAuction == 0 ? "Available for buying" : "Available for bidding"} btn={items.isOnAuction == 1 ? "Bid Now": items.useraddress.toUpperCase() == metaAddress.toUpperCase() ?  "Claim Now": "Buy"  }
                    isOnAuction={items.isOnAuction} bidEndTime={items.bidEndTime} history={items.isOnAuction == 0 ? `/Market_place2/${index}/0/OnAuction_marketplace_history/tranding` : `/Market_place2/${index}/1/OnAuction_marketplace_history/tranding`}
                    data={items} setIsSpinner={setIsSpinner} Blockchain={items.Blockchain}

                  />
                </div>

              </>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Trending_main
