import Image from "next/image";
import React from "react";
import portfolio_1 from "../../../public/images/portfolio/portfolio-1.jpg";
import portfolio_2 from "../../../public/images/portfolio/portfolio-2.jpg";
import portfolio_3 from "../../../public/images/portfolio/portfolio-3.jpg";
import portfolio_4 from "../../../public/images/portfolio/portfolio-4.jpg";
import portfolio_5 from "../../../public/images/portfolio/portfolio-5.jpg";
import portfolio_6 from "../../../public/images/portfolio/portfolio-6.jpg";

const page = () => {
  return (
    <div>
      <section className="portfolio section-padding" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title text-align">
              <h5 className="sub-title">portfolio</h5>
              <h3 className="main-title">our latest work</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="web-design">
                web design
              </button>
              <button type="button" data-filter="photography">
                photography
              </button>
              <button type="button" data-filter="wordpress">
                wordpress
              </button>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item" data-category="wordpress">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_1} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>web design</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item" data-category="wordpress">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_2} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>wordpress</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item" data-category="photography">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_3} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>photography</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item" data-category="web-design">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_4} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>web-design</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item" data-category="wordpress">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_5} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>wordpress</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item" data-category="photography">
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <Image src={portfolio_6} alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>photography</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
