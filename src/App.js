import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Trending from './Components/Trending/Trending';
import Top_seller from './Components/Top_seller/Top_seller';
import Auction from './Components/Auction/Auction';
import Featured from './Components/Featured/Featured';
import Create_sell from './Components/Create_sell/Create_sell';
import Author from './Components/Author/Author';
import Footer from './Components/Footer/Footer';
import Create_page from './Components/Create_page/Create_page';
import Main_landing_page from './Components/MaIn_landing_page/Main_landing_page';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Market_main from "./Components/Maeket_main/Market_main"
import Market_place2 from "./Components/Market_place2/Market_place2"
import Collection from "./Components/Collection/Collection"

import Create_pro from './Components/Create_pro/Create_pro';
import Collection_next from './Components/Collection_next/Collection_next';
import Sell_NFt from './Components/Sell_NFT/Sell_NFt';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import User_Profile from './Components/User_profile/User_Profile';
import Edit_Profile from './Components/Edit_Profile/Edit_Profile';
import Create_User_profile from './Components/Create_User_Profile/Create_User_profile';
import Seller_Details from './Components/Top_seller/Seller_Details';

function App() {
  return (
    <div className="">
      <Header />

      <ToastContainer/>
       <Routes>
       <Route path='/' element={<Main_landing_page/>}/>
       <Route path='/market_place' element={<Market_main/>}/>
       <Route path='/create' element={<Create_page/>}/>
       {/* <Route path='/creat' element={<Create_page/>}/> */}
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/Market_place2/:id/:index/:text/:useradd' element={<Market_place2/>}/>
       <Route path='/Create_pro' element={<Create_pro/>}/>
       <Route path='/Collection_next/:id' element={<Collection_next/>}/>
       <Route path='/Sell_NFt/:id' element={<Sell_NFt/>}/>
       <Route path='/User_Profile' element={<User_Profile/>}/>
       <Route path='/Edit_Profile' element={<Edit_Profile/>}/>
       <Route path='/Create_User_profile' element={<Create_User_profile/>}/>
       <Route path='/Seller_Details/:id' element={<Seller_Details/>}/>





      
      
    </Routes>
    <Footer />
      {/* <Router>  
        <Routes>
        <Route path='/' element={<Main_landing_page/>}/>
        </Routes>
      
      </Router> */}
     
      {/* <Main_landing_page/> */}
    
    
      {/* <Create_page/> */}
    </div>
  );
}

export default App;
