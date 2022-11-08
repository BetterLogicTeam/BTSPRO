import React from 'react';
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




function Top_seller() {
  return (
    <div className='top_seller_main_bg '>
        {/* <div class="top-sellers-area pb-70 undefined">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        <div class="section-title">
                            <h2>Top Sellers</h2>
                            </div></div><div class="col-lg-4 col-md-5">
                                <div class="trending-btn text-end">
                                    <a class="default-btn border-radius-5" href="/author">Explore More</a>
                                    </div></div></div>
                                    <div class="row justify-content-center pt-45">
                                        <div class="col-lg-3 col-6 col-md-4">
                                            <div class="top-sellers-item">
                                                <div class="number">1.</div>
                                                <div class="top-sellers-img">
                                                    <a href="/author-profile">
                                                        <img src={top_sellers1} alt="Images"/></a>
                                                        <i class="ri-check-line"><TiTick /></i></div>
                                                        <div class="content">
                                                            <h3><a href="/author-profile">Benjamin Doe</a>
                                                            </h3>
                                                            <span>129.301 ETH</span>
                                                            </div></div></div>
                                                            <div class="col-lg-3 col-6 col-md-4">
<div class="top-sellers-item">
    <div class="number">2.</div>
    <div class="top-sellers-img">
        <a href="/author-profile">
            <img src={top_sellers2} alt="Images"/>
                 </a>
                 <i class="ri-check-line"><TiTick /></i>
                </div><div class="content">
                    <h3><a href="/author-profile">Evelyn Adison</a></h3>
                    <span>130.201 ETH</span></div></div></div>
                    <div class="col-lg-3 col-6 col-md-4">
                        <div class="top-sellers-item">
                            <div class="number">3.</div>
                            <div class="top-sellers-img">
                                <a href="/author-profile">
                                     <img src={top_sellers3} alt="Images"/></a>
                                     <i class="ri-check-line"><TiTick /></i></div>
                                    <div class="content">
 <h3><a href="/author-profile">Aria July</a></h3>
 <span>120.101 ETH</span></div></div></div>
<div class="col-lg-3 col-6 col-md-4">
    <div class="top-sellers-item">
         <div class="number">4.</div>
         <div class="top-sellers-img">
            <a href="/author-profile">
                <img src={top_sellers4} alt="Images"/></a>
                <i class="ri-check-line"><TiTick /></i></div>
                <div class="content">
                    <h3><a href="/author-profile">Aria July</a></h3>
                    <span>124.101 ETH</span></div></div></div>
                    <div class="col-lg-3 col-6 col-md-4">
                        <div class="top-sellers-item">
                            <div class="number">5.</div>
                            <div class="top-sellers-img">
                                <a href="/author-profile">
<img src={top_sellers5} alt="Images"/></a>
<i class="ri-check-line"><TiTick /></i>
</div><div class="content">
    <h3><a href="/author-profile">Sebastian Farnil</a></h3>
    <span>127.301 ETH</span>
    </div></div></div>
    <div class="col-lg-3 col-6 col-md-4">
        <div class="top-sellers-item">
            <div class="number">6.</div>
            <div class="top-sellers-img">
                 <a href="/author-profile">
                     <img src={top_sellers6} alt="Images"/></a>
                     <i class="ri-check-line"><TiTick /></i></div>
                    <div class="content">
                         <h3><a href="/author-profile">Henry Martina</a></h3>
                         <span>128.301 ETH</span>
                        </div></div></div>
                        <div class="col-lg-3 col-6 col-md-4">
<div class="top-sellers-item">
     <div class="number">7.</div>
    <div class="top-sellers-img">
        <a href="/author-profile">
             <img src={top_sellers7} alt="Images"/></a>
             <i class="ri-check-line"><TiTick /></i>
            </div><div class="content">
                 <h3><a href="/author-profile">Daniel Adams</a></h3>
                 <span>130.301 ETH</span>
                </div>
                </div>
                </div>
                <div class="col-lg-3 col-6 col-md-4">
                    <div class="top-sellers-item">
                        <div class="number">8.</div>
                        <div class="top-sellers-img">
<a href="/author-profile">
    <img src={top_sellers8} alt="Images"/>
    </a>
    <i class="ri-check-line"><TiTick /></i>
    </div>
    <div class="content">
         <h3>
             <a href="/author-profile">Julian Rin</a>
             </h3>
             <span>120.201 ETH</span>
             </div>
             </div>
             </div>
             <div class="col-lg-3 col-6 col-md-4">
 <div class="top-sellers-item">
    <div class="number">9.</div>
    <div class="top-sellers-img">
        <a href="/author-profile">
             <img src={top_sellers9} alt="Images"/>
             </a>
             <i class="ri-check-line"><TiTick /></i>
             </div>
             <div class="content">
                 <h3>
                     <a href="/author-profile">Samuel Anvi</a>
                     </h3>
                     <span>130.201 ETH</span>
                     </div>
                     </div>
                    </div>
                     <div class="col-lg-3 col-6 col-md-4">
                        <div class="top-sellers-item">
 <div class="number">10.</div>
 <div class="top-sellers-img">
     <a href="/author-profile">
         <img src={top_sellers10} alt="Images"/>
         </a>
         <i class="ri-check-line"><TiTick /></i>
         </div>
        <div class="content">
             <h3><a href="/author-profile">Emilia Adison</a></h3>
             <span>124.201 ETH</span>
             </div>
             </div>
             </div>
 <div class="col-lg-3 col-6 col-md-4">
    <div class="top-sellers-item">
        <div class="number">11.</div>
        <div class="top-sellers-img">
             <a href="/author-profile">
                 <img src={top_sellers11} alt="Images"/>
                </a>
                 <i class="ri-check-line"><TiTick /></i>
                 </div>
                 <div class="content">
                    <h3><a href="/author-profile">Muhammad Ali</a></h3>
                     <span>127.201 ETH</span>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-6 col-md-4">
                        <div class="top-sellers-item">
                            <div class="number">12.</div>
 <div class="top-sellers-img">
     <a href="/author-profile">
         <img src={top_sellers12} alt="Images"/>
         </a>
         <i class="ri-check-line"><TiTick /></i>
         </div>
        <div class="content">
            <h3>
                 <a href="/author-profile">Alexander Luis</a>
                 </h3>
                 <span>129.201 ETH</span>
                 </div>
                 </div>
                  </div>
                  </div>
                 </div>
                </div> */}

                <div className="container">
                    <div className="row justify-content-between">

                      <div className='d-flex justify-content-between'>
                            <h2 className='Top_seller_main_heading'>
                            Top Sellers
                            </h2>
                      
                      
                               <button className='explore_btn'>Explore More</button>
                               </div>
                 
                    </div>
                    <div className="row mt-5    ">
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">1.</div>
                                <div>
                                    <img src={top_sellers1} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">2.</div>
                                <div>
                                    <img src={top_sellers2} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Evelyn Adison</a></h3>
                                <span className='top_seller_span'>130.201 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">3.</div>
                                <div>
                                    <img src={top_sellers3} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Aria July</a></h3>
                                <span className='top_seller_span'>20.101 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">4.</div>
                                <div>
                                    <img src={top_sellers1} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="row mt-5    ">
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">5.</div>
                                <div>
                                    <img src={top_sellers5} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">6.</div>
                                <div>
                                    <img src={top_sellers6} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Evelyn Adison</a></h3>
                                <span className='top_seller_span'>130.201 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">7.</div>
                                <div>
                                    <img src={top_sellers7} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Aria July</a></h3>
                                <span className='top_seller_span'>20.101 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">8.</div>
                                <div>
                                    <img src={top_sellers8} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="row mt-5    ">
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">9.</div>
                                <div>
                                    <img src={top_sellers9} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">10.</div>
                                <div>
                                    <img src={top_sellers10} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Evelyn Adison</a></h3>
                                <span className='top_seller_span'>130.201 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">11.</div>
                                <div>
                                    <img src={top_sellers12} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Aria July</a></h3>
                                <span className='top_seller_span'>20.101 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="top_seller_items">
                                <div className="numberr">12.</div>
                                <div>
                                    <img src={top_sellers11} className='top_seller_seller_img' alt="" />
                                </div>
                                <div className="top_seller_content">
                                <h3 className='top_seller_name'><a href="/" className='top_seller_name_link'>Benjamin Doe</a></h3>
                                <span className='top_seller_span'>129.301 ETH</span>

                                    
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Top_seller