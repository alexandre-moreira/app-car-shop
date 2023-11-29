import React from 'react'
import './Navbar.css'

import logo from '../../Assets/car_logo.png';

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logoDiv">
        <img src={logo} alt="Logo Imagem" className='logo' />
      </div>
      <div className="navbar">
        <ul className='menu'>
          <li className="listItem">
            <a href="/" className='link'>Used Cars</a>
          </li>
          <li className="listItem">
            <a href="/" className='link'>New Cars</a>
          </li>
          <li className="listItem">
            <a href="/" className='link'>Auctions</a>
          </li>
          <li className="listItem">
            <a href="/" className='link'>Sell</a>
          </li>
        </ul>

        <IoIosCloseCircle className='icon closeIcon'/>
      </div>
      <div className="singUp flex">
        <div className="text">Sing Up</div>
        <TbGridDots className='toggleNavbarIcon'/>
      </div>
     
    </div>
  )
}

export default Navbar