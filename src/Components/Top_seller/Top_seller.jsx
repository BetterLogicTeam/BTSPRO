import React, { useEffect, useState } from 'react';
import top_sellers1 from "../../Assets/top_sellers1.jpg";
import top_sellers2 from "../../Assets/top_sellers2.jpg";
import top_sellers3 from "../../Assets/top_sellers3.jpg";
import top_sellers4 from "../../Assets/top_sellers4.jpg";
import top_sellers5 from "../../Assets/top_sellers5.jpg";
import top_sellers6 from "../../Assets/top_sellers6.jpg";
import top_sellers7 from "../../Assets/top_sellers7.jpg";
import top_sellers8 from "../../Assets/top_sellers8.jpg";
import top_sellers9 from "../../Assets/top_sellers9.jpg";
import top_sellers10 from "../../Assets/top_sellers10.jpg";
import top_sellers11 from "../../Assets/top_sellers11.jpg";
import top_sellers12 from "../../Assets/top_sellers12.jpg";
import { TiTick } from "react-icons/ti";
import "./Top_seller.css"
import axios from 'axios';
import { loadWeb3 } from '../../Api/api';
import { useNavigate } from 'react-router-dom';




function Top_seller() {
    const history=useNavigate()
    const [topSeller_data, settopSeller_data] = useState([])

    const fetchData = async () => {
        let acc = await loadWeb3()
        // acc = acc.toUpperCase()
        let Array_data = []


        let getUserAddress = await axios.get(' https://server.nftapi.online/trending_address_marketplace');
        console.log("Api_Data121", getUserAddress.data.data);
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
        // SecondArray()
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
                        topSeller_data.map((items, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4" onClick={() => history("/Seller_Details/" + index)} style={{cursor:"pointer"}}>
                                        <div className="top_seller_items">
                                            <div className="numberr">{index+1}.</div>
                                            <div>
                                                <img src={`https://server.nftapi.online/uploads/${items.image}`} className='top_seller_seller_img' alt="" />
                                            </div>
                                            <div className="top_seller_content">
                                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link' onClick={() => history("/Seller_Details/" + index)}>{items?.name}</a></h3>
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