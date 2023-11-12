import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import menu from "../../icon1.png";
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from "react";

function Header() {
  function toggleClick() {
    const hamElem = document.querySelector(".ham-icon");
    const dropMenu = document.querySelector(".nav-outer-wrapper");
    hamElem.addEventListener("click", function () {
      dropMenu.classList.toggle("d-none");
      dropMenu.classList.toggle("clicked");
    });
  }
  useEffect(() => {
    //   Script to add sticky header
    const headerElem = document.querySelector(".header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 150) {
        headerElem.classList.add("sticky");
      } else {
        headerElem.classList.remove("sticky");
      }
    });
  });

  return (
    <section className="header p-3 bg-colorlight position-relative">
      <div className="container">
        <div className="row justify-content-between mx-0 align-items-center">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <img
            src={menu}
            className="d-lg-none d-block ham-icon"
            onClick={toggleClick}
          />
          <div className="nav-outer-wrapper p-0 d-lg-block d-none">
            <ul className="nav-wrapper d-lg-flex align-items-center p-0 mb-0 flex-column flex-lg-row">
              <li className="me-lg-3">
                <NavLink
                  to="/home"
                  className="font-textRegular text-colorblack"
                >
                  Home
                </NavLink>
              </li>
              <li className="me-lg-3">
                <NavLink
                  to="/about"
                  className="font-textRegular text-colorblack"
                >
                  About Us
                </NavLink>
              </li>
              <li className="me-lg-3">
                <NavLink
                  to="/blog"
                  className="font-textRegular text-colorblack"
                >
                  Blog
                </NavLink>
              </li>
              <li className="me-lg-3">
                <NavLink
                  to="/services"
                  className="font-textRegular text-colorblack"
                >
                  Services
                </NavLink>
              </li>
              <li className="me-lg-3">
                <NavLink
                  to="/contact-us"
                  className="font-textRegular text-colorblack"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
