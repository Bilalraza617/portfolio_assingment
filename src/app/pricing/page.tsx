import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="pricing section-padding" id="pricing">
        <div className="container">
          <div className="row">
            <div className="section-title text-align">
              <h5 className="sub-title">pricing</h5>
              <h3 className="main-title">pricing plans</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="pricing-item">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>basic</h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="price">99</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> 5 GB BandWidth{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Free Update{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> High Regulation Printing{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Branding{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Another Great Features{" "}
                    </li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-2">
                    get started
                  </Link>
                </div>
              </div>
            </div>
            <div className="pricing-item">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>premium</h3>
                  <h2 className="best-value">best value</h2>
                </div>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="price">199</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> 5 GB BandWidth{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Free Update{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> High Regulation Printing{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Branding{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Another Great Features{" "}
                    </li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-1">
                    get started
                  </Link>
                </div>
              </div>
            </div>
            <div className="pricing-item">
              <div className="pricing-plan">
                <div className="pricing-header">
                  <h3>ultimate</h3>
                </div>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="price">299</span>
                  <span className="period">/monthly</span>
                </div>
                <div className="pricing-body">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> 5 GB BandWidth{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Free Update{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> High Regulation Printing{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Branding{" "}
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Another Great Features{" "}
                    </li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-2">
                    get started
                  </Link>
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
