import React from "react";
import shape1 from "../../Assets/shape1.png";
import shape2 from "../../Assets/shape2.png";
import shape_bg from "../../Assets/shape_bg.png";
import footer_logo from "../../Assets/footer_logo.png";
import logo_h from "../../Assets/logo_h.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" main_footer_bg">

        <div className="container">
          <div className="row">
            {/* <div className="col-lg-4">
              <div className="footer_logo">
                <img src={logo_h} alt="" />
              </div>
              <p className="footer_para">Subscribe to our newsletter</p>

              <div className="foooter_main_respo">
                <input type="text" className="footer_input_here" placeholder="Enter Your Email" name="" id="" />
                <button className="footer_btn_here"> Subscribe Now</button>
              </div>
            </div> */}
            <div class="col-lg-6 col-sm-8">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/"
                  ><img src={logo_h} alt="Footer Logo" />
                  </a>
                </div>
                <p>Subscribe to our newsletter</p>
                <div class="newsletter-area">
                  <form class="newsletter-form">
                    <input type="email" class="form-control" placeholder="Enter Your Email" name="EMAIL" required="" autocomplete="off" />
                    <button class="subscribe-btn" type="submit">Subscribe Now</button>
                    <div id="validator-newsletter" class="form-result">
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_links_here">
                <h3 className="footer_link_heading">
                  Marketplace
                </h3>
                <ul className="p-0 m-0">
                  <li className="footer_list"><Link to="/market_place"><a className="footer_links_link">All NFTs</a></Link></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Art</a></li>
                  <li className="footer_list"><Link to="/collection"><a  className="footer_links_link">Collectibles</a></Link></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Domain Names</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Music</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Photography</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Sports</a></li>
                  <li className="footer_list"><Link to="/"><a  className="footer_links_link">Trending Cards</a></Link></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Utility</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Virtual Worlds</a></li>
                </ul>

              </div>
            </div>
          
            <div className="col-lg-2">
              <div className="footer_links_here">
                <h3 className="footer_link_heading">
                  My Account
                </h3>
                <ul className="p-0 m-0">
                <li className="footer_list"> <Link to="/User_Profile"><a href="#" className="footer_links_link">Profile</a></Link></li>
                <li className="footer_list"> <Link to="#"><a href="#" className="footer_links_link">Favorites</a></Link></li>
                <li className="footer_list"><a href="#" className="footer_links_link">Watchlist</a></li>
                <li className="footer_list"><Link to="/collection"><a href="#" className="footer_links_link">My Collection</a></Link></li>
                <li className="footer_list"> <Link to="/Create_pro"><a className="footer_links_link">Create</a>    </Link></li>
                <li className="footer_list"><a href="#" className="footer_links_link">Settings</a></li>

                </ul>

              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_links_here">
                <h3 className="footer_link_heading">
                  Stats
                </h3>
                <ul className="p-0 m-0">
                  <li className="footer_list"><a href="#" className="footer_links_link">Rankings</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Activity</a></li>

                </ul>

              </div>
            </div>
            {/* <div className="col-lg-2">
              <div className="footer_links_here">
                <h3 className="footer_link_heading">
                  Company
                </h3>
                <ul className="p-0 m-0">
                  <li className="footer_list"><a href="#" className="footer_links_link">About Us</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Contact Us</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Our Blog</a></li>
                  <li className="footer_list"><a href="#" className="footer_links_link">Discover</a></li>
                </ul>

              </div>
            </div> */}
          </div>
        </div>



      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="copy-right-text">
                <p>© 2021 BITPRO. All Rights Reserved 
               
                </p>
                <ul class="copy-right-list">
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="copy-right-social">
                <ul class="social-link">
                  <li><a href="https://www.facebook.com/"><i > <FaFacebookF/></i></a></li>
                  <li><a href="https://www.instagram.com/"><i><AiFillInstagram/></i></a></li>
                  <li><a href="https://twitter.com/"><i ><BsTwitter/></i></a></li>
                  <li><a href="https://www.linkedin.com/"><i ><FaLinkedinIn/></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
