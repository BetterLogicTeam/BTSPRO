import React from 'react'
import Featured from '../Featured/Featured '
import "./Featured_main.css"

function Featured_main() {
  return (
    <div>
      <div className="container-fluid mt-5 ">
      <div className="row  px-3">
          <div className="col-lg-6 col-sm-12  ">   <p className='text-start live-fs'><b>Featured Assets</b> </p></div>
          <div className="col-lg-6 col-sm-12  text-start  text-md-end"> 
           <button className='btn text-white mb-2 me-4 respo_btttn'>All</button>
           <button className='btn text-white me-4 mb-2 respo_btttn'>Art</button>
           <button className='btn text-white me-4 mb-2 respo_btttn'>Virtual Worlds</button>
           <button className='btn text-white mb-2 me-4 respo_btttn'>Collectibles</button>
           <button className='btn text-white mb-2 me-4 respo_btttn'>Music</button>
           </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Featured phote1="featured-user1.jpg" phote2="featured-img1.jpg" phote3="featured-user1.jpg" phote4="featured-user2.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user2.jpg" phote2="featured-img2.jpg" phote3="featured-user2.jpg" phote4="featured-user3.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user3.jpg" phote2="featured-img3.jpg" phote3="featured-user3.jpg" phote4="featured-user4.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user4.jpg" phote2="featured-img4.jpg" phote3="featured-user4.jpg" phote4="featured-user5.jpg"/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Featured phote1="featured-user5.jpg" phote2="featured-img5.jpg" phote3="featured-user5.jpg" phote4="featured-user6.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user6.jpg" phote2="featured-img6.jpg" phote3="featured-user6.jpg" phote4="featured-user7.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user7.jpg" phote2="featured-img7.jpg" phote3="featured-user7.jpg" phote4="featured-user8.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Featured phote1="featured-user8.jpg" phote2="featured-img8.jpg" phote3="featured-user8.jpg" phote4="featured-user1.jpg"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured_main
