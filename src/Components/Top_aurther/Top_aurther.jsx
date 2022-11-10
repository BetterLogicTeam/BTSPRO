import React from 'react'
import Card from '../Card/Card'
import "./Top_aurther.css"
function Top_aurther() {
  return (
    <div className='top-back pt-3 pb-5'>
      <div className="container-fluid">
      <div className="live  mt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12  ">   <p className='text-start text-white live-fs'><b>Top Author</b> </p></div>
          <div className="col-lg-6 col-sm-12  text-start text-md-end">  <button className='btn text-white '>Explore More</button></div>
        </div>
     </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <Card imge1="author-img1.jpg" imge2="author-user1.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Card imge1="author-img2.jpg" imge2="author-user2.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Card imge1="author-img3.jpg" imge2="author-user3.jpg"/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Card imge1="author-img4.jpg" imge2="author-user4.jpg"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top_aurther
