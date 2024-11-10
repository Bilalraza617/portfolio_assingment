import Link from "next/link";
import React from "react";
import "../../public/css/style.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <Link href="/">
                Free<span>lancer</span>
              </Link>
            </div>
            <div className="links">
              <ul className="menu">
                <li className="nav-item">
                  <Link href="/" className="nav-link active">
                    Home <span></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="about" className="nav-link">
                    About <span></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="services" className="nav-link">
                    Services <span></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="portfolio" className="nav-link">
                    Portfolio <span></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="pricing" className="nav-link">
                    Pricing <span></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="contact" className="nav-link">
                    Contact <span></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
