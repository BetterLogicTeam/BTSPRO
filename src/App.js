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


function App() {
  return (
    <div className="">
      <Header />

       <Routes>
       <Route path='/' element={<Main_landing_page/>}/>
       <Route path='/market_place' element={<Market_main/>}/>
       <Route path='/create' element={<Create_page/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/Market_place2' element={<Market_place2/>}/>
       <Route path='/Create_pro' element={<Create_pro/>}/>
      
      
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
