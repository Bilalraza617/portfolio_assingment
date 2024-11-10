import Image from "next/image";

export default function Home() {
  return (
    <nav class="navbar">
          <div class="container">
              <div class="row justify-content-between">
                  <div class="logo"><a href="index.html">Free<span>lancer</span></a></div>
                  <div class="links">
                  <ul class="menu">
                      <li class="nav-item"><a href="#home" class="nav-link active">Home <span></span></a></li>
                      <li class="nav-item"><a href="#about" class="nav-link">About <span></span></a></li>
                      <li class="nav-item"><a href="#services" class="nav-link">Services <span></span></a></li>
                      <li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio <span></span></a></li>
                      <li class="nav-item"><a href="#pricing" class="nav-link">Pricing <span></span></a></li>
                      <li class="nav-item"><a href="#contact" class="nav-link">Contact <span></span></a></li>
                  </ul>
                  </div>
                  <div class="menu-btn">
                      <i class="fas fa-bars"></i>
                  </div>
              </div>
          </div>
      </nav>
      <!--===== Navbar End =====-->
      <!--===== Home Section Start =====-->
      <section class="home-section" id="home">
          <ul class="header-social"> <!--===== Header Social =====-->
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>
          <div class="container">
              <div class="row align-items-center">
                  <div class="home-text">
                      <h4>Hello</h4>
                      <h1>John Smith</h1>
                      <span>Professional Freelancer Web Developer</span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                           maxime possimus. Modi ipsam iste necessitatibus!</p>
                           <a href="#" class="btn btn-1">purchase now</a>
                  </div>
                  <div class="home-image">
                      <div class="img-box">
                          <img src="images/hero.png" alt="">
                      </div>
                  </div>
              </div>
          </div>
          <div class="header-hero-shape"></div> <!--===== Hero Shape =====-->
      </section>
      <!--===== Home Section End =====-->
      <!--===== About Section Start =====-->
      <section class="about-section section-padding" id="about">
          <div class="container">
              <div class="row align-items-center justify-content-center">
                  <div class="about-image">
                      <div class="img-box">
                          <img src="images/about_hero.png" alt="">
                          <div class="about-shape"></div>
                      </div>
                  </div>
                  <div class="about-content">
                      <div class="section-title">
                          <h5 class="sub-title">About</h5>
                          <h3 class="main-title">Why You Hire Me?</h3>
                          <ul class="line">
                              <li></li>
                              <li></li>
                              <li></li>
                          </ul>
                      </div> <!--===== Section Title =====-->
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis ab odio obcaecati 
                          suscipit minima est laboriosam nihil? Sint quos esse cumque quae a, voluptatem quis 
                          sequi quia nemo, vel ab soluta, eum illo error consequuntur delectus sapiente 
                          nostrum magni placeat perferendis earum. Nesciunt 
                          ex vitae sunt hic magnam in sit quasi.</p>
                          <div class="about-skills">
                              <div class="skill-item">
                                  <div class="skill-header">
                                      <h6 class="skill-title">UI/UX Design</h6>
                                      <div class="skill-percentage">
                                          <p><span class="counter">90</span>%</p>
                                      </div>
                                  </div>
                                  <div class="skill-bar">
                                      <div class="bar-inner">
                                          <div class="bar progress-line" data-progress="90%"></div>
                                      </div>
                                  </div>
                              </div> <!--===== Skill Item =====-->
                              <div class="skill-item">
                                <div class="skill-header">
                                    <h6 class="skill-title">Web Design</h6>
                                    <div class="skill-percentage">
                                        <p><span class="counter">95</span>%</p>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <div class="bar-inner">
                                        <div class="bar progress-line" data-progress="95%"></div>
                                    </div>
                                </div>
                            </div> <!--===== Skill Item =====-->
                            <div class="skill-item">
                                <div class="skill-header">
                                    <h6 class="skill-title">HTML/CSS</h6>
                                    <div class="skill-percentage">
                                        <p><span class="counter">80</span>%</p>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <div class="bar-inner">
                                        <div class="bar progress-line" data-progress="80%"></div>
                                    </div>
                                </div>
                            </div> <!--===== Skill Item =====-->
                            <div class="skill-item">
                                <div class="skill-header">
                                    <h6 class="skill-title">Sketch</h6>
                                    <div class="skill-percentage">
                                        <p><span class="counter">70</span>%</p>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <div class="bar-inner">
                                        <div class="bar progress-line" data-progress="70%"></div>
                                    </div>
                                </div>
                            </div> <!--===== Skill Item =====-->
                          </div>
                  </div>
              </div>
          </div>
      </section>
      <!--===== About Section End =====-->
      <!--===== Services Section Start =====-->
      <section class="service-section section-padding" id="services">
          <div class="container">
              <div class="row">
                <div class="section-title text-align">
                    <h5 class="sub-title">services</h5>
                    <h3 class="main-title">Services I Provide</h3>
                    <ul class="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> <!--===== Section Title =====-->
              </div>
              <div class="row">
                   <!--===== Service Item Start =====-->
                  <div class="service-item">
                      <div class="service-item-inner">
                          <div class="icon">
                              <i class="fas fa-mobile-alt"></i>
                          </div>
                          <h3>Responsive design</h3>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                             
                              ratione, possimus et! Doloremque!</p>
                      </div>
                  </div>
                  <!--===== Service Item End =====-->
                  <!--===== Service Item Start =====-->
                   <div class="service-item">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3>web design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                           
                            ratione, possimus et! Doloremque!</p>
                    </div>
                </div>
                <!--===== Service Item End =====-->
                <!--===== Service Item Start =====-->
                 <div class="service-item">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fas fa-palette"></i>
                        </div>
                        <h3>Graphic design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                            
                            ratione, possimus et! Doloremque!</p>
                    </div>
                </div>
                <!--===== Service Item End =====-->
                <!--===== Service Item Start =====-->
                 <div class="service-item">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>Clean Code</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                           
                            ratione, possimus et! Doloremque!</p>
                    </div>
                </div>
                <!--===== Service Item End =====-->
                <!--===== Service Item Start =====-->
                 <div class="service-item">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3>seo marketing</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                           
                            ratione, possimus et! Doloremque!</p>
                    </div>
                </div>
                <!--===== Service Item End =====-->
                <!--===== Service Item Start =====-->
                 <div class="service-item">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <h3>great support</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam 
                        
                            ratione, possimus et! Doloremque!</p>
                    </div>
                </div>
                <!--===== Service Item End =====-->
              </div>
          </div>
      </section>
      <!--===== Services Section End =====-->
      <!--===== Portfolio Section Start =====-->
      <section class="portfolio section-padding" id="portfolio">
          <div class="container">
            <div class="row">
                <div class="section-title text-align">
                    <h5 class="sub-title">portfolio</h5>
                    <h3 class="main-title">our latest work</h3>
                    <ul class="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> <!--===== Section Title =====-->
              </div>
              <div class="row">
                  <div class="portfolio-filter">
                      <button type="button" class="active" data-filter="all">All</button>
                      <button type="button" data-filter="web-design">web design</button>
                      <button type="button" data-filter="photography">photography</button>
                      <button type="button" data-filter="wordpress">wordpress</button>
                  </div>
              </div>
              <div class="row">
                  <!--===== portfolio-item start =====-->
                  <div class="portfolio-item" data-category="wordpress">
                      <div class="portfolio-item-inner">
                          <div class="portfolio-img">
                              <img src="images/portfolio/portfolio-1.jpg" alt="">
                          </div>
                          <div class="portfolio-info">
                              <h4>web design</h4>
                              <div class="icon">
                                  <i class="fa fa-search"></i>
                              </div>
                          </div>
                      </div>
                  </div>
                   <!--===== portfolio-item end =====-->
                   <!--===== portfolio-item start =====-->
                  <div class="portfolio-item" data-category="wordpress">
                    <div class="portfolio-item-inner">
                        <div class="portfolio-img">
                            <img src="images/portfolio/portfolio-2.jpg" alt="">
                        </div>
                        <div class="portfolio-info">
                            <h4>wordpress</h4>
                            <div class="icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--===== portfolio-item end =====-->
                 <!--===== portfolio-item start =====-->
                   <div class="portfolio-item" data-category="photography">
                    <div class="portfolio-item-inner">
                        <div class="portfolio-img">
                            <img src="images/portfolio/portfolio-3.jpg" alt="">
                        </div>
                        <div class="portfolio-info">
                            <h4>photography</h4>
                            <div class="icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--===== portfolio-item end =====-->
                 <!--===== portfolio-item start =====-->
                   <div class="portfolio-item" data-category="web-design">
                    <div class="portfolio-item-inner">
                        <div class="portfolio-img">
                            <img src="images/portfolio/portfolio-4.jpg" alt="">
                        </div>
                        <div class="portfolio-info">
                            <h4>web-design</h4>
                            <div class="icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--===== portfolio-item end =====-->
                 <!--===== portfolio-item start =====-->
                   <div class="portfolio-item" data-category="wordpress">
                    <div class="portfolio-item-inner">
                        <div class="portfolio-img">
                            <img src="images/portfolio/portfolio-5.jpg" alt="">
                        </div>
                        <div class="portfolio-info">
                            <h4>wordpress</h4>
                            <div class="icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--===== portfolio-item end =====-->
                 <!--===== portfolio-item start =====-->
                   <div class="portfolio-item" data-category="photography">
                    <div class="portfolio-item-inner">
                        <div class="portfolio-img">
                            <img src="images/portfolio/portfolio-6.jpg" alt="">
                        </div>
                        <div class="portfolio-info">
                            <h4>photography</h4>
                            <div class="icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--===== portfolio-item end =====-->
              </div>
          </div>
      </section>
      <!--===== Portfolio Section End =====-->
      <!--===== Pricing Section Start =====-->
      <section class="pricing section-padding" id="pricing">
          <div class="container">
            <div class="row">
                <div class="section-title text-align">
                    <h5 class="sub-title">pricing</h5>
                    <h3 class="main-title">pricing plans</h3>
                    <ul class="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> <!--===== Section Title =====-->
              </div>
              <div class="row justify-content-center">
                  <div class="pricing-item">
                      <div class="pricing-plan">
                          <div class="pricing-header">
                              <h3>basic</h3>
                          </div>
                          <div class="pricing-price">
                              <span class="currency">$</span>
                              <span class="price">99</span>
                              <span class="period">/monthly</span>
                          </div>
                          <div class="pricing-body">
                              <ul>
                                  <li><i class="fa fa-check"></i> 5 GB BandWidth </li>
                                  <li><i class="fa fa-check"></i> Free Update </li>
                                  <li><i class="fa fa-check"></i> High Regulation Printing </li>
                                  <li><i class="fa fa-check"></i> Branding </li>
                                  <li><i class="fa fa-check"></i> Another Great Features </li>
                              </ul>
                          </div>
                          <div class="pricing-footer">
                              <a href="#" class="btn-2">get started</a>
                          </div>
                      </div>
                  </div>
                  <div class="pricing-item">
                    <div class="pricing-plan">
                        <div class="pricing-header">
                            <h3>premium</h3>
                            <h2 class="best-value">best value</h2>
                        </div>
                        <div class="pricing-price">
                            <span class="currency">$</span>
                            <span class="price">199</span>
                            <span class="period">/monthly</span>
                        </div>
                        <div class="pricing-body">
                            <ul>
                                <li><i class="fa fa-check"></i> 5 GB BandWidth </li>
                                <li><i class="fa fa-check"></i> Free Update </li>
                                <li><i class="fa fa-check"></i> High Regulation Printing </li>
                                <li><i class="fa fa-check"></i> Branding </li>
                                <li><i class="fa fa-check"></i> Another Great Features </li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="btn-1">get started</a>
                        </div>
                    </div>
                </div>
                <div class="pricing-item">
                    <div class="pricing-plan">
                        <div class="pricing-header">
                            <h3>ultimate</h3>
                        </div>
                        <div class="pricing-price">
                            <span class="currency">$</span>
                            <span class="price">299</span>
                            <span class="period">/monthly</span>
                        </div>
                        <div class="pricing-body">
                            <ul>
                                <li><i class="fa fa-check"></i> 5 GB BandWidth </li>
                                <li><i class="fa fa-check"></i> Free Update </li>
                                <li><i class="fa fa-check"></i> High Regulation Printing </li>
                                <li><i class="fa fa-check"></i> Branding </li>
                                <li><i class="fa fa-check"></i> Another Great Features </li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="btn-2">get started</a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>
      <!--===== Pricing Section End =====-->
      <!--===== Contact Section Start =====-->
       <section class="contact-section section-padding" id="contact">
           <div class="container">
            <div class="row">
                <div class="section-title text-align">
                    <h5 class="sub-title">contact</h5>
                    <h3 class="main-title">get in touch</h3>
                    <ul class="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> <!--===== Section Title =====-->
              </div>
              <div class="row">
                  <!--===== contact item start =====-->
                  <div class="contact-item">
                      <div class="contact-item-inner">
                          <i class="fas fa-phone"></i>
                          <span>Phone</span>
                          <p>03498309488</p>
                      </div>
                  </div>
                  <!--===== contact item end =====-->
                  <!--===== contact item start =====-->
                   <div class="contact-item">
                    <div class="contact-item-inner">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                        <p>codercryptical@gmail.com</p>
                    </div>
                </div>
                 <!--===== contact item end =====-->
                 <!--===== contact item start =====-->
                 <div class="contact-item">
                    <div class="contact-item-inner">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Address</span>
                        <p>Rawalpindi</p>
                    </div>
                </div>
                 <!--===== contact item end =====-->
              </div>
                 <!--===== Contact Form =====-->
              <div class="row">
                  <div class="contact-form">
                      <form action="">
                          <div class="row">
                              <div class="w-50">
                                  <div class="input-group">
                                      <input type="text" placeholder="Name" class="input-control">
                                  </div>
                                  <div class="input-group">
                                    <input type="email" placeholder="Email" class="input-control">
                                </div>
                                <div class="input-group">
                                    <input type="text" placeholder="Subject" class="input-control">
                                </div>
                              </div>
                              <div class="w-50">
                                  <div class="input-group">
                                      <textarea name="" class="input-control" placeholder="Message" id="" cols="30" rows="10"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="submit-btn">
                                  <button type="submit" class="btn-1">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
           </div>
       </section>
       <!--===== Contact Section End =====-->
       <!--===== Footer Section Start =====-->
       <footer class="footer">
           <div class="container">
               <div class="row justify-content-center">
                   <p class="copyright-text">&copy; 2021 by cryptical coder</p>
               </div>
           </div>
       </footer>
       <!--===== Footer Section End =====-->
       <!--===== Lightbox Start =====-->
      <div class="lightbox">
          <div class="lightbox-content">
              <div class="lightbox-close">&times;</div>
              <img src="images/portfolio/portfolio-2.jpg" onclick="nextItem()" class="lightbox-img" alt="">
              <div class="lightbox-caption">
                  <div class="caption-text"></div>
                  <div class="caption-counter"></div>
              </div>
          </div>
          <div class="lightbox-controls">
              <div class="prev-item" onclick="prevItem()"><i class="fa fa-angle-left"></i></div>
              <div class="next-item" onclick="nextItem()"><i class="fa fa-angle-right"></i></div>
          </div>
      </div>
      <!--===== Lightbox End =====-->
      <!--===== Main JS =====-->
    <script src="js/main.js"></script>
  );
}
