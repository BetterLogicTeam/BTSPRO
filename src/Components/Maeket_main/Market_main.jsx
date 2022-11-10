import React from 'react'
import Market_card from '../Market_card/Market_card'
import Market_pip from '../Market_pip/Market_pip'
import Market_side from '../Market_side/Market_side'
import "./Market_main.css"

function Market_main() {
  return (
    <div className='paadddddddd'>
      <div className='container-fluid'>
        <div className="heading-brower text-start ">
          <h1 className='heading-brower'>Browse By Category</h1>
        </div>
<div className="row  ">
  <div className="col-lg-3 col-md-5 col-sm-12">
<Market_side/>
  </div>
  <div className="col-lg-9 col-md-7 col-sm-12  ">
  <Market_pip/>
    <div className="card-flex ">
    <Market_card img="img_1.gif" img2="img_1-1.gif"/>
    <Market_card img="img_2.gif" img2="img_1-2.png"/>
    <Market_card img="img_3.jpg" img2="img_1-3.jpg"/>
    <Market_card img="img_4.jpg" img2="img_1-2.png"/>
    <Market_card img="img_1.gif" img2="img_1-1.gif"/>
    <Market_card img="img_2.gif" img2="img_1-2.png"/>
    <Market_card img="img_3.jpg" img2="img_1-3.jpg"/>
    <Market_card img="img_4.jpg" img2="img_1-2.png"/>
    <Market_card img="img_1.gif" img2="img_1-1.gif"/>
    <Market_card img="img_2.gif" img2="img_1-2.png"/>
    <Market_card img="img_3.jpg" img2="img_1-3.jpg"/>
    <Market_card img="img_4.jpg" img2="img_1-2.png"/>
   
   
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Market_main
