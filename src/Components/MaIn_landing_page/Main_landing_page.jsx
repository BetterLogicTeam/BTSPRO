import React from 'react'
import Auction from '../Auction/Auction'
import Author from '../Author/Author'
import Create_sell from '../Create_sell/Create_sell'
import Featured from '../Featured/Featured'
import Landing from '../Landing/Landing'
import Top_seller from '../Top_seller/Top_seller'
import Trending from '../Trending/Trending'

function Main_landing_page() {
  return (
    <div>

        <Landing/>
        {/* <Trending/> */}
      <Top_seller/>
      {/* <Auction/> */}
      {/* <Featured/> */}
      <Create_sell/>
      {/* <Author/> */}
    </div>
  )
}

export default Main_landing_page