import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => (
  <nav className="nav-wrapper">
    <h1>
      <a className="home_link" href="#home">FIRM LOGO</a>
    </h1>
    <div className="nav-block">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={700}
        delay={0}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={700}
        delay={0}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
