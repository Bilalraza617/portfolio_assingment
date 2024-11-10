import Image from "next/image";
import React from "react";
import about_hero from "../../../public/images/about_hero.png";

const page = () => {
  return (
    <div>
      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="about-image">
              <div className="img-box">
                <Image src={about_hero} alt="" />
                <div className="about-shape"></div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-title">
                <h5 className="sub-title">About</h5>
                <h3 className="main-title">Why You Hire Me?</h3>
                <ul className="line">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                blanditiis ab odio obcaecati suscipit minima est laboriosam
                nihil? Sint quos esse cumque quae Link, voluptatem quis sequi
                quia nemo, vel ab soluta, eum illo error consequuntur delectus
                sapiente nostrum magni placeat perferendis earum. Nesciunt ex
                vitae sunt hic magnam in sit quasi.
              </p>
              <div className="about-skills">
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">UI/UX Design</h6>
                    <div className="skill-percentage">
                      <p>
                        <span className="counter">90</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-progress="90%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">Web Design</h6>
                    <div className="skill-percentage">
                      <p>
                        <span className="counter">95</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-progress="95%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">HTML/CSS</h6>
                    <div className="skill-percentage">
                      <p>
                        <span className="counter">80</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-progress="80%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h6 className="skill-title">Sketch</h6>
                    <div className="skill-percentage">
                      <p>
                        <span className="counter">70</span>%
                      </p>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div
                        className="bar progress-line"
                        data-progress="70%"
                      ></div>
                    </div>
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
