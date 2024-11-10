import Image from "next/image";
import Link from "next/link";
import "../../public/css/style.css";
import hero from "../../public/images/hero.png";

export default function Home() {
  return (
    <div>
      <section className="home-section" id="home">
        <ul className="header-social">
          <li>
            <Link href="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="row align-items-center">
            <div className="home-text">
              <h4>Hello</h4>
              <h1>John Smith</h1>
              <span>Professional Freelancer Web Developer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, maxime possimus. Modi ipsam iste necessitatibus!
              </p>
              <Link href="#" className="btn btn-1">
                purchase now
              </Link>
            </div>
            <div className="home-image">
              <div className="img-box">
                <Image src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-hero-shape"></div>
      </section>
    </div>
  );
}
