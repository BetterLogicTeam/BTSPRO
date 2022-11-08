import React from 'react';
import featured_1 from "../../Assets/featured_1.jpg";
import featured_2 from "../../Assets/featured_2.jpg";
import featured_3 from "../../Assets/featured_3.jpg";
import featured_4 from "../../Assets/featured_4.jpg";
import featured_5 from "../../Assets/featured_5.jpg";
import featured_6 from "../../Assets/featured_6.jpg";
import featured_7 from "../../Assets/featured_7.jpg";
import featured_8 from "../../Assets/featured_8.jpg";
import featured_user1 from "../../Assets/featured_user1.jpg";
import featured_user2 from "../../Assets/featured_user2.jpg";
import featured_user3 from "../../Assets/featured_user3.jpg";
import featured_user4 from "../../Assets/featured_user4.jpg";
import featured_user5 from "../../Assets/featured_user5.jpg";
import featured_user6 from "../../Assets/featured_user6.jpg";
import featured_user7 from "../../Assets/featured_user7.jpg";
import featured_user8 from "../../Assets/featured_user8.jpg";
import { AiOutlineHeart } from "react-icons/ai";


function Featured() {
  return (
    <div>
        <div className='featured-area pt-100 pb-70'>
            <div className="container">
                <div className='tab featured-tab-area'>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-4">
                        <div class="section-title">
                            <h2>Featured Assets</h2>
                            </div>
                            </div>
                            </div>
                            <div class="react-tabs" data-tabs="true">
                                <div class="col-lg-6 col-md-8">
                                    <ul class="tabs">
                                        <ul class="react-tabs__tab-list" role="tablist">
                                            <li class="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-0" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-1" tabindex="0"><a>All</a></li>
                                            <li class="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3"><a>Art</a></li>
                                            <li class="react-tabs__tab" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5"><a>Virtual Worlds</a></li>
                                            <li class="react-tabs__tab" role="tab" id="react-tabs-6" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-7"><a>Collectibles</a></li>
                                            {/* <li class="react-tabs__tab" role="tab" id="react-tabs-8" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-9"><a>Music</a></li> */}
                                            </ul>
                                            </ul>
                                            </div>
                                            <div class="tab_content  pt-45">
                                                <div class="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
                                                    <div class="tabs_item">
                                                        <div class="row justify-content-center">
                                                            <div class="col-lg-3 col-md-6">
                                                                <div class="featured-item">
                                                                    <div class="featured-item-img">
                                                                        <a href="/item-details">
                                                                            <img src={featured_1} alt="Images"/>
                                                                            </a>
                                                                            <div class="featured-user">
                                                                                <a class="featured-user-option" href="/author-profile">
                                                                                    <img src={featured_user1} alt="Images"/>
                                                                                    <span>Created by @Farnil</span>
                                                                                    </a>
                                                                                    </div>
                                                                                    <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                                                                    <div class="featured-item-clock" data-countdown="2021/09/09">-71:17:23:23</div>
                                                                                    </div>
                                                                                    <div class="content">
                                                                                        <h3><a href="/author-profile">Industrial Revolution</a>
                                                                                        </h3>
                                                                                        <div class="content-in">
                                                                                            <span>100 ETH 12/14</span>
                                                                                            <h4>Bid 80 ETH </h4>
                                                                                            </div>
                                                                                            <div class="featured-content-list">
                                                                                                <ul>
                                                                                                    <li>
                                                                                                        <img src={featured_user1} alt="Images"/>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <img src={featured_user2} alt="Images"/>
                                                                                                            </li>
                                                                                                            <li class="title">10+ People Placed Bid</li>
                                                                                                            </ul>
                                                                                                            <p>
                                                                                                                <i class="ri-heart-line"></i>
                                                                                                                 122</p>
                                                                                                                 </div>
                                                                                                                 </div>
                                                                                                                 </div>
                                                                                                                 </div>
                                                                                                                 <div class="col-lg-3 col-md-6">
                                                                                                                    <div class="featured-item">
                                                                                                                        <div class="featured-item-img">
                                                                                                                            <a href="/item-details">
                                                                                                                                <img src={featured_2} alt="Images"/>
                                                                                                                                </a>
                                                                                                                                <div class="featured-user">
                                                                                                                                    <a class="featured-user-option" href="/author-profile">
                                                                                                                                        <img src={featured_user2} alt="Images"/>
                                                                                                                                        <span>Created by @Adison</span>
                                                                                                                                        </a>
                                                                                                                                        </div>
                                                                                                                                        <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                                                                                                                        <div class="featured-item-clock" data-countdown="2021/11/11">-71:17:23:23</div>
                                                                                                                                        </div>
                                                                                                                                        <div class="content">
                                                                                                                                            <h3><a href="/author-profile">Love In The Air</a></h3>
                                                                                                                                            <div class="content-in">
                                                                                                                                                <span>110 ETH 12/14</span>
                                                                                                                                                <h4>Bid 70 ETH </h4>
                                                                                                                                                </div>
                                                                                                                                                <div class="featured-content-list">
                                                                                                                                                    <ul>
                                                                                                                                                        <li>
                                                                                                                                                            <img src={featured_user3} alt="Images"/>
                                                                                                                                                            </li>
                                                                                                                                                            <li>
                                                                                                                                                                <img src={featured_user2} alt="Images"/>
                                                                                                                                                                </li>
                                                                                                                                                                <li class="title">10+ People Placed Bid</li>
                                                                                                                                                                </ul>
                                                                                                                                                                <p><i class=""><AiOutlineHeart /></i> 112</p>
                                                                                                                                                                </div>
                                                                                                                                                                </div>
                                                                                                                                                                </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-lg-3 col-md-6">
                                                                                                                                                                    <div class="featured-item">
                                                                                                                                                                        <div class="featured-item-img">
                                                                                                                                                                            <a href="/item-details">
                                                                                                                                                                                <img src={featured_3} alt="Images"/></a>
                                                                                                                                                                                <div class="featured-user">
                                                                                                                                                                                    <a class="featured-user-option" href="/author-profile">
                                                                                                                                                                                        <img src={featured_user3} alt="Images"/>
                                                                                                                                                                                        <span>Created by @Jekob</span>
                                                                                                                                                                                        </a>
                                                                                                                                                                                        </div>
                                                                                                                                                                                        <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                                                                                                                                                                        </div>
                                                                                                                                                                                        <div class="content">
                                                                                                                                                                                            <h3><a href="/author-profile">Become One With Nature</a></h3>
                                                                                                                                                                                            <div class="content-in">
                                                                                                                                                                                                <span>120 ETH 12/14</span>
                                                                                                                                                                                                <h4>Bid 90 ETH </h4>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div class="featured-content-list">
                                                                                                                                                                                                    <ul>
                                                                                                                                                                                                        <li>
                                                                                                                                                                                                            <img src={featured_user4} alt="Images"/>
                                                                                                                                                                                                            </li>
                                                                                                                                                                                                            <li>
                                                                                                                                                                                                                <img src={featured_user5} alt="Images"/>
                                                                                                                                                                                                                </li>
                                                                                                                                                                                                                <li class="title">10+ People Placed Bid</li>
                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                    <i class=""><AiOutlineHeart /></i>
                                                                                                                                                                                                                     132</p>
                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                     <div class="col-lg-3 col-md-6">
                                                                                                                                                                                                                        <div class="featured-item">
                                                                                                                                                                                                                            <div class="featured-item-img">
                                                                                                                                                                                                                                <a href="/item-details">
                                                                                                                                                                                                                                    <img src={featured_4} alt="Images"/></a>
                                                                                                                                                                                                                                    <div class="featured-user">
                                                                                                                                                                                                                                        <a class="featured-user-option" href="/author-profile">
                                                                                                                                                                                                                                            <img src={featured_user4} alt="Images"/>
                                                                                                                                                                                                                                            <span>Created by @Jack</span>
                                                                                                                                                                                                                                            </a>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                            <button type="button" class="default-btn border-radius-5">Place Bid</button>
                                                                                                                                                                                                                                            <div class="featured-item-clock" data-countdown="2021/11/11">-71:17:23:23</div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                            <div class="content">
                                                                                                                                                                                                                                                <h3>
                                                                                                                                                                                                                                                    <a href="/author-profile">Twilight Fracture City</a>
                                                                                                                                                                                                                                                    </h3>
                                                                                                                                                                                                                                                    <div class="content-in">
<span>130 ETH 12/14</span>
<h4>Bid 80 ETH </h4>
</div>
<div class="featured-content-list">
    <ul>
        <li>
            <img src={featured_user5} alt="Images"/>
            </li>
            <li>
                <img src={featured_user6} alt="Images"/>
                </li>
                <li class="title">10+ People Placed Bid</li>
</ul>
<p>
    <i class=""><AiOutlineHeart /></i>
        142
        </p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
        <div class="featured-item">
            <div class="featured-item-img">
                <a href="/author-profile">
                    <img src={featured_5} alt="Images"/>
                    </a>
                    <div class="featured-user">
                        <a class="featured-user-option" href="/author-profile">
<img src={featured_user5} alt="Images"/>
<span>Created by @Daniel</span>
</a>
</div>
<button type="button" class="default-btn border-radius-5">Place Bid</button>
</div>
<div class="content">
    <h3><a href="/author-profile">Walking On Air</a></h3>
    <div class="content-in">
        <span>110 ETH 12/14</span>
        <h4>Bid 90 ETH </h4>
        </div>
        <div class="featured-content-list">
            <ul>
                <li>
                    <img src={featured_user6} alt="Images"/>
                    </li>
                    <li>
<img src={featured_user7} alt="Images"/>
</li>
<li class="title">10+ People Placed Bid</li>
</ul>
<p>
    <i class=""><AiOutlineHeart /></i>
        112</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
        <div class="featured-item">
            <div class="featured-item-img">
                <a href="/author-profile">
                    <img src={featured_6} alt="Images"/>
</a>
<div class="featured-user">
    <a class="featured-user-option" href="/author-profile">
        <img src={featured_user6} alt="Images"/>
        <span>Created by @Samuel</span>
        </a>
        </div>
        <button type="button" class="default-btn border-radius-5">Place Bid</button>
        </div>
        <div class="content">
            <h3><a href="/author-profile">Supper Nuemorphism</a></h3>
            <div class="content-in">
                <span>130 ETH 12/14</span>
                <h4>Bid 70 ETH </h4>
                </div>
                <div class="featured-content-list">
                    <ul>
                         <li>
<img src={featured_user7} alt="Images"/>
</li>
<li>
    <img src={featured_user8} alt="Images"/>
    </li>
    <li class="title">10+ People Placed Bid</li>
    </ul>
    <p>
        <i class=""><AiOutlineHeart /></i> 
        162</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
<div class="featured-item">
    <div class="featured-item-img">
        <a href="/item-details">
            <img src={featured_7} alt="Images"/>
            </a>
            <div class="featured-user">
                <a class="featured-user-option" href="/author-profile">
                    <img src={featured_user7} alt="Images"/>
                    <span>Created by @Martina</span>
</a>
</div>
<button type="button" class="default-btn border-radius-5">Place Bid</button>
<div class="featured-item-clock" data-countdown="2021/11/11">-71:17:23:23</div>
</div>
<div class="content">
    <h3>
         <a href="/author-profile">Dark-light Angel</a>
         </h3>
        <div class="content-in">
            <span>110 ETH 12/14</span>
            <h4>Bid 80 ETH </h4>
            </div>
            <div class="featured-content-list">
                <ul>
                    <li>
                        <img src={featured_user8} alt="Images"/>
    </li>
    <li>
        <img src={featured_user1} alt="Images"/>
        </li>
        <li class="title">10+ People Placed Bid</li>
        </ul>
        <p>
            <i class=""><AiOutlineHeart /></i> 
            162</p>
            </div>
            </div>
            </div>
            </div>
<div class="col-lg-3 col-md-6">
    <div class="featured-item">
        <div class="featured-item-img">
            <a href="/item-details">
                <img src={featured_8} alt="Images"/>
                </a>
                <div class="featured-user">
                    <a class="featured-user-option" href="/author-profile">
                        <img src={featured_user8} alt="Images"/>
                        <span>Created by @Henry</span>
                        </a>
                        </div>
                        <button type="button" class="default-btn border-radius-5">Place Bid</button>
                        </div>
                        <div class="content">
                            <h3>
                                <a href="/author-profile">Exe Dream Hight</a>
 </h3>
 <div class="content-in">
     <span>160 ETH 12/14</span>
     <h4>Bid 90 ETH </h4>
     </div>
    <div class="featured-content-list">
         <ul>
            <li>
                 <img src={featured_user1} alt="Images"/>
                 </li>
                <li>
                     <img src={featured_user3} alt="Images"/>
                     </li>
                     <li class="title">10+ People Placed Bid</li>
                     </ul>
                     <p>
                        <i class=""><AiOutlineHeart /></i> 
                        182
    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
         </div>
         <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4">
            </div>
            <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6">
                </div>
                <div class="react-tabs__tab-panel" role="tabpanel" id="react-tabs-9" aria-labelledby="react-tabs-8">
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured