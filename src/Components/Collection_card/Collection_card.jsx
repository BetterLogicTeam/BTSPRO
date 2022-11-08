import React from 'react'
import "./Collection_card.css"
function Collection_card(props) {
  return (
    <div>
      <div className="card card-2-coll me-1 mt-4">
        <img src={props.img3} className="overflow-hidden" alt="" />
        <h4 className='text-info pt-3 text-center '><b>{props.text1}</b> </h4>
      </div>
    </div>
  )
}

export default Collection_card
