import React from 'react'
import "./Collection_card.css"
import { Link } from 'react-router-dom';
function Collection_card(props) {
  return (
    <div>

      <div class="featured-card box-shadow">
        <div class="featured-card-img">
          <a href="/item-details">
            <img src="https://gible-nft.hibootstrap.com/images/featured/featured-img1.jpg" alt="Images" />
          </a>
          <p>
            <i class="ri-heart-line"></i> 192
          </p>
          <button type="button" class="default-btn border-radius-5">Place Bid</button>
        </div>
        <div class="content">
          <h3>
            <a href="/item-details">Twilight Fracture City</a>
          </h3>
          <div class="content-in">
            <div class="featured-card-left">
              <span>110 ETH 12/14</span>
              <h4>Bid 90 ETH </h4>
              </div>
              <a class="featured-content-btn" href="/item-details"><i class="ri-arrow-right-line"></i></a>
              </div>
              <a class="featured-user-option" href="/author-profile">
                <img src="../images/featured/featured-user4.jpg" alt="Images"/>
                  <span>Created by @Adison</span>
                  </a>
                  </div>
                  </div>



      {/* <Link to="/Collection_next">   <div className="card card-2-coll me-1 mt-4 px-2">
        <img src={props.img3} className="overflow-hidden" alt="" />
        <h4 className='text-info pt-3 text-center '><b>{props.text1}</b> </h4>
      </div>
      </Link> */}
    </div>
  )
}

export default Collection_card
