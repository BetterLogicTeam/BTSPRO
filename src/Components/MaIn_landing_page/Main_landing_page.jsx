import React from 'react'
import Auction from '../Auction/Auction'
import Author from '../Author/Author'
import Create_sell from '../Create_sell/Create_sell'
import Featured from '../Featured/Featured'
import Landing from '../Landing/Landing'
import Top_seller from '../Top_seller/Top_seller'
import Trending from '../Trending/Trending'
import Live_auction_main from '../Live_auction_main/Live_auction_main'
import Top_aurther from '../Top_aurther/Top_aurther'
import Featured_main from '../Featured_main/Featured_main'
import Trending_main from '../Trending_main/Trending_main'

function Main_landing_page() {
  return (
    <div>

        <Landing/>
      <Trending_main/>
      <Top_seller/>
      <Live_auction_main/>
      <Featured_main/>
      <Create_sell/>
      <Top_aurther/>
    </div>
  )
}

export default Main_landing_page