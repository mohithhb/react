import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";

function Footer() {
  return (
    <section className="container-fluid footer bg-colorlight py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <img src={logo} alt="logo" className="img-fluid" />
            <h5>Ante Media</h5>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <h6 className="text-capitalize text-font-base font-textRegular font-header-Font fw-bold">
              Menu
            </h6>
            <ul className="menu-wrapper p-0">
              <li>
                <NavLink
                  className="text-decoration-none text-colorblack d-inline-block"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-colorblack d-inline-block"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-colorblack d-inline-block"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-colorblack d-inline-block"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none text-colorblack d-inline-block"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <h6 className="text-capitalize text-font-base font-textRegular font-header-Font fw-bold">
              Services
            </h6>
            <ul className="menu-wrapper p-0">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-colorblack d-inline-block"
                >
                  photography
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-colorblack d-inline-block"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-colorblack d-inline-block"
                >
                  Copywriting
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-decoration-none text-colorblack d-inline-block"
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <h6 className="fw-bold">Contact us</h6>
            <ul className="m-0 p-0 contact-wrapper">
              <li className="d-flex align-items-center">
                <span>Mail:</span>
                <a
                  href="mailto:media.ante@gmail.com"
                  className="text-decoration-none text-colorblack d-inline-block ml-2"
                >
                  media.ante@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <span>Phone:</span>
                <a
                  href="tel:+918105796469"
                  className="text-decoration-none text-colorblack d-inline-block ml-2"
                >
                  +91 8105796469
                </a>
              </li>
              <li className="d-flex align-items-start">
                <span>Address:</span>
                <p>
                  No 10, 2nd Main Road, Byraweshwarnagar, Vijayanagar, Bangalore
                  - 560072.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
