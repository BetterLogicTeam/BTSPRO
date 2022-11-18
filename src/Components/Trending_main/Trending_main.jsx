import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { loadWeb3 } from '../../Api/api';
import Trending from '../Trending/Trending'

function Trending_main() {


  const [topSeller_data, settopSeller_data] = useState([])

  const fetchData = async () => {
    let acc = await loadWeb3()
    // acc = acc.toUpperCase()
    let Array_data = []


    let getUserAddress = await axios.get(' https://server.nftapi.online/trending_address_marketplace');
    // console.log("Api_Data121", getUserAddress.data.data);
    getUserAddress = getUserAddress?.data?.data
    let get_Length = getUserAddress?.length;
    // console.log("get_Length", get_Length);
    for (let i = 0; i < get_Length; i++) {
      let { User_Address } = getUserAddress[i]
      let res = await axios.get(`https://server.nftapi.online/sell_and_auction_history_address?useraddress=${User_Address}`)
  
      res=res.data.data
      // console.log("res_user", res);

      // "address": getUserAddress[i]?.useraddress,
      Array_data = [...Array_data, { useraddress: res.useraddress, itemId: res?.itemId, nftContract: res?.nftContract,tokenId:res.tokenId,owner:res.owner,price:res.price,sold:res.sold,isOnAuction:res.isOnAuction,bidEndTime:res.bidEndTime,name:res.name,url:res.url,txn:res.txn,category:res.category }]

      // console.log("res_user", Array_data);
      // settopSeller_data(Array_data)
    }



  };





  useEffect(() => {
    fetchData()
    // SecondArray()
  }, [])

  return (
    <div className='container-fluid mb-5 mt-5'>
      <div className="row px-3">
        <div className="col-lg-6 col-sm-12  ">   <p className='text-start live-fs'><b>Trending Artwork</b> </p></div>
        <div className="col-lg-6 col-sm-12  text-start text-md-end">  <button className='btn text-white '>Explore More</button></div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Trending photes1="trending-img1.jpg" photes2="trending-user1.jpg" photes3="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Trending photes1="trending-img2.jpg" photes2="trending-user2.jpg" photes3="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Trending photes1="trending-img3.jpg" photes2="trending-user3.jpg" photes3="" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Trending photes1="trending-img4.jpg" photes2="trending-user4.jpg" photes3="" />
        </div>
      </div>
    </div>
  )
}

export default Trending_main
