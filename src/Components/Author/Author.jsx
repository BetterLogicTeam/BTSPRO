import React from "react";
import author_img1 from "../../Assets/author_img1.jpg";
import author_img2 from "../../Assets/author_img2.jpg";
import author_img3 from "../../Assets/author_img3.jpg";
import author_img4 from "../../Assets/author_img4.jpg";
import author_user1 from "../../Assets/author_user1.jpg";
import author_user2 from "../../Assets/author_user2.jpg";
import author_user3 from "../../Assets/author_user3.jpg";
import author_user4 from "../../Assets/author_user4.jpg";
import author_shape from "../../Assets/author_shape.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

function Author() {
  return (
    <div>
      <div class="author-area author-area-bg pt-100 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="section-title">
                <h2>Top Author</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="author-btn text-end">
                <a class="default-btn border-radius-5" href="/authors">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div class="row pt-45 justify-content-center">
            <div class="col-lg-3 col-6">
              <div class="author-card">
                <a href="/author-profile">
                  <img src={author_img1} alt="Images" />
                </a>
                <div class="content">
                  <div class="author-user">
                    <img src={author_user1} alt="Images" />
                    <i class="ri-check-line">
                      <TiTick />
                    </i>
                  </div>
                  <h3>
                    <a href="/author-profile">Olivia Jenar</a>
                  </h3>
                  <span>@Jenar</span>
                  <div class="author-content">
                    <div class="content-left">
                      <span>Followers</span>
                      <h4>2941</h4>
                    </div>
                    <div class="content-right">
                      Follow
                      <ul class="author-social">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i class="">
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i class="">
                              <AiFillInstagram />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i class="">
                              <BsTwitter />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="author-card">
                <a href="/author-profile">
                  <img src={author_img2} alt="Images" />
                </a>
                <div class="content">
                  <div class="author-user">
                    <img src={author_user2} alt="Images" />
                    <i class="ri-check-line">
                      <TiTick />
                    </i>
                  </div>
                  <h3>
                    <a href="/author-profile">James Parker</a>
                  </h3>
                  <span>@Parker</span>
                  <div class="author-content">
                    <div class="content-left">
                      <span>Followers</span>
                      <h4>2945</h4>
                    </div>
                    <div class="content-right">
                      Follow
                      <ul class="author-social">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i class="">
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i class="">
                              <AiFillInstagram />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i class="">
                              <BsTwitter />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="author-card">
                <a href="/author-profile">
                  <img src={author_img3} alt="Images" />
                </a>
                <div class="content">
                  <div class="author-user">
                    <img src={author_user3} alt="Images" />
                    <i class="ri-check-line">
                      <TiTick />
                    </i>
                  </div>
                  <h3>
                    <a href="/author-profile">Lucas Adison</a>
                  </h3>
                  <span>@Adison</span>
                  <div class="author-content">
                    <div class="content-left">
                      <span>Followers</span>
                      <h4>4205</h4>
                    </div>
                    <div class="content-right">
                      Follow
                      <ul class="author-social">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i class="">
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i class="">
                              <AiFillInstagram />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i class="">
                              <BsTwitter />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="author-card">
                <a href="/author-profile">
                  <img src={author_img4} alt="Images" />
                </a>
                <div class="content">
                  <div class="author-user">
                    <img src={author_user4} alt="Images" />
                    <i class="ri-check-line">
                      <TiTick />
                    </i>
                  </div>
                  <h3>
                    <a href="/author-profile">Amelia Rosia</a>
                  </h3>
                  <span>@Rosia</span>
                  <div class="author-content">
                    <div class="content-left">
                      <span>Followers</span>
                      <h4>2306</h4>
                    </div>
                    <div class="content-right">
                      Follow
                      <ul class="author-social">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i class="">
                              <FaFacebookF />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i class="">
                              <AiFillInstagram />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i class="">
                              <BsTwitter />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="author-area-shape">
          <img src={author_shape} alt="Images" />
        </div>
      </div>
    </div>
  );
}

export default Author;
