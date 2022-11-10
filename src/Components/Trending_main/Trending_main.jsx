import React from 'react'
import Trending from '../Trending/Trending'

function Trending_main() {
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
