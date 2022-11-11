import React from 'react'
import "./Collection.css"
import Collection_card from '../Collection_card/Collection_card'

// import M_side2 from '../M_side/M_side2'
import M_side2 from "../M_side2/M_side2"
import Pip2 from '../Pip2/Pip2'


function Collection() {
  return (
    <div className='collection_main_bg_py'>
       <div className='container-fluid'>
        <div className="heading-brower text-start ">
          <h1 className='heading-brower-1 '>Browse By Collections</h1>
        </div>
<div className="row  ">
  <div className="col-lg-3 col-md-4 col-sm-12">
<M_side2/>
  </div>
  <div className="col-lg-9 col-md-8 col-sm-12 ">
<Pip2/>
    <div className="card-flex-c ">
    <Collection_card img3="C-img.png" text1="Undefined"/>
    <Collection_card img3="imgge.jpg" text1="DULLAMULACRYPTOCAMELD
    ESSERTDISCS"/>
    <Collection_card img3="immge2.png" text1="Cryptp Oliver Season 1"/>
    <Collection_card img3="immge3.png" text1="Empire Pandas"/>
    
    <Collection_card img3="C-img.png" text1="Undefined"/>
    <Collection_card img3="imgge.jpg" text1="DULLAMULACRYPTOCAMELD
    ESSERTDISCS"/>
    <Collection_card img3="immge2.png" text1="Cryptp Oliver Season 1"/>
    <Collection_card img3="immge3.png" text1="Empire Pandas"/>
    
    <Collection_card img3="C-img.png" text1="Undefined"/>
    <Collection_card img3="imgge.jpg" text1="DULLAMULACRYPTOCAMELD
    ESSERTDISCS"/>
    <Collection_card img3="immge2.png" text1="Cryptp Oliver Season 1"/>
    <Collection_card img3="immge3.png" text1="Empire Pandas"/>
    
    <Collection_card img3="C-img.png" text1="Undefined"/>
    <Collection_card img3="imgge.jpg" text1="DULLAMULACRYPTOCAMELD
    ESSERTDISCS"/>
    <Collection_card img3="immge2.png" text1="Cryptp Oliver Season 1"/>
    <Collection_card img3="immge3.png" text1="Empire Pandas"/>
    
   
   
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Collection
