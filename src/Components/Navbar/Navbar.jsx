import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../Assets/car_logo.png";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header");

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader("header addBg");
    }
  };

  window.addEventListener("scroll", addBg);
  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Logo Imagem" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Used Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Auctions
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="singUp flex">
        <div className="text">Sing Up</div>
        <TbGridDots className="toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
