import React, { useEffect, useState } from 'react';
import "./Top_seller.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Top_seller() {
    const history=useNavigate()
    const [topSeller_data, settopSeller_data] = useState([])

    const fetchData = async () => {
        let Array_data = []
        let getUserAddress = await axios.get(' https://server.nftapi.online/trending_address_marketplace');
        // console.log("Api_Data121", getUserAddress.data.data);
        getUserAddress = getUserAddress?.data?.data
        let get_Length = getUserAddress?.length;
        // console.log("get_Length", get_Length);
        for (let i = 0; i < get_Length; i++) {
            let { User_Address } = getUserAddress[i]
            let res = await axios.get(`https://server.nftapi.online/get_user_profile?address=${User_Address.toUpperCase()}`)
            // console.log("Api_Data121", res);

            // "address": getUserAddress[i]?.useraddress,
            Array_data = [...Array_data, { name: res?.data?.data?.username, image: res?.data?.data?.image, address: res?.data?.data?.address }]

            // console.log("res_user", res);
            settopSeller_data(Array_data)
        }



    };





    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='top_seller_main_bg '>


            <div className="container">
                <div className="row justify-content-between">

                    <div className='d-flex justify-content-between'>
                        <h2 className='Top_seller_main_heading'>
                            Top Sellers
                        </h2>


                        {/* <button className='explore_btn'>Explore More</button> */}
                    </div>

                </div>
                <div className="row mt-5    ">
                    {
                        topSeller_data.slice(0,4).map((items, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4" onClick={() => history("/Seller_Details/" + index)} style={{cursor:"pointer"}}>
                                        <div className="top_seller_items">
                                            <div className="numberr">{index+1}.</div>
                                            <div>
                                                <img src={`https://server.nftapi.online/uploads/${items.image}`} className='top_seller_seller_img' alt="" />
                                            </div>
                                            <div className="top_seller_content">
                                                <h3 className='top_seller_name'><a  className='top_seller_name_link' onClick={() => history("/Seller_Details/" + index)}>{items?.name}</a></h3>
                                                <span className='top_seller_span'>{items.address?.substring(0, 4) + "..." + items.address?.substring(items.address?.length - 4)}</span>


                                            </div>

                                        </div>


                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Top_seller