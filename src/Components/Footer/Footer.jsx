import React, { useEffect, useState } from "react";
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
  const [Year, setYear] = useState(new Date().getFullYear())


  return (
    <>
      <footer className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-8">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img src="assets/images/footer-logo.png" className="footer-logo1" alt="Footer Logo" />
                    <img src="assets/images/logo.png" className="footer-logo2" alt="Footer Logo" />
                  </a>
                </div>
                <p>Subscribe to our newsletter</p>
                <div className="newsletter-area">
                  <div className="newsletter-form" data-toggle="validator" method="POST">
                    <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autocomplete="off" />
                    <button className="subscribe-btn" type="submit">
                      Subscribe Now
                    </button>
                    <div id="validator-newsletter" className="form-result"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Marketplace</h3>
                <ul className="footer-list">
                  <li>
                    <a  >
                      Art
                    </a>
                  </li>
                  <li>
                    <a  >
                      All NFTs
                    </a>
                  </li>
                  <li>
                    <a  >
                      Music
                    </a>
                  </li>
                  <li>
                    <a  >
                      Trending Cards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>My Account</h3>
                <ul className="footer-list">
                  {/* <li>
                    <a href="authors.html" target="_blank">
                      Authors
                    </a>
                  </li> */}
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/collection">

                      <a >
                        Collection
                      </a>

                    </Link>

                  </li>
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/User_Profile">

                      <a >
                        Author Profile
                      </a>

                    </Link>

                  </li>
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/Create_pro">

                      <a >
                        Create Collection
                      </a>

                    </Link>

                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Resources</h3>
                <ul className="footer-list">
                  <li>
                    <a >
                      Helps & Support
                    </a>
                  </li>
                  <li>
                    <a >
                      Live Auctions
                    </a>
                  </li>
                  <li>
                    <a >
                      Item Details
                    </a>
                  </li>
                  <li>
                    <a >
                      Activity
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Company</h3>
                <ul className="footer-list">
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/About">
                      <a >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/Contact_Us">

                      <a >
                        Contact Us
                      </a>

                    </Link>
                  </li>
                  {/* <li>
                    <a href="blog-1.html" target="_blank">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="discover-1.html" target="_blank">
                      Discover
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape">
          <div className="footer-shape1">
            <img src="assets/images/shape/shape-bg.png" alt="Images" />
          </div>
          <div className="footer-shape2">
            <img src="assets/images/shape/shape1.png" alt="Images" />
          </div>
          <div className="footer-shape3">
            <img src="assets/images/shape/shape2.png" alt="Images" />
          </div>
        </div>
      </footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="copy-right-text">
                <p>
                  © {Year} . All Rights Reserved.
                </p>
                <ul className="copy-right-list">
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/TermandCondition">
                      <a >
                        Terms & Conditions
                      </a>
                    </Link>
                  </li>
                  <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to="/PrivacyPolicy">

                      <a >
                        Privacy Policy
                      </a>

                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copy-right-social">
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
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
