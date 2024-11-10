import Image from "next/image";
import React from "react";
import portfolio_2 from "../../../public/images/portfolio/portfolio-2.jpg";

const page = () => {
  return (
    <div>
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title text-align">
              <h5 className="sub-title">contact</h5>
              <h3 className="main-title">get in touch</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* <!--===== Section Title =====--> */}
          </div>
          <div className="row">
            {/* <!--===== contact item start =====--> */}
            <div className="contact-item">
              <div className="contact-item-inner">
                <i className="fas fa-phone"></i>
                <span>Phone</span>
                <p>03498309488</p>
              </div>
            </div>
            {/* <!--===== contact item end =====-->
                  <!--===== contact item start =====--> */}
            <div className="contact-item">
              <div className="contact-item-inner">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
                <p>codercryptical@gmail.com</p>
              </div>
            </div>
            {/* <!--===== contact item end =====-->
                 <!--===== contact item start =====--> */}
            <div className="contact-item">
              <div className="contact-item-inner">
                <i className="fas fa-map-marker-alt"></i>
                <span>Address</span>
                <p>Rawalpindi</p>
              </div>
            </div>
            {/* <!--===== contact item end =====--> */}
          </div>
          {/* <!--===== Contact Form =====--> */}
          <div className="row">
            <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="w-50">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="input-control"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="input-control"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input-control"
                      />
                    </div>
                  </div>
                  <div className="w-50">
                    <div className="input-group">
                      <textarea
                        name=""
                        className="input-control"
                        placeholder="Message"
                        id=""
                        // cols="30"
                        // rows="10"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="submit-btn">
                    <button type="submit" className="btn-1">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--===== Contact Section End =====-->
       <!--===== Footer Section Start =====--> */}
      <footer className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <p className="copyright-text">&copy; 2021 by cryptical coder</p>
          </div>
        </div>
      </footer>
      {/* <!--===== Footer Section End =====-->
       <!--===== Lightbox Start =====--> */}
      <div className="lightbox">
        <div className="lightbox-content">
          <div className="lightbox-close">&times;</div>
          <Image
            src={portfolio_2}
            // onClick={nextItem}
            className="lightbox-img"
            alt=""
          />
          <div className="lightbox-caption">
            <div className="caption-text"></div>
            <div className="caption-counter"></div>
          </div>
        </div>
        <div className="lightbox-controls">
          <div
            className="prev-item"
            // onClick={prevItem}>
          >
            <i className="fa fa-angle-left"></i>
          </div>
          <div
            className="next-item"
            //  onClick={nextItem}>
          >
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
