import React from 'react'
import logo from '../../assets/Images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="" className="logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaXTwitter className='icon' />
          </div>
        </div>
        <div className="footerlinkclass">
          <div className="footerLinks">
            <span className="linkTitle">
              Informartion
            </span>
            <li>
              <a href="">Home</a>
              <a href="">Explore</a>
              <a href="">Flight Status</a>
              <a href="">Travel</a>
              <a href="">Check In</a>
              <a href="">Manage Your Bookings</a>

            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Quick Links
            </span>
            <li>
              <a href="">FAQ</a>
              <a href="">How to</a>
              <a href="">Features</a>
              <a href="">baggage</a>
              <a href="">Route Map</a>
              <a href="">Our Communities</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer