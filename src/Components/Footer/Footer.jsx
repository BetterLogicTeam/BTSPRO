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

function Footer() {
  return (
    <>
    <div className=" main_footer_bg">

      {/* <footer class="footer-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-8">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <img src={footer_logo} alt="Footer Logo" />
                  </a>
                </div>
                <p>Subscribe to our newsletter</p>
                <div class="newsletter-area">
                  <form
                    class="newsletter-form"
                    data-toggle="validator"
                    method="POST"
                  >
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter Your Email"
                      name="EMAIL"
                      required=""
                      autocomplete="off"
                    />
                    <button class="subscribe-btn" type="submit">
                      Subscribe Now
                    </button>
                    <div id="validator-newsletter" class="form-result"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget ps-5">
                <h3>Marketplace</h3>
                <ul class="footer-list">
                  <li>
                    <a href="/discover-1">Art</a>
                  </li>
                  <li>
                    <a href="/discover-1">All NFTs</a>
                  </li>
                  <li>
                    <a href="/discover-1">Music</a>
                  </li>
                  <li>
                    <a href="/discover-1">Trending Cards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget ps-5">
                <h3>My Account</h3>
                <ul class="footer-list">
                  <li>
                    <a href="/authors">Authors</a>
                  </li>
                  <li>
                    <a href="/collection">Collection</a>
                  </li>
                  <li>
                    <a href="/author-profile">Author Profile</a>
                  </li>
                  <li>
                    <a href="/create-collection">Create Collection</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget ps-5">
                <h3>Resources</h3>
                <ul class="footer-list">
                  <li>
                    <a href="/help-center">Helps &amp; Support</a>
                  </li>
                  <li>
                    <a href="/auction">Live Auctions</a>
                  </li>
                  <li>
                    <a href="/item-details">Item Details</a>
                  </li>
                  <li>
                    <a href="/activity">Activity</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4">
              <div class="footer-widget ps-5">
                <h3>Company</h3>
                <ul class="footer-list">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/blog-1">Our Blog</a>
                  </li>
                  <li>
                    <a href="/discover-1">Discover</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
   
      </footer> */}
      {/* <div class="copyright-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="copy-right-text">
                <p>
                  © 2021 Gible. All Rights Reserved by{" "}
                  <a href="https://hibootstrap.com/">HiBootstrap</a>
                </p>
                <ul class="copy-right-list">
                  <li>
                    <a href="/terms-condition">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="copy-right-social">
                <ul class="social-link">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i class="">
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i class="">
                        <AiFillInstagram />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i class="">
                        <BsTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i class="">
                        <FaLinkedinIn />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
<div className="container">
   <div className="row">
    <div className="col-lg-4">
      <div className="footer_logo">
        <img src={logo_h} alt="" />
      </div>
      <p className="footer_para">Subscribe to our newsletter</p>

      <div className="foooter_main_respo">
        <input type="text" className="footer_input_here" placeholder="Enter Your Email" name="" id="" />
        <button className="footer_btn_here"> Subscribe Now</button>
      </div>
    </div>
    <div className="col-lg-2">
      <div className="footer_links_here">
        <h3 className="footer_link_heading">
        Marketplace
        </h3>
        <ul className="p-0 m-0">
          <li className="footer_list"><a href="#" className="footer_links_link">Art</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">All NFTs</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Music</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Trending Cards</a></li>
        </ul>

      </div>
    </div>
    <div className="col-lg-2">
      <div className="footer_links_here">
        <h3 className="footer_link_heading">
        My Account
        </h3>
        <ul className="p-0 m-0">
          <li className="footer_list"><a href="#" className="footer_links_link">Authors</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Collection</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Author Profile</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Create Collection</a></li>
        </ul>

      </div>
    </div>
    <div className="col-lg-2">
      <div className="footer_links_here">
        <h3 className="footer_link_heading">
        Resources
        </h3>
        <ul className="p-0 m-0">
          <li className="footer_list"><a href="#" className="footer_links_link">Helps & Support</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Live Auctions</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Item Details</a></li>
          <li className="footer_list"><a href="#" className="footer_links_link">Activity</a></li>
        </ul>

      </div>
    </div>
    <div className="col-lg-2">
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
    </div>
   </div>
</div>



    </div>
<div className="looooowerfoooter bg-white py-2">
<div className="container mt-3 bg-white">
     <div className="row justify-content-between">
      <div className="col-lg-4">
        <p className="copyright_para">© 2021 Gible. All Rights Reserved by <a href="#" className="company_name">BTSPRO</a></p>
      </div>
      <div className="col-lg-4">
        <ul className="lower_footer_ul">
          <li className="me-3 lower_footer_links">Terms & Conditions</li>
          <li className=" lower_footer_links">Privacy Policy</li>
        </ul>
      </div>
      <div className="col-lg-4 ">
        <div className="social_ico">
          <FaFacebookF  className='social_links_ico'></FaFacebookF>
          <AiFillInstagram  className='social_links_ico'></AiFillInstagram>
          <BsTwitter className='social_links_ico'></BsTwitter>
          <FaLinkedinIn  className='social_links_ico'></FaLinkedinIn>
        </div>
      </div>
     </div>

</div>
</div>
</>
  );
}

export default Footer;
